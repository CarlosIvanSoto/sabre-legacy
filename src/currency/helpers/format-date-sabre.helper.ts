import { getMonthName, MonthNumber } from './get-month-name-sabre.helper';

export function formatDateSabre(date: string): string {
    const dateSplit = date.split('-');
    const monthNumber = parseInt(dateSplit[1]);
    const numberValid = (monthNumber >= 1 && monthNumber <= 12);
    if (!numberValid) {
       throw new Error('Month is not valid:' + monthNumber); 
    }
    const month: MonthNumber = monthNumber as MonthNumber;
    const year = dateSplit[0].slice(2,4);

    return dateSplit[2]+getMonthName(month) + year;
}