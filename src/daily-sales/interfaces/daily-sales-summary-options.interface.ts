import { SettlementType, DocumentType, TransactionType } from "../common/interfaces"
import { CuponType } from "../common/interfaces/cupon-type.enum"

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

export interface DailySalesSummaryResponseSuccess {
  dailySalesSummaryRS: DailySalesSummaryRS
}

export interface DailySalesSummaryRS {
  header: Header
  dSHeader: DSHeader
  dailySalesReport: DailySalesReport
  version: string
  isQueryStillRunning: string
}
interface Header {
  orchestrationID: {
    content: string
    seq: string
  }
  results: { success: { system: string } }
  messageID: string
}
interface DSHeader {
  pseudoCityCode: string
  agencyName: string
}
interface DailySalesReport {
  reportDate: string
  transaction?: Array<Transaction>
  totalDailySales: TotalDailySales
}
interface Transaction {
  nonInteractive?: string
  electronicDocument?: string
  itineraryType?: string
  documentType: DocumentType
  settlementType: SettlementType
  pnrLocator?: string
  passengerName?: string
  documentDetails: {
    documentNumber: string
    stockType?: string
    documentStatusCode?: string
    stockDetails?: {
      cuponType: CuponType
    }
    transactionCode: TransactionType
  }
  airlineCode: {
    content: string
    airlineNumber: string
  }
  commission?: {
    amount: string
    percent: string
  }
  payments?: {
    currencyCode: {
      value: string
      decimalPlace: string
    }
    documentPayment: {
      paymentTotal: string
      paymentDetail: {
        fop: string // forma de pago CA, CC, MS (Form of payment)
        category: string // categoría (Obligatorio) será en Efectivo o Crédito
        cardType?: string // Tarjeta de crédito tipo VI, AX
        paymentAmount: string // Monto del pago
      }
    }
  }
  agentSine: string
  agentPseudoCity: string
  transactionDateTime: string
}
interface TotalDailySales {
  transactionType: TransactionType
  salesBySettlement: {
    settlementType: SettlementType
    saleTotals: {
      currencyCode: string
      cashTotals: { content: number, count: string}
      creditTotals: { content: number, count: string }
      commissionTotals: { content: number, count: string }
    }
  }
}