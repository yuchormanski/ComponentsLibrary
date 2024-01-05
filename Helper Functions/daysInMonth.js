function isWeekday(year, month, day) {
  day = new Date(year, month, day).getDay();
  return day != 0 && day != 6;
}
function daysInMonth(iMonth, iYear) {
  return 32 - new Date(iYear, iMonth, 32).getDate();
}

//get days in current month
function getWeekdaysInMonth(month, year) {
  const days = daysInMonth(month, year);
  let weekdays = 0;
  for (var i = 0; i < days; i++) {
    if (isWeekday(year, month, i + 1)) weekdays++;
  }
  return weekdays;
}

//   get days in last month
function getWeekdaysInLastMonth() {
  let month = new Date().getMonth();
  let year = new Date().getFullYear();

  month - 1 === -1 ? ((month = 11), year--) : month - 1;
  const days = daysInMonth(month, year);
  let weekdays = 0;
  for (var i = 0; i < days; i++) {
    if (isWeekday(year, month, i + 1)) weekdays++;
  }
  return weekdays;
}
