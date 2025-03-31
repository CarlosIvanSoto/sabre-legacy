export enum ListMonth {
  'JAN' = 1,
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
}
export type MonthNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 
export type Month = keyof typeof ListMonth
export const getMonthName = (month: MonthNumber) => ListMonth[month];
export const formatMonth = (month: Month) => String(ListMonth[month]).padStart(2, '0');
