import { CurrencyOptions } from "../interfaces/currency-options.interface";
import { formatDateSabre } from "./format-date-sabre.helper";

export function formatCurrencyCommand(options: CurrencyOptions): string {
    const { from, to, date } = options;
    const dateFormatted = formatDateSabre(date);
    const command = `DC¥${from}1/${to}/${dateFormatted}`;
    return command;
}