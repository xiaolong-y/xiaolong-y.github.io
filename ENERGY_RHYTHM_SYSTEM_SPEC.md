# Energy Rhythm System — Minimal Specification

## Core Concept

Time is energy. Activities either **drain** or **restore** your energy tank. The system tracks this balance over time to reveal your natural rhythms and predict sustainability.

---

## INPUT

### Data Source: Calendar Event Log

Standard format (iCal, Google Calendar export, or JSON):

```json
{
  "events": [
    {
      "start": "2025-01-15T09:00:00",
      "end": "2025-01-15T10:30:00",
      "title": "Team Standup",
      "category": "meeting"
    }
  ]
}
```

### Category Classification

Only 6 categories needed:

| Category | Energy Effect | Default Drain/Restore Rate |
|----------|---------------|---------------------------|
| `meeting` | Drain | -1.0 per hour |
| `work` | Drain | -0.7 per hour |
| `admin` | Drain | -0.4 per hour |
| `rest` | Restore | +0.5 per hour |
| `sleep` | Restore | +1.0 per hour |
| `vacant` | Restore | +0.3 per hour (passive recovery) |

**Auto-classification rules**:
- Events with keywords "meeting", "sync", "call", "1:1" → `meeting`
- Events with "focus", "deep work", "write", "code" → `work`
- Events with "email", "admin", "review" → `admin`
- Events with "lunch", "break", "walk" → `rest`
- Time blocks with no events → `vacant`
- 10pm-7am with no events → `sleep`

---

## ALGORITHM

### Step 1: Time Discretization

Convert calendar to hourly slots over N days:

```
Day 1: [sleep][sleep][sleep][sleep][sleep][sleep][sleep][vacant][work][meeting][work][rest][work][work][admin][vacant][rest][vacant][vacant][sleep][sleep][sleep][sleep][sleep]
        00     01     02     03     04     05     06     07      08    09       10    11    12    13    14     15      16    17      18      19     20     21     22     23
```

### Step 2: Energy Balance Calculation

```python
energy = STARTING_ENERGY  # e.g., 100
energy_timeline = []

for hour in all_hours:
    category = get_category(hour)
    rate = RATES[category]
    energy = clamp(energy + rate, 0, MAX_ENERGY)
    energy_timeline.append(energy)
```

Key constraint: Energy has floor (0 = burnout) and ceiling (100 = fully charged).

### Step 3: Rhythm Extraction

**Daily rhythm** (24-hour pattern):
```python
daily_rhythm = [0] * 24
for day in days:
    for hour in range(24):
        daily_rhythm[hour] += energy_at(day, hour)
daily_rhythm = [x / num_days for x in daily_rhythm]  # average
```

**Weekly rhythm** (7-day pattern):
```python
weekly_rhythm = [0] * 7
for week in weeks:
    for day in range(7):
        weekly_rhythm[day] += avg_energy_on(week, day)
weekly_rhythm = [x / num_weeks for x in weekly_rhythm]
```

### Step 4: Sustainability Metrics

```python
# Net energy change per week
weekly_delta = energy_end_of_week - energy_start_of_week

# Sustainability score
if weekly_delta >= 0:
    sustainability = "sustainable"
elif weekly_delta > -10:
    sustainability = "caution"
else:
    sustainability = "unsustainable"

# Time to burnout (if negative trend)
if weekly_delta < 0:
    weeks_to_burnout = current_energy / abs(weekly_delta)

# Recovery needed
deficit = MAX_ENERGY - current_energy
hours_to_full = deficit / REST_RATE
```

### Step 5: Forecast

Project energy forward using:
1. Scheduled future events (known drains)
2. Assumed vacant time restoration
3. Historical weekly pattern (if no events scheduled)

```python
for future_day in range(forecast_days):
    if has_scheduled_events(future_day):
        apply_scheduled_events()
    else:
        apply_historical_pattern(day_of_week)
```

---

## OUTPUT

### Visualization 1: Energy Tank

