import { request } from "../../common/helpers/request.helper"
import { ActionsRQ } from "../../common/interfaces/actions.interface"
import { parseSummaryOptionsToXML } from "../utils/parse-summary-options-to-xml"
import { SummaryRequestOptions } from "./interfaces/summary-options.interface"

/**
 * <DailySalesSummaryRQ version="1.2.2" xmlns="http://www.sabre.com/ns/Ticketing/AsrServices/1.0">
 *  <Header/>
 *  <SelectionCriteria>
 *    <PseudoCityCode>{{pccTkt}}</PseudoCityCode>
 *    <ReportDate>{{date}}</ReportDate>
 *  </SelectionCriteria>
 * </DailySalesSummaryRQ>
 * 
 * @param options SummaryOptions
 * @returns string
 */
function summaryRequest(options: SummaryRequestOptions) {
  const { authorization, conversationId, ...summaryOptions } = options
  const selectionCriteria = parseSummaryOptionsToXML(summaryOptions)
  const body = `<DailySalesSummaryRQ version="1.2.2" xmlns="http://www.sabre.com/ns/Ticketing/AsrServices/1.0"><Header/>${selectionCriteria}</DailySalesSummaryRQ>`
  return request({
    body, action: ActionsRQ.AGENCY_REPORT, authorization, conversationId
  })
}

export { summaryRequest }