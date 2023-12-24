function compareDates(dateString1: string, dateString2: string): 0 | 1 | -1 {
  const [day1, month1, year1] = dateString1.split('.').map(Number);
  const [day2, month2, year2] = dateString2.split('.').map(Number);

  if (year1 < year2) {
    return -1;
  } else if (year1 > year2) {
    return 1;
  }

  if (month1 < month2) {
    return -1;
  } else if (month1 > month2) {
    return 1;
  }

  if (day1 < day2) {
    return -1;
  } else if (day1 > day2) {
    return 1;
  }
  return 0;
}

// EXAMPLE:

const result = compareDates('26.11.2023', '25.12.2023');
console.log(result); //-1
