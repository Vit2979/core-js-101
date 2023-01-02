
function parseDataFromRfc2822(value) {
  return new Date(value);
}

function parseDataFromIso8601(value) {
  return new Date(value);
}

function isLeapYear(date) {
  const year = date.getFullYear();
  if (year % 4) return false;
  if (!(year % 100) && (year % 400)) return false;
  return true;
}

function timeSpanToString(startDate, endDate) {
  return new Date(endDate.getTime() - startDate.getTime()).toISOString().slice(11, -1);
}

function angleBetweenClockHands(date) {
  const minutes = date.getMinutes();
  const hours = date.getUTCHours() % 12;
  const minutesAngle = minutes * 6;
  const hoursAngle = hours * 30 + minutes * 0.5;
  let angleBetween = Math.abs(hoursAngle - minutesAngle);
  if (angleBetween > 180) angleBetween = 360 - angleBetween;
  return (Math.PI * angleBetween) / 180;
}

module.exports = {
  parseDataFromRfc2822,
  parseDataFromIso8601,
  isLeapYear,
  timeSpanToString,
  angleBetweenClockHands,
};
