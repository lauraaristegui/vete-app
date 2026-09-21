export const onlyLetters = (value: string) =>
  value.replace(/[^\p{L}\s]/gu, "");

export const onlyNumbers = (value: string) =>
  value.replace(/\D/g, "");

export const isValidName = (value: string) =>
  value.trim().length >= 3 &&
  /^[\p{L}\s]+$/u.test(value.trim());

export const isValidEmail = (value: string) =>
  value === "" ||
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const formatDni = (value: string) => {
  const numbers = onlyNumbers(value).slice(0, 8);

  return numbers.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ".",
  );
};

export const isValidDni = (value: string) => {
  const numbers = onlyNumbers(value);

  return numbers.length === 7 || numbers.length === 8;
};