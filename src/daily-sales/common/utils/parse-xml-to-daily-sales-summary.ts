import { parseXML } from "../../../common/config/xml-parser.config"
import { DailySalesSummaryResponseSuccess } from "../../interfaces/daily-sales-summary-options.interface"

function parseXMLToDailySalesSummary(payload: string) {
  return parseXML<DailySalesSummaryResponseSuccess>(payload).dailySalesSummaryRS
}

export { parseXMLToDailySalesSummary }