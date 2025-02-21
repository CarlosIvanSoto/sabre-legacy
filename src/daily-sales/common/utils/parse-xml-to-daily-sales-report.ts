import { parseXML } from "../../../common/config/xml-parser.config"
import { DailySalesReportResponseSuccess } from "../../interfaces/daily-sales-report-options.interface"

function parseXMLToDailySalesReport(payload: string) {
  return parseXML<DailySalesReportResponseSuccess>(payload).dailySalesReportRS
}

export { parseXMLToDailySalesReport }