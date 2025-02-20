import { parseXML } from "../../common/config/xml-parser.config"
import { GetDailySalesReportResponseSuccess } from "../interfaces/get-daily-sales-report.interface"

function parseXMLToDailySalesReport(payload: string) {
  return parseXML<GetDailySalesReportResponseSuccess>(payload).dailySalesReportRS
}

export { parseXMLToDailySalesReport }