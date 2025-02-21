
import { ActionsRQ } from "./actions.interface"
import { HeadersRequestOptions } from "./headers-request-options.interface"

export interface HeaderOptions extends HeadersRequestOptions {
  action: ActionsRQ
}