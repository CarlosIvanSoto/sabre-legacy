import { HeadersRequestOptions } from "../../../common/interfaces"

export interface ReportOptions {
  pcc: string
  date: string
}

export interface ReportRequestOptions extends HeadersRequestOptions, ReportOptions {}