import {Currency} from '../constants/TypesMoney';

export const currencyConverter = (payment: string): string => {
  const amount = Number(payment);
  if (amount <= 3) {
    return '';
  }
  const commission = amount <= 100 ? amount - 3 : amount * 0.97;
  return (commission * Currency.VES).toFixed(2);
};
