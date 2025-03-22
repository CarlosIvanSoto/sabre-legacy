import { ActionsRQ } from "../common/interfaces/actions.interface";
import { SabreCommandLLSRS } from "../common/interfaces/sabre-command.interface";
import { parseXMLToSabreCommands } from "../common/utils/parse-xml-to-sabre-command";
import { Sabre } from "../sabre";
import { currencyRequest } from "./requests/currency.request";
import { CurrencyOptions } from "./requests/interfaces/currency-options";

export class Currency {
  constructor(private readonly sabre: Sabre) {}

  /**
   * See https://developer.sabre.com/docs/soap_apis/management/utility/Send_Sabre_Command
   * Sabre equivalent command -> DC¥USD1/MXN/19MAR25
   */
  async conversion(payload: CurrencyOptions): Promise<SabreCommandLLSRS> {
    this.sabre.setAction(ActionsRQ.SABRE_COMMANDS);
    const {from, to, date} = payload;
    const xml = await this.sabre.post((headersPayload) => currencyRequest({ from, to, date, ...headersPayload }))
    return parseXMLToSabreCommands(xml)
  }
}