import { request } from "../../common/helpers/request.helper";
import { sabreCommand } from "../../common/helpers/sabre-command.helper";
import { ActionsRQ } from "../../common/interfaces/actions.interface";
import { formatCurrencyCommand } from "../helpers/currency-command-formart.helper";
import { CurrencyOptions } from "../interfaces/currency-options.interface";

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
    const body = sabreCommand(formatCurrencyCommand(options))
    return request({
        body,
        authorization,
        conversationId,
        action: ActionsRQ.SABRE_COMMAND
    })
}

export { currencyRequest }
