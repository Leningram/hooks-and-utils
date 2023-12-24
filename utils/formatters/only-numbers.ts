const allowOnlyNumber = (value: string): number | string => {
  const valueNumber = Number(value.replace(/[^0-9]/g, ''));
  if (value !== '0' && valueNumber === 0) {
    return '';
  }
  return value.replace(/[^0-9]/g, '');
};

//EXAMPLE:

const str = '123aaBB+-';
console.log(allowOnlyNumber(str)) // '123'