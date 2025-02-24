import { Sabre } from "../sabre";
import { ActionsRQ } from "../common/interfaces/actions.interface";
import { reportRequest } from "./common/requests/report.request";
import { summaryRequest } from "./common/requests/summary.request";
import { parseXMLToDailySalesSummary } from "./common/utils/parse-xml-to-daily-sales-summary";
import { parseXMLToDailySalesReport } from "./common/utils/parse-xml-to-daily-sales-report";
import { DailySalesReportRS, ReportOptions } from "./interfaces/daily-sales-report-options.interface";
import { DailySalesSummaryRS, SummaryOptions } from "./interfaces/daily-sales-summary-options.interface";

export class DailySales {
  constructor(private readonly sabre: Sabre) {}

  async report(payload: ReportOptions): Promise<DailySalesReportRS> {
    if (!payload.pcc) {
      if (typeof process !== 'undefined' && process.env) {
        payload.pcc = process.env.SABRE_ORGANIZATION;
      }
    }
    if (!payload.pcc) throw new Error('Missing pcc. Set it in report({ pcc, number })')

    const { pcc, date } = payload
    this.sabre.setAction(ActionsRQ.DAILY_SALES_REPORT)
    const xml = await this.sabre.post<string>((headersPayload) => reportRequest({ pcc, date, ...headersPayload }))
    return parseXMLToDailySalesReport(xml)
  }

  async summary(payload: SummaryOptions): Promise<DailySalesSummaryRS> {
    if (!payload.pcc) {
      if (typeof process !== 'undefined' && process.env) {
        payload.pcc = process.env.SABRE_ORGANIZATION;
      }
    }
    if (!payload.pcc) throw new Error('Missing pcc. Set it in summary({ pcc, ... })')
      
    const { pcc } = payload
    this.sabre.setAction(ActionsRQ.DAILY_SALES_REPORT)
    const xml = await this.sabre.post<string>((headersPayload) => summaryRequest({ pcc, ...payload, ...headersPayload }))
    return parseXMLToDailySalesSummary(xml)
  }
}