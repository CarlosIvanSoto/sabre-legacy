import { LegacySabre } from "../sabre";
import type { ReportOptions } from "./interfaces/report-options.interface";
import type { SummaryOptions } from "./interfaces/summary-options.interface";
import { ActionsRQ } from "../common/interfaces/actions.interface";
import { reportRequest } from "./requests/report.request";
import { summaryRequest } from "./requests/summary.request";
import { parseXMLToDailySalesReport } from "./utils/parse-xml-to-daily-sales-report";
import { parseXMLToDailySalesSummary } from "./utils/parse-xml-to-daily-sales-summary";

export class DailySales {
  constructor(private readonly sabre: LegacySabre) {}

  async report(payload: ReportOptions) {
    if (!payload.pcc) {
      if (typeof process !== 'undefined' && process.env) {
        payload.pcc = process.env.SABRE_ORGANIZATION;
      }
    }
    if (!payload.pcc) throw new Error('Missing pcc. Set it in report({ pcc, number })')

    const { pcc, date } = payload
    this.sabre.setAction(ActionsRQ.DAILY_SALES_REPORT)
    const response = await this.sabre.post<string>((headersPayload) => reportRequest({ pcc, date, ...headersPayload }))
    if (!response.data) throw new Error(`Response error ${response.error}`)
    return parseXMLToDailySalesReport(response.data)
  }

  async summary(payload: SummaryOptions) {
    if (!payload.pcc) {
      if (typeof process !== 'undefined' && process.env) {
        payload.pcc = process.env.SABRE_ORGANIZATION;
      }
    }
    if (!payload.pcc) throw new Error('Missing pcc. Set it in summary({ pcc, ... })')
      
    const { pcc } = payload
    this.sabre.setAction(ActionsRQ.DAILY_SALES_REPORT)
    const response = await this.sabre.post<string>((headersPayload) => summaryRequest({ pcc, ...payload, ...headersPayload }))
    if (!response.data) throw new Error(`Response error ${response.error}`)
    return parseXMLToDailySalesSummary(response.data)
  }
}