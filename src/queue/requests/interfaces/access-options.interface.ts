import { HeadersRequestOptions } from "../../../common/interfaces/headers-request-options.interface"

export interface AccessOptions extends HeadersRequestOptions {
  number: string
  pcc: string
}