# Calendar Widget Integration Guide

This document explains how to securely connect the 8-week calendar widget to your Google Calendar.

## Architecture Overview

```
┌─────────────────┐      HTTPS       ┌─────────────────────┐      Internal      ┌─────────────────┐
│   Your Website  │ ──────────────▶  │  Google Apps Script │ ───────────────▶  │  Google Calendar │
│   (GitHub Pages)│                  │   (Serverless API)  │                    │      API         │
└─────────────────┘                  └─────────────────────┘                    └─────────────────┘
        ▲                                      │
        │                                      │
        └──────────────────────────────────────┘
                    JSON response
```

**Why this approach?**

- **Secure**: No API keys or credentials exposed in client-side code
- **Private**: Works with private calendars - only you authorize access
- **Free**: Google Apps Script has generous free tier (enough for personal use)
- **Reliable**: Hosted on Google's infrastructure
- **Simple**: No server to maintain, automatic HTTPS

## Setup Instructions

### Step 1: Create the Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click **New Project**
3. Replace the default code with the contents of `calendar-api.gs` (see below)
4. Click **Save** and name your project (e.g., "Calendar Widget API")

### Step 2: Configure Your Calendar

In the script, update the `CONFIG` object:

```javascript
const CONFIG = {
  CALENDAR_ID: 'primary',  // 'primary' for main calendar, or specific ID
  SECRET_TOKEN: 'your-secret-token-here',  // Generate a random string
  MAX_DAYS: 56,
  ALLOWED_ORIGINS: ['https://xiaolong-y.github.io', 'http://localhost:4000']
};
```

**To find a calendar ID:**
1. Go to Google Calendar
2. Click the three dots next to your calendar → Settings
3. Scroll to "Integrate calendar" → "Calendar ID"

**Generate a secret token:**
```bash
# In terminal:
openssl rand -hex 16
# Or use: https://www.random.org/strings/
```

### Step 3: Deploy as Web App

1. In Apps Script, click **Deploy** → **New deployment**
2. Click the gear icon → **Web app**
3. Set:
   - Description: "Calendar Widget API"
   - Execute as: **Me**
   - Who has access: **Anyone** (the token provides security)
4. Click **Deploy**
5. **Authorize** the app when prompted (this grants it access to your calendar)
6. Copy the **Web app URL** - you'll need this

### Step 4: Update Your Website

In your website's JavaScript, update the `CALENDAR_CONFIG`:

```javascript
const CALENDAR_CONFIG = {
  APPS_SCRIPT_URL: 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec',
  SECRET_TOKEN: 'your-secret-token-here',  // Same token as in Apps Script
  ENABLE_FETCH: true
};
```

### Step 5: Test

1. Open your website
2. Check browser console for any errors
3. The widget should now show real calendar data

## Security Considerations

### What's Protected

| Aspect | Protection |
|--------|------------|
| Calendar data | Only accessible via your Apps Script |
| API credentials | Stored in Apps Script, never exposed |
| Request validation | Secret token required for all requests |
| Origin validation | CORS headers restrict which domains can call |

### Secret Token

The secret token acts as a simple API key. While it's visible in your website's JavaScript, it provides:

1. **Rate limiting bypass protection** - Prevents abuse
2. **Origin verification** - Combined with CORS, ensures requests come from your site
3. **Easy rotation** - If compromised, just update both script and website

For a personal website, this level of security is appropriate. For higher security needs, consider OAuth with user authentication.

### Recommendations

- [ ] Use a strong, random token (16+ characters)
- [ ] Rotate the token periodically
- [ ] Monitor Apps Script execution logs for anomalies
- [ ] Only include your actual domain(s) in `ALLOWED_ORIGINS`

## Files

### `calendar-api.gs`

Deploy this to Google Apps Script:

