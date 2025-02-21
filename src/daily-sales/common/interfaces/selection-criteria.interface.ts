import { DocumentType } from "./document-type.enum"
import { SettlementType } from "./settlement-type.enum"

export interface SelectionCriteria {
  PseudoCityCode: string
  Airline?: {
    AirlineCode?: string
    AirlineNumber?: string
  }
  ReportDate: string
  SettlementType?: SettlementType
  DocumentType?: DocumentType
  DocumentNumber?: string
}