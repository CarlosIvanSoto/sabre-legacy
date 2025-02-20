import { HeadersRequestOptions } from "../../../common/interfaces/headers-request-options.interface"
import { DocumentType } from "../../interfaces/document-type.enum"
import { SettlementType } from "../../interfaces/settlement-type.enum"

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