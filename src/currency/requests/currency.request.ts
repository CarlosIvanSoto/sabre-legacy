import { request } from "../../common/helpers/request.helper";
import { sabreCommand } from "../../common/helpers/sabre-command.helper";
import { ActionsRQ } from "../../common/interfaces/actions.interface";
import { CurrencyOptions } from "./interfaces/currency-options";

/**
 * {{header}}
 * 
 * {{currencyRequest(options)}}
 * 
 * {{footer}}
 * @param options CurrencyOptions
 * @returns string
 */
function currencyRequest(options: CurrencyOptions): string {
    const { authorization, conversationId } = options;
    const body = sabreCommand(currencyCommand(options))
    return request({
        body,
        authorization,
        conversationId,
        action: ActionsRQ.SABRE_COMMANDS
    })
}

function currencyCommand(options: CurrencyOptions): string {
    const { from, to, date } = options;
    const dateFormatted = formatDate(date);
    const command = `DC¥${from}1/${to}/${dateFormatted}`;
    return command;
}

function formatDate(date: string): string {
    const dateSplit = date.split('-');
    const year = dateSplit[0].slice(2,4);
    return dateSplit[2]+getMonth(parseInt(dateSplit[1])) + year;
}

function getMonth(month: number): string {
    let monthStr = '';
    switch (month) {
        case 1:
            monthStr = 'JAN';
            break;
        case 2:
            monthStr = 'FEB';
            break;
        case 3:
            monthStr = 'MAR';
            break;
        case 4:
            monthStr = 'APR';
            break;
        case 5:
            monthStr = 'MAY';
            break;
        case 6:
            monthStr = 'JUN';
            break;
        case 7:
            monthStr = 'JUL';
            break;
        case 8:
            monthStr = 'AUG';
            break;
        case 9:
            monthStr = 'SEP';
            break;
        case 10:
            monthStr = 'OCT';
            break;
        case 11:
            monthStr = 'NOV';
            break;
        case 12:
            monthStr = 'DEC';
            break;
    }
    return monthStr;
}

export { currencyRequest }