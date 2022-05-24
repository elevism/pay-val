/**
 * Validate expiration month and year
 */
export const validateExpiration = (month: string, year: string) => {
  if (!validateExpirationMonth(month) || !validateExpirationYear(year)) {
    return false;
  }

  // check that it expires this month or later
  const now = new Date();
  const thisYear = now.getFullYear();
  const thisMonth = now.getMonth() + 1;

  return (
    +year > now.getFullYear() ||
    (+year === thisYear && +month >= thisMonth)
  );
};

/**
 * Validate the expiration month
 */
export const validateExpirationMonth = (month: string) => {
  if (!month || month.length !== 2) {
    return false;
  }

  const num = parseInt(month, 10);

  return !isNaN(+month) && num > 0 && num < 13 && month.length === 2;
};

/**
 * Validate the expiration year
 */
export const validateExpirationYear = (year: string) => {
  if (!year || (year.length !== 2 && year.length !== 4)) {
    return false;
  }

  const now = new Date();

  const yearPrefix = year.length === 4 ? '' : `${now.getFullYear()}`.substring(0, 2);

  const fullYear = `${yearPrefix}${year}`;

  const num = parseInt(fullYear, 10);

  return !isNaN(+num) && num >= now.getFullYear();
};
