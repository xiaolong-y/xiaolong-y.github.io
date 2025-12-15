# Maximum Parallelization Strategy
## 8 Biases in ~30 Minutes with Full Pipeline Overlap

**Optimization Goal:** Complete all 8 remaining biases in MINIMUM time by maximizing parallel operations at every stage.

---

## Ultra-Parallel Architecture

```
┌────────────────────────────────────────────────────────────────────┐
│         PHASE 1: MAXIMUM PARALLEL DESIGN (8 Simultaneous)          │
│                          T+0 to T+20                                │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Designer-1        Designer-2        Designer-3        Designer-4  │
│  Confirmation      Anchoring         Hindsight         Dunning-    │
│  Bias              Bias              Bias              Kruger      │
│                                                                     │
│  Designer-5        Designer-6        Designer-7        Designer-8  │
│  Bandwagon         Spotlight         Sunk Cost         Framing     │
│  Effect            Effect            Fallacy           Effect      │
│                                                                     │
│  Each outputs complete HTML immediately upon completion             │
│  (No waiting for others - stream completion)                       │
└────────────────────────────────────────────────────────────────────┘
            ↓ (Streaming - files created as designers complete)
┌────────────────────────────────────────────────────────────────────┐
│              PHASE 2: STREAMING EXECUTION (Overlapped)             │
│                          T+5 to T+25                                │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Orchestrator continuously monitors all 8 windows                  │
│  As EACH designer completes → IMMEDIATE file creation              │
│                                                                     │
│  T+8:  Designer-1 done → Create bias-confirmation.html             │
│  T+10: Designer-5 done → Create bias-bandwagon.html                │
│  T+12: Designer-3 done → Create bias-hindsight.html                │
│  T+15: Designer-2 done → Create bias-anchoring.html                │
│  T+17: Designer-7 done → Create bias-sunk-cost.html                │
│  T+18: Designer-4 done → Create bias-dunning-kruger.html           │
│  T+20: Designer-6 done → Create bias-spotlight.html                │
│  T+22: Designer-8 done → Create bias-framing.html                  │
│                                                                     │
│  NO waiting for batch - continuous flow!                           │
└────────────────────────────────────────────────────────────────────┘
            ↓ (QA starts AS SOON AS first file ready)
┌────────────────────────────────────────────────────────────────────┐
│         PHASE 3: PARALLEL QA (Starts at T+8, Runs to T+30)         │
│                                                                     │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  QA-Visual-1           QA-Visual-2                                 │
│  Tests files 1-4       Tests files 5-8                             │
│  as they arrive        as they arrive                              │
│                                                                     │
│  QA-Technical-1        QA-Technical-2                              │
│  Tests files 1-4       Tests files 5-8                             │
│  as they arrive        as they arrive                              │
│                                                                     │
│  All 4 QA agents work simultaneously on available files            │
│  No waiting - test immediately when file created                   │
└────────────────────────────────────────────────────────────────────┘
            ↓
┌────────────────────────────────────────────────────────────────────┐
│              PHASE 4: PARALLEL FIXES (If needed)                   │
│                          T+25 to T+35                               │
├────────────────────────────────────────────────────────────────────┤
│  Orchestrator applies fixes to multiple files simultaneously       │
│  QA agents re-test fixed files in parallel                         │
└────────────────────────────────────────────────────────────────────┘
```

---

## Maximum Parallelization Rules

### Rule 1: 8 Designers, 1 Bias Each (vs 4 designers, 2 biases each)

**Benefit:** Eliminates per-designer bottleneck
- Old: Designer-Alpha must finish BOTH biases before either is available
- New: 8 independent streams, first completions available immediately

### Rule 2: Streaming File Creation (vs Batch)

**Benefit:** Eliminates waiting for slowest designer
- Old: Wait for all 4 designers → batch create → then QA
- New: Create file immediately when ANY designer completes → QA starts early

### Rule 3: 4 QA Agents Working Concurrently (vs 2)

**Benefit:** Doubles QA throughput
- QA-Visual-1: Files 1-4
- QA-Visual-2: Files 5-8
- QA-Technical-1: Files 1-4
- QA-Technical-2: Files 5-8

All 4 agents test simultaneously as files become available.

### Rule 4: Overlapping Phases (vs Sequential)

**Benefit:** Maximum pipeline utilization
- Design + Execution + QA all happening at same time
- No idle time
- Continuous flow from T+0 to completion

---

## Deployment Commands (Copy-Paste Ready)

### Step 1: Create All 8 Designer Sessions (Parallel)

