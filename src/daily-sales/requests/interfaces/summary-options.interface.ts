import { HeadersRequestOptions } from "../../../common/interfaces"
import { DocumentType, SettlementType } from "../../common/interfaces"

export interface SummaryOptions {
  date: string
  pcc: string
  airline?: {
    code?: string
    number?: string
  }
  settlementType?: SettlementType
  documentType?: DocumentType
  documentNumber?: string
}

export interface SummaryRequestOptions extends HeadersRequestOptions, SummaryOptions {}