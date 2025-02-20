import type { SelectionCriteria } from "../interfaces/selection-criteria.interface";
import type { SummaryOptions } from "../requests/interfaces/summary-options.interface";

function parseSummaryOptionsToSelectionCriteria(payload: SummaryOptions): SelectionCriteria {
  return {
    PseudoCityCode: payload.pcc,
    ReportDate: payload.date,
    DocumentNumber: payload.documentNumber,
    SettlementType: payload.settlementType,
    DocumentType: payload.documentType,
    Airline: payload.airline?.code || payload.airline?.number
      ? {
        AirlineCode: payload.airline.code,
        AirlineNumber: payload.airline.number
      }
      : undefined
  }
}
export { parseSummaryOptionsToSelectionCriteria }