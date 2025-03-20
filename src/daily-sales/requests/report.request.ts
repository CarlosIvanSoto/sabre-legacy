import { request } from "../../common/helpers/request.helper"
import { ActionsRQ } from "../../common/interfaces"
import { ReportRequestOptions } from "./interfaces/report-options.interface"

/**
 * <DailySalesReportRQ ReturnHostCommand="false" Version="2.0.0" xmlns="http://webservices.sabre.com/sabreXML/2011/10">
 *  <SalesReport PseudoCityCode="{{pcc_tkt}}" StartDate="{{date}}"/>
 * </DailySalesReportRQ>
 * @param options ReportOptions
 * @returns string
 */
function reportRequest(options: ReportRequestOptions): string {
  const { pcc, date, authorization, conversationId } = options
  const body = `<DailySalesReportRQ ReturnHostCommand="false" Version="2.0.0" xmlns="http://webservices.sabre.com/sabreXML/2011/10"><SalesReport PseudoCityCode="${pcc}" StartDate="${date}"/></DailySalesReportRQ>`
  return request({
    body, action: ActionsRQ.DAILY_SALES_REPORT, authorization, conversationId
  })
}

export { reportRequest }