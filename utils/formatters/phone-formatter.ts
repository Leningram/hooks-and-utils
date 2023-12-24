export const phoneFormatter = (value:string) => {
  const numbers = value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
  if (!numbers) {
    return '';
  }
  const newValue = !numbers[2]
    ? numbers[1]
    : numbers[1] + ' ' + numbers[2] + (numbers[3] ? '-' + numbers[3] : '') + (numbers[4] ? '-' + numbers[4] : '');
  return newValue;
};

// EXAMPLE:

const phone = '9521234567';
console.log(phoneFormatter(phone)) // '952 123-45-67'