Current state at a glance.

```
┌─────────────────┐
│ ████████████░░░ │  78%
│                 │
│ ↑ +3 this week  │  sustainable
└─────────────────┘
```

### Visualization 2: Energy Timeline

Past + future energy balance.

```
100 ┤
    │    ╭─╮      ╭─╮      ╭─╮
 75 ┤╭──╯  ╰─╮  ╭╯  ╰─╮  ╭╯  ╰──╮
    │        ╰──╯      ╰──╯      ╰─ forecast
 50 ┤                              ···········
    │
 25 ┤
    │
  0 ┼────────────────────────────────────────
    Mon  Tue  Wed  Thu  Fri  Sat  Sun  Mon...
         ↑ today
```

### Visualization 3: Daily Rhythm (24h)

Average energy by hour.

```
     ▁▁▁▁▁▁▂▄▃▂▃▄▅▄▃▂▃▄▅▆▇█▇▅
     0  3  6  9  12 15 18 21 24

     Low: 9-11am (meetings drain)
     High: 8-10pm (recovered)
```

### Visualization 4: Weekly Rhythm (7d)

Average energy by day of week.

```
Mon ████████░░░░  62%
Tue ██████░░░░░░  48%  ← lowest (heavy meeting day)
Wed ████████░░░░  65%
Thu ███████░░░░░  58%
Fri █████████░░░  72%
Sat ███████████░  92%  ← peak
Sun ██████████░░  85%
```

### Visualization 5: Sustainability Dashboard

```
┌─────────────────────────────────────────────┐
│  WEEKLY ENERGY BALANCE                      │
├─────────────────────────────────────────────┤
│  Drained:    32 hours  │  Meetings: 12h    │
│  Restored:   38 hours  │  Work: 20h        │
│  ─────────────────────  │  Rest: 8h         │
│  Net: +6 hours          │  Sleep: 49h       │
│                         │  Vacant: 21h      │
│  Status: ✓ Sustainable  │                   │
└─────────────────────────────────────────────┘
```

### Visualization 6: Rhythm Comparison

Show ideal vs actual patterns.

```
Ideal:   ▂▁▁▁▁▁▂▄▆▇▇▆▅▆▇▇▆▅▆▇███▇▅▂
Actual:  ▂▁▁▁▁▁▂▃▂▁▂▃▄▃▂▂▃▄▅▆▇█▇▅▂
                 ↑↑↑
              morning drain
              higher than ideal
```

---

## IMPLEMENTATION NOTES

### Simplifications That Preserve Effectiveness

1. **Hourly granularity** — Fine enough to capture patterns, coarse enough to be simple
2. **6 categories** — Covers 95% of activities without complexity
3. **Linear energy model** — Avoids complex differential equations
4. **No FFT** — Simple averaging reveals daily/weekly rhythms
5. **Auto-classification** — Reduces manual input burden

### What This Misses (Acceptable Tradeoffs)

- Event-specific intensity (all meetings drain equally)
- Context switching costs (could add later)
- Circadian variation (could weight hours differently)
- Social vs solo energy (introvert/extrovert modes)

### Data Import Strategy

1. **Google Calendar**: Export as .ics, parse events
2. **Outlook**: Export as .csv or .ics
3. **Apple Calendar**: Export as .ics
4. **Manual**: Simple JSON format

All converge to the same internal format:
```json
{ "start": "ISO8601", "end": "ISO8601", "title": "string", "category": "string" }
```

---

## SUMMARY

| Component | Complexity | Why It Works |
|-----------|------------|--------------|
| Input | 1 file, 6 categories | Minimal classification burden |
| Algorithm | Linear energy balance | Captures drain/restore dynamics |
| Rhythm detection | Simple averaging | Daily/weekly patterns emerge naturally |
| Output | 6 visualizations | Each answers a specific question |

**The core insight**: Track energy as a balance sheet, not just expenditure. Sustainability = income ≥ expenses over time.