```bash
# Create all sessions simultaneously
tmux new-session -d -s designer-1 -c "/Users/peteryang/Documents/Github/xiaolong-y.github.io" &
tmux new-session -d -s designer-2 -c "/Users/peteryang/Documents/Github/xiaolong-y.github.io" &
tmux new-session -d -s designer-3 -c "/Users/peteryang/Documents/Github/xiaolong-y.github.io" &
tmux new-session -d -s designer-4 -c "/Users/peteryang/Documents/Github/xiaolong-y.github.io" &
tmux new-session -d -s designer-5 -c "/Users/peteryang/Documents/Github/xiaolong-y.github.io" &
tmux new-session -d -s designer-6 -c "/Users/peteryang/Documents/Github/xiaolong-y.github.io" &
tmux new-session -d -s designer-7 -c "/Users/peteryang/Documents/Github/xiaolong-y.github.io" &
tmux new-session -d -s designer-8 -c "/Users/peteryang/Documents/Github/xiaolong-y.github.io" &
wait

# Start Claude in all sessions simultaneously
tmux send-keys -t designer-1:0 "claude" Enter &
tmux send-keys -t designer-2:0 "claude" Enter &
tmux send-keys -t designer-3:0 "claude" Enter &
tmux send-keys -t designer-4:0 "claude" Enter &
tmux send-keys -t designer-5:0 "claude" Enter &
tmux send-keys -t designer-6:0 "claude" Enter &
tmux send-keys -t designer-7:0 "claude" Enter &
tmux send-keys -t designer-8:0 "claude" Enter &
wait

sleep 8

echo "✅ All 8 designer sessions created and Claude started"
```

### Step 2: Brief All Designers (Parallel Messaging)

```bash
# Send all briefs simultaneously (parallel execution)
./send-claude-message.sh designer-1:0 "$(cat <<'EOF'
DESIGNER-1: Confirmation Bias

Create complete HTML file for Confirmation Bias visualization.

CONCEPT: Central belief bubble with magnetic properties. Matching particles attracted, opposing particles repelled. Toggle flips belief.

REFERENCE: /Users/peteryang/Documents/Github/xiaolong-y.github.io/bias-loss-aversion.html

CONSTRAINTS:
- Flexoki colors, IBM Plex Mono
- Canvas animation, particle physics
- Mobile responsive, dark mode
- Single HTML file (inline CSS/JS)

DO NOT create files yourself - OUTPUT complete HTML as code block.

File target: bias-confirmation.html (~8-10KB)

BEGIN NOW!
EOF
)" &

./send-claude-message.sh designer-2:0 "$(cat <<'EOF'
DESIGNER-2: Anchoring Bias

[Similar brief for Anchoring Bias]
EOF
)" &

./send-claude-message.sh designer-3:0 "$(cat <<'EOF'
DESIGNER-3: Hindsight Bias

[Similar brief for Hindsight Bias]
EOF
)" &

./send-claude-message.sh designer-4:0 "$(cat <<'EOF'
DESIGNER-4: Dunning-Kruger Effect

[Similar brief for Dunning-Kruger]
EOF
)" &

./send-claude-message.sh designer-5:0 "$(cat <<'EOF'
DESIGNER-5: Bandwagon Effect

[Similar brief for Bandwagon]
EOF
)" &

./send-claude-message.sh designer-6:0 "$(cat <<'EOF'
DESIGNER-6: Spotlight Effect

[Similar brief for Spotlight]
EOF
)" &

./send-claude-message.sh designer-7:0 "$(cat <<'EOF'
DESIGNER-7: Sunk Cost Fallacy

[Similar brief for Sunk Cost]
EOF
)" &

./send-claude-message.sh designer-8:0 "$(cat <<'EOF'
DESIGNER-8: Framing Effect

[Similar brief for Framing]
EOF
)" &

wait

echo "✅ All 8 designers briefed simultaneously"
```

### Step 3: Create 4 QA Sessions (Parallel)

```bash
# Create QA sessions
tmux new-session -d -s qa-visual-1 -c "/Users/peteryang/Documents/Github/xiaolong-y.github.io" &
tmux new-session -d -s qa-visual-2 -c "/Users/peteryang/Documents/Github/xiaolong-y.github.io" &
tmux new-session -d -s qa-tech-1 -c "/Users/peteryang/Documents/Github/xiaolong-y.github.io" &
tmux new-session -d -s qa-tech-2 -c "/Users/peteryang/Documents/Github/xiaolong-y.github.io" &
wait

# Start Claude
tmux send-keys -t qa-visual-1:0 "claude" Enter &
tmux send-keys -t qa-visual-2:0 "claude" Enter &
tmux send-keys -t qa-tech-1:0 "claude" Enter &
tmux send-keys -t qa-tech-2:0 "claude" Enter &
wait

sleep 8

echo "✅ All 4 QA sessions created"
```

