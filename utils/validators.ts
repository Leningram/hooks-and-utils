export const isValidEmail = (email: string) => {
  const emailRegex = /^([A-Za-zа-яё0-9_\-.])+@([A-Za-z0-9a-zа-яё_\-.])+\.([A-Za-za-zа-яё ]{2,})$/;
  return emailRegex.test(email);
};
