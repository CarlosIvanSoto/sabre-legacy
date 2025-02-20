import { parseXML } from "../../common/config/xml-parser.config"
import { GetDailySalesSummaryResponseSuccess } from "../interfaces/get-daily-sales-summary.interface"

function parseXMLToDailySalesSummary(payload: string) {
  return parseXML<GetDailySalesSummaryResponseSuccess>(payload).dailySalesSummaryRS
}

export { parseXMLToDailySalesSummary }