// Create function
function Time() {
  // Create object Date object
  const date = new Date();

  const weekday = ["Sun", "Mon", "Tues", "Thur", "Fri", "Sat", "Sun"];

  let dayOfWeek = weekday[date.getDay()];
  // Get day of the Month
  let day = date.getDate(); // me

  // Get month
  // Month starts from 0 so + 1 will restart at 12
  let month = date.getMonth() + 1;

  // Get year
  let year = date.getFullYear();

  // Get hour
  let hour = date.getHours();

  // Get minute
  let minute = date.getMinutes();

  // Get second
  let second = date.getSeconds();

  // Set time period to empty string
  let period = "";

  // Set time period to change from AM / Pm depending on if the hour is less than 12
  // Changes from 24-format to 12 hour-format
  if (hour >= 12) {
    period = "PM";
  } else {
    period = "AM";
  }

  // Convert time into 12-hour format
  if (hour === 0) {
    hour = 12;
  } else {
    if (hour > 12) {
      hour += -12;
    }
  }

  // Update times if they're less than 10 and append with a 0 in front of them
  minute = update(minute);
  second = update(second);
  day = update(day);
  month = update(month);

  // Adds elements to clock ID
  document.getElementById("clock").innerText =
    dayOfWeek +
    ", " +
    day +
    " / " +
    month +
    " / " +
    year +
    "\n" +
    hour +
    " : " +
    minute +
    " : " +
    second +
    " " +
    period;

  // Set timer to 1 sec
  // To click over 1 second every 1000ms
  setTimeout(Time, 1000);
}

// Function to update time elements if they are less than 10

// add 0 before time elements if they are less than 10
function update(t) {
  if (t < 10) {
    return "0" + t;
  } else {
    return t;
  }
}

Time();
