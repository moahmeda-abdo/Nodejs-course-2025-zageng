
const arabicMonths = [
  "(1)يناير",
  "(2)فبراير",
  "(3)مارس",
  "(4)إبريل",
  "(5)مايو",
  "(6)يونيو",
  "(7)يوليو",
  "(8)أغسطس",
  "(9)سبتمبر",
  "(10)أكتوبر",
  "(11)نوفمبر",
  "(12)ديسمبر"
];

// way to get previous month
const getPreviousMonth = (currentMonth, currentYear) => {
  let previousMonthIndex = currentMonth - 1;
  let previousYear = currentYear;
  const cur = new Date()

  if (previousMonthIndex < 0) {
    previousMonthIndex = 11;
    previousYear -= 1;
  }

  return {
    month: arabicMonths[previousMonthIndex],
    year: previousYear
  };
};


//another  way to get previous month

const getPreviousMonth2 = () => {
  const date = new Date();
  date.setMonth(date.getMonth() - 1);

  return {
    month: arabicMonths[date.getMonth()],
    year: date.getFullYear()
  };
};

module.exports = { getPreviousMonth, arabicMonths, getPreviousMonth2 };
