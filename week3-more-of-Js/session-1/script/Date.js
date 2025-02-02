// Date Constructor 

// 1. Current date and time
const now = new Date();

// 2. Specific date and time (ISO 8601 format)
const specificDate = new Date('2023-12-31T23:59:59Z');

// 3. Date string 
const dateString = new Date('March 15, 2024 12:30:00');

// 4. Date components: year, month (0-based), day, hours, minutes, seconds, milliseconds
const dateComponents = new Date(2024, 1, 29, 15, 45, 30, 500);


// Date Methods Examples

console.log('Current Date:', now.toString());                // Converts date to a readable string
console.log('ISO String:', now.toISOString());               // Converts to ISO format
console.log('UTC String:', now.toUTCString());               // Converts to UTC string
console.log('Date Only:', now.toDateString());               // Returns only the date part
console.log('Time Only:', now.toTimeString());               // Returns only the time part

console.log('Year:', now.getFullYear());                     // Gets the full year
console.log('Month (0-based):', now.getMonth());             // Gets the month (0-11)
console.log('Date:', now.getDate());                         // Gets the day of the month (1-31)
console.log('Day of Week:', now.getDay());                   // Gets the day of the week (0-6, Sun-Sat)
console.log('Hours:', now.getHours());                       // Gets the hours (0-23)
console.log('Minutes:', now.getMinutes());                   // Gets the minutes (0-59)
console.log('Seconds:', now.getSeconds());                   // Gets the seconds (0-59)
console.log('Milliseconds:', now.getMilliseconds());         // Gets the milliseconds (0-999)
console.log('Timestamp (ms since Epoch):', now.getTime());   // Gets the timestamp

// Setting Date Components
now.setFullYear(2025);
now.setMonth(5);              // June (0-based) -> very important note✅
now.setDate(15);
now.setHours(10, 30, 45, 250); // Sets hours, minutes, seconds, milliseconds

console.log('Updated Date:', now.toString());
