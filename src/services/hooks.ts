export const currencyConverter = (payment: string): string => {
  const amount = Number(payment);
  if (amount <= 3) return '';
  return (amount <= 100 ? amount - 3 : amount * 0.97).toFixed(2);
};
