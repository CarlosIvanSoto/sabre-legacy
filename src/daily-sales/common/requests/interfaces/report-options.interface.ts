import { HeadersRequestOptions } from "../../../../common/interfaces/headers-request-options.interface"

export interface ReportOptions {
  pcc: string
  date: string
}

export interface ReportRequestOptions extends HeadersRequestOptions, ReportOptions {}