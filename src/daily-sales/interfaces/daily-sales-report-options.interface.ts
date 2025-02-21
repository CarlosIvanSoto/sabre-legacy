import { ApplicationResults } from "../../common/interfaces/application-results.interface"

export interface ReportOptions {
  date: string
  pcc?: string
}

export interface DailySalesReportResponseSuccess {
  dailySalesReportRS: DailySalesReportRS
}

export interface DailySalesReportRS {
  applicationResults: ApplicationResults
  salesReport?: SalesReport
}
interface SalesReport {
  creationDetails: {
    source: {
      agencyName: string
      createDateTime: string
      pseudoCityCode: string
    }
  }
  issuanceData?: IssuanceData[]
}

interface IssuanceData {
  agentSine: string
  commission: string
  documentType: string
  domesticInternational: string
  indicatorOne: string
  indicatorTwo: string
  issueTime: string
  itineraryRef: string
  stockItemCount: string
  ticketPrinter: string
  ticketStock: string
  payment: Payment[]
  personName?: string
  ticketingInfo?: TicketingInfo
  ticketingFees?: TicketingFees
}

interface Payment {
  form: {
    content: string
    amount: string
    currencyCode: string
  }
}

interface TicketingInfo {
  ticketing?: {
    conjunctiveCount: string
    eTicketNumber: string
    ind: string
    invoiceNumber: string
    statusCode: string 
    usedCount: string 
  }
}

interface TicketingFees {
  feeInformation?:{ 
    amount: string 
    guaranteeType: string
  }
}