### Step 4: Continuous Monitoring Script

```bash
# monitor-designers.sh - Run this in background
#!/bin/bash

completed=0
while [ $completed -lt 8 ]; do
  for i in {1..8}; do
    # Check if designer $i has outputted HTML
    output=$(tmux capture-pane -t designer-$i:0 -p | grep -c "<!DOCTYPE html>")

    if [ $output -gt 0 ]; then
      echo "Designer-$i COMPLETED at $(date +%T)"
      # Signal orchestrator to extract and create file
      touch /tmp/designer-$i-done
      ((completed++))
    fi
  done

  sleep 5  # Check every 5 seconds
done

echo "✅ All 8 designers completed!"
```

---

## Streaming Execution Pattern

### Orchestrator Watches for Completion Signals

```bash
# Instead of waiting for all, check continuously
while true; do
  # Check designer-1
  if [ -f /tmp/designer-1-done ] && [ ! -f /tmp/file-1-created ]; then
    echo "Creating bias-confirmation.html..."
    # Extract HTML from designer-1:0 window
    # Create file using Write tool
    touch /tmp/file-1-created

    # Immediately notify QA-Visual-1 to test
    ./send-claude-message.sh qa-visual-1:0 "TEST NOW: bias-confirmation.html is ready"
    ./send-claude-message.sh qa-tech-1:0 "TEST NOW: bias-confirmation.html is ready"
  fi

  # Check designer-2
  if [ -f /tmp/designer-2-done ] && [ ! -f /tmp/file-2-created ]; then
    echo "Creating bias-anchoring.html..."
    # ... same pattern
  fi

  # ... repeat for all 8 designers

  # Exit when all 8 files created
  created=$(ls /tmp/file-*-created 2>/dev/null | wc -l)
  if [ $created -eq 8 ]; then
    echo "✅ All 8 files created in streaming fashion!"
    break
  fi

  sleep 3
done
```

---

## QA Agent Assignments (Parallel Split)

### QA-Visual-1 (Files 1-4)
```bash
./send-claude-message.sh qa-visual-1:0 "$(cat <<'EOF'
QA-VISUAL-1: Test files AS THEY ARRIVE

Monitor for these files (test immediately when created):
1. bias-confirmation.html
2. bias-anchoring.html
3. bias-hindsight.html
4. bias-dunning-kruger.html

Don't wait for all - test each as soon as it exists!

[Full QA checklist...]
EOF
)"
```

### QA-Visual-2 (Files 5-8)
```bash
./send-claude-message.sh qa-visual-2:0 "$(cat <<'EOF'
QA-VISUAL-2: Test files AS THEY ARRIVE

Monitor for these files (test immediately when created):
5. bias-bandwagon.html
6. bias-spotlight.html
7. bias-sunk-cost.html
8. bias-framing.html

[Full QA checklist...]
EOF
)"
```

### QA-Technical-1 & QA-Technical-2
Similar split (files 1-4 vs 5-8)

---

## Timeline Optimization

### Sequential Approach (OLD):
```
T+0:   Start 4 designers
T+20:  All 4 complete (wait for slowest)
T+25:  Batch create 8 files
T+30:  Start 2 QA agents
T+45:  QA complete
─────────────────────────
Total: 45 minutes
```

### Parallel Approach (NEW):
```
T+0:   Start 8 designers simultaneously
T+5:   First designer done → Create file immediately
T+6:   QA starts on first file (while others still designing)
T+8:   Second file done → Create → QA tests
T+10:  Third file done → Create → QA tests
...
T+22:  Last file done → Create → QA tests
T+30:  All QA complete (tested files as they arrived)
─────────────────────────
Total: 30 minutes (33% faster!)
```

### Critical Path Analysis

**Bottleneck:** Slowest designer (determines when last file arrives)

**Mitigation:**
- 8 designers vs 4 → Higher chance of early completions
- Streaming creation → No waiting for batch
- Parallel QA → 4 agents vs 2 → Doubles QA speed
- Overlapping phases → QA works while design continues

**Expected Variance:**
- Fastest designer: T+8 (simple bias)
- Slowest designer: T+22 (complex bias)
- Average completion: T+15
- All QA done by: T+30

---

## Session Monitoring Dashboard

### Real-time Status Check

