import { DocumentType } from "./document-type.enum"
import type { SettlementType } from "./settlement-type.enum"

export interface SummaryOptions {
  date: string
  pcc?: string
  airline?: {
    code?: string
    number?: string
  }
  settlementType?: SettlementType
  documentType?: DocumentType
  documentNumber?: string
}