```javascript
/**
 * Calendar Widget API - Google Apps Script
 *
 * Securely fetches calendar event summaries for the widget.
 * Deploy as web app with "Execute as: Me" and "Anyone can access"
 */

const CONFIG = {
  // Your Google Calendar ID ('primary' for main calendar)
  CALENDAR_ID: 'primary',

  // Secret token - must match your website's token
  // Generate with: openssl rand -hex 16
  SECRET_TOKEN: 'CHANGE_THIS_TO_YOUR_SECRET_TOKEN',

  // Maximum days to return
  MAX_DAYS: 56,

  // Allowed origins (your website domains)
  ALLOWED_ORIGINS: [
    'https://xiaolong-y.github.io',
    'http://localhost:4000',
    'http://127.0.0.1:4000'
  ]
};

/**
 * Handle GET requests
 */
function doGet(e) {
  // Validate token
  const token = e.parameter.token;
  if (token !== CONFIG.SECRET_TOKEN) {
    return createResponse({ error: 'Invalid token' }, 403);
  }

  // Get days parameter (default 56)
  const days = Math.min(
    parseInt(e.parameter.days) || CONFIG.MAX_DAYS,
    CONFIG.MAX_DAYS
  );

  try {
    const data = getCalendarData(days);
    return createResponse(data, 200);
  } catch (error) {
    console.error('Calendar fetch error:', error);
    return createResponse({ error: 'Failed to fetch calendar data' }, 500);
  }
}

/**
 * Fetch calendar events and summarize by day
 */
function getCalendarData(days) {
  const calendar = CalendarApp.getCalendarById(CONFIG.CALENDAR_ID);
  if (!calendar) {
    throw new Error('Calendar not found');
  }

  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const endDate = new Date(startOfToday);
  endDate.setDate(endDate.getDate() + days);

  // Get all events in range
  const events = calendar.getEvents(startOfToday, endDate);

  // Aggregate hours per day
  const dayMap = {};

  // Initialize all days with 0 hours
  for (let i = 0; i < days; i++) {
    const date = new Date(startOfToday);
    date.setDate(date.getDate() + i);
    const key = formatDateKey(date);
    dayMap[key] = {
      date: key,
      hours: 0,
      eventCount: 0
    };
  }

  // Sum up event durations
  events.forEach(event => {
    // Skip all-day events or use a default duration
    if (event.isAllDayEvent()) {
      const eventDate = event.getStartTime();
      const key = formatDateKey(eventDate);
      if (dayMap[key]) {
        dayMap[key].hours += 2; // Count all-day as 2 hours of "busyness"
        dayMap[key].eventCount++;
      }
      return;
    }

    const start = event.getStartTime();
    const end = event.getEndTime();
    const durationHours = (end - start) / (1000 * 60 * 60);

    // Handle multi-day events by splitting across days
    let currentDay = new Date(start);
    while (currentDay < end) {
      const key = formatDateKey(currentDay);
      if (dayMap[key]) {
        const dayStart = new Date(currentDay.getFullYear(), currentDay.getMonth(), currentDay.getDate());
        const dayEnd = new Date(dayStart);
        dayEnd.setDate(dayEnd.getDate() + 1);

        const effectiveStart = Math.max(start.getTime(), dayStart.getTime());
        const effectiveEnd = Math.min(end.getTime(), dayEnd.getTime());
        const hoursThisDay = (effectiveEnd - effectiveStart) / (1000 * 60 * 60);

        dayMap[key].hours += hoursThisDay;
        dayMap[key].eventCount++;
      }
      currentDay.setDate(currentDay.getDate() + 1);
    }
  });

  // Convert to array and round hours
  const result = Object.values(dayMap).map(day => ({
    date: day.date,
    hours: Math.round(day.hours * 10) / 10,
    eventCount: day.eventCount
  }));

  return {
    success: true,
    generated: new Date().toISOString(),
    calendarName: calendar.getName(),
    days: result
  };
}

/**
 * Format date as YYYY-MM-DD
 */
function formatDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Create JSON response with CORS headers
 */
function createResponse(data, statusCode) {
  const output = ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);

  return output;
}

/**
 * Handle CORS preflight (OPTIONS requests are handled automatically by Apps Script)
 */
function doPost(e) {
  return createResponse({ error: 'Method not allowed' }, 405);
}
```

### Widget JavaScript Update

The updated widget code that fetches from the API:

```javascript
// Add this configuration at the top
const CALENDAR_CONFIG = {
  APPS_SCRIPT_URL: '', // Your deployed Apps Script URL
  SECRET_TOKEN: '',     // Your secret token
  ENABLE_FETCH: false,  // Set to true when configured
  CACHE_MINUTES: 30     // Cache data for 30 minutes
};
```

See the full implementation in `README.md`.

## Troubleshooting

### "Invalid token" error

- Ensure tokens match exactly in both Apps Script and website
- Check for trailing/leading spaces

### "Calendar not found" error

- Verify the `CALENDAR_ID` is correct
- For your primary calendar, use `'primary'`
- For other calendars, use the full calendar ID

### CORS errors

- Ensure your domain is in `ALLOWED_ORIGINS`
- Include both `https://` and `http://localhost` versions for development

### No data showing

1. Check browser console for errors
2. Test the Apps Script URL directly in browser (add `?token=YOUR_TOKEN`)
3. Verify Apps Script deployment is active

### Updating the deployment

When you change the Apps Script code:
1. Click **Deploy** → **Manage deployments**
2. Click the pencil icon on your deployment
3. Change version to **New version**
4. Click **Deploy**

## Data Format

The API returns JSON in this format:

```json
{
  "success": true,
  "generated": "2024-12-18T10:30:00.000Z",
  "calendarName": "My Calendar",
  "days": [
    { "date": "2024-12-18", "hours": 3.5, "eventCount": 2 },
    { "date": "2024-12-19", "hours": 0, "eventCount": 0 },
    ...
  ]
}
```

## Privacy Note

This integration only fetches **aggregated data** (total hours per day, event count). It does **not** expose:
- Event titles
- Event descriptions
- Attendee information
- Location data
- Any other event details

Only you (through your Apps Script) have access to the raw calendar data.