```bash
# dashboard.sh - Show all session statuses
#!/bin/bash

clear
echo "═══════════════════════════════════════════════════════════"
echo "  COGNITIVE BIAS PIPELINE - REAL-TIME STATUS"
echo "═══════════════════════════════════════════════════════════"
echo ""

echo "DESIGNERS:"
for i in {1..8}; do
  status="🔄 Working"
  [ -f /tmp/designer-$i-done ] && status="✅ Complete"

  last_line=$(tmux capture-pane -t designer-$i:0 -p | tail -1 | cut -c1-50)
  echo "  Designer-$i: $status | $last_line..."
done

echo ""
echo "FILES CREATED:"
ls -1 /Users/peteryang/Documents/Github/xiaolong-y.github.io/bias-*.html 2>/dev/null | wc -l | xargs echo "  Total:"

echo ""
echo "QA PROGRESS:"
echo "  QA-Visual-1:  $(tmux capture-pane -t qa-visual-1:0 -p | grep -c "✅ PASS")/4 files tested"
echo "  QA-Visual-2:  $(tmux capture-pane -t qa-visual-2:0 -p | grep -c "✅ PASS")/4 files tested"
echo "  QA-Tech-1:    $(tmux capture-pane -t qa-tech-1:0 -p | grep -c "✅ PASS")/4 files tested"
echo "  QA-Tech-2:    $(tmux capture-pane -t qa-tech-2:0 -p | grep -c "✅ PASS")/4 files tested"

echo ""
echo "════════════════════════════════════════════════════════════"
```

Run with: `watch -n 5 ./dashboard.sh` for live updating view

---

## Cleanup Script (Post-Completion)

```bash
# cleanup.sh - Kill all sessions when done
#!/bin/bash

echo "Cleaning up all bias visualization sessions..."

# Kill designer sessions
for i in {1..8}; do
  tmux kill-session -t designer-$i 2>/dev/null && echo "  Killed designer-$i"
done

# Kill QA sessions
tmux kill-session -t qa-visual-1 2>/dev/null && echo "  Killed qa-visual-1"
tmux kill-session -t qa-visual-2 2>/dev/null && echo "  Killed qa-visual-2"
tmux kill-session -t qa-tech-1 2>/dev/null && echo "  Killed qa-tech-1"
tmux kill-session -t qa-tech-2 2>/dev/null && echo "  Killed qa-tech-2"

# Clean up temp files
rm -f /tmp/designer-*-done /tmp/file-*-created

echo "✅ Cleanup complete!"
```

---

## Expected Performance Gains

| Metric | 4 Designers Sequential | 8 Designers Parallel | Improvement |
|--------|------------------------|----------------------|-------------|
| Design Phase | 20 min (bottleneck) | 15 min avg | 25% faster |
| Execution Phase | 5 min (batch wait) | 0 min (streaming) | 100% faster |
| QA Phase | 15 min (2 agents) | 8 min (4 agents) | 47% faster |
| **Total Time** | **45 min** | **30 min** | **33% faster** |
| Idle Time | High (sequential) | Near zero | Maximized utilization |
| First File Ready | T+25 | T+5 | 80% faster to first output |

---

## Risk Mitigation (Maximum Parallelization)

### Risk: Too Many Sessions Overwhelm System

**Likelihood:** Low
**Mitigation:**
- 8 designers + 4 QA = 12 Claude sessions
- Modern systems handle this easily
- Can reduce to 6 designers + 2 QA if needed

### Risk: Orchestrator Can't Keep Up with Streaming

**Likelihood:** Low
**Mitigation:**
- File creation is fast (<10 seconds per file)
- Designers take 8-20 min → Plenty of time
- Automation script handles monitoring

### Risk: QA Starts Before Files Ready

**Likelihood:** Low
**Mitigation:**
- QA agents instructed to wait for files to exist
- Can check file existence before testing
- Signal-based coordination (touch /tmp/file-ready)

---

## READY TO DEPLOY!

**Command to start everything:**

```bash
# One-liner to launch entire pipeline
./deploy-parallel-pipeline.sh
```

**Where `deploy-parallel-pipeline.sh` contains:**

```bash
#!/bin/bash
set -e

echo "🚀 Deploying Maximum Parallel Cognitive Bias Pipeline"
echo ""

echo "Step 1: Creating 8 designer sessions..."
# [Commands from Step 1 above]

echo "Step 2: Briefing all designers..."
# [Commands from Step 2 above]

echo "Step 3: Creating 4 QA sessions..."
# [Commands from Step 3 above]

echo "Step 4: Starting monitoring dashboard..."
./dashboard.sh &

echo "Step 5: Starting streaming execution monitor..."
./monitor-designers.sh &

echo ""
echo "✅ PIPELINE DEPLOYED!"
echo "   - 8 designers working in parallel"
echo "   - Streaming file creation active"
echo "   - 4 QA agents ready to test"
echo ""
echo "Monitor progress: watch -n 5 ./dashboard.sh"
echo "Estimated completion: 30 minutes"
echo ""
```

**This is the FASTEST possible approach!** 🚀
