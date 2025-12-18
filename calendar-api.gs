/**
 * Calendar Widget API - Google Apps Script
 *
 * Securely fetches calendar event summaries for the 8-week widget.
 *
 * SETUP:
 * 1. Go to script.google.com and create new project
 * 2. Paste this code
 * 3. Update CONFIG below with your settings
 * 4. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the deployment URL to your website config
 */

const CONFIG = {
  // Your Google Calendar ID
  // Use 'primary' for your main calendar
  // Or find specific ID: Calendar Settings → Integrate calendar → Calendar ID
  CALENDAR_ID: 'primary',

  // Secret token for API authentication
  // Generate: openssl rand -hex 16
  // Must match the token in your website's JavaScript
  SECRET_TOKEN: 'CHANGE_THIS_TO_YOUR_SECRET_TOKEN',

  // Maximum days to return (widget uses 56 = 8 weeks)
  MAX_DAYS: 56,

  // Allowed origins for CORS (your website domains)
  ALLOWED_ORIGINS: [
    'https://xiaolong-y.github.io',
    'http://localhost:4000',
    'http://127.0.0.1:4000'
  ]
};

/**
 * Handle HTTP GET requests
 * URL format: ?token=SECRET&days=56
 */
function doGet(e) {
  // Validate authentication token
  const token = e.parameter.token;
  if (token !== CONFIG.SECRET_TOKEN) {
    return createJsonResponse({
      success: false,
      error: 'Invalid or missing token'
    }, 403);
  }

  // Parse days parameter with bounds checking
  const requestedDays = parseInt(e.parameter.days) || CONFIG.MAX_DAYS;
  const days = Math.min(Math.max(requestedDays, 1), CONFIG.MAX_DAYS);

  try {
    const data = fetchCalendarSummary(days);
    return createJsonResponse(data, 200);
  } catch (error) {
    console.error('Calendar API error:', error.message, error.stack);
    return createJsonResponse({
      success: false,
      error: 'Failed to fetch calendar data',
      message: error.message
    }, 500);
  }
}

/**
 * Fetch calendar events and aggregate hours per day
 * Returns only aggregated data - no event details exposed
 */
function fetchCalendarSummary(days) {
  const calendar = CalendarApp.getCalendarById(CONFIG.CALENDAR_ID);

  if (!calendar) {
    throw new Error(`Calendar not found: ${CONFIG.CALENDAR_ID}`);
  }

  // Calculate date range: today through N days ahead
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const endDate = new Date(startOfToday);
  endDate.setDate(endDate.getDate() + days);

  // Fetch all events in the date range
  const events = calendar.getEvents(startOfToday, endDate);

  // Initialize day map with zeros
  const dayMap = new Map();
  for (let i = 0; i < days; i++) {
    const date = new Date(startOfToday);
    date.setDate(date.getDate() + i);
    const key = toDateKey(date);
    dayMap.set(key, {
      date: key,
      hours: 0,
      eventCount: 0
    });
  }

  // Process each event
  for (const event of events) {
    processEvent(event, dayMap);
  }

  // Convert map to sorted array
  const daysArray = Array.from(dayMap.values())
    .sort((a, b) => a.date.localeCompare(b.date))
    .map(day => ({
      date: day.date,
      hours: Math.round(day.hours * 10) / 10,  // Round to 1 decimal
      eventCount: day.eventCount
    }));

  return {
    success: true,
    generated: new Date().toISOString(),
    calendarName: calendar.getName(),
    totalDays: days,
    days: daysArray
  };
}

/**
 * Process a single event and add its time to relevant days
 */
function processEvent(event, dayMap) {
  // Handle all-day events
  if (event.isAllDayEvent()) {
    const startDate = event.getStartTime();
    const endDate = event.getEndTime();

    // All-day events end at midnight of the next day
    let current = new Date(startDate);
    while (current < endDate) {
      const key = toDateKey(current);
      const dayData = dayMap.get(key);
      if (dayData) {
        // Count all-day events as moderate busyness
        dayData.hours += 2;
        dayData.eventCount++;
      }
      current.setDate(current.getDate() + 1);
    }
    return;
  }

  // Handle timed events
  const eventStart = event.getStartTime();
  const eventEnd = event.getEndTime();

  // Skip invalid events
  if (eventEnd <= eventStart) return;

  // Process each day the event spans
  let currentDayStart = new Date(
    eventStart.getFullYear(),
    eventStart.getMonth(),
    eventStart.getDate()
  );

  while (currentDayStart < eventEnd) {
    const key = toDateKey(currentDayStart);
    const dayData = dayMap.get(key);

    if (dayData) {
      // Calculate how much of this event falls on this day
      const dayEnd = new Date(currentDayStart);
      dayEnd.setDate(dayEnd.getDate() + 1);

      const effectiveStart = new Date(Math.max(eventStart.getTime(), currentDayStart.getTime()));
      const effectiveEnd = new Date(Math.min(eventEnd.getTime(), dayEnd.getTime()));

      const hoursOnThisDay = (effectiveEnd - effectiveStart) / (1000 * 60 * 60);

      if (hoursOnThisDay > 0) {
        dayData.hours += hoursOnThisDay;
        dayData.eventCount++;
      }
    }

    currentDayStart.setDate(currentDayStart.getDate() + 1);
  }
}

/**
 * Format date as YYYY-MM-DD (ISO date string)
 */
function toDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Create JSON response
 * Note: Apps Script handles CORS automatically for web apps
 */
function createJsonResponse(data, statusCode) {
  return ContentService
    .createTextOutput(JSON.stringify(data, null, 2))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Handle POST requests (not supported)
 */
function doPost(e) {
  return createJsonResponse({
    success: false,
    error: 'POST method not supported. Use GET.'
  }, 405);
}

/**
 * Test function - run this in Apps Script editor to verify setup
 */
function testCalendarAccess() {
  const calendar = CalendarApp.getCalendarById(CONFIG.CALENDAR_ID);

  if (!calendar) {
    console.log('ERROR: Calendar not found. Check CALENDAR_ID.');
    return;
  }

  console.log('Calendar found:', calendar.getName());

  const now = new Date();
  const weekLater = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  const events = calendar.getEvents(now, weekLater);

  console.log(`Found ${events.length} events in the next 7 days`);

  // Test the full fetch
  const result = fetchCalendarSummary(7);
  console.log('API response preview:', JSON.stringify(result, null, 2));
}
