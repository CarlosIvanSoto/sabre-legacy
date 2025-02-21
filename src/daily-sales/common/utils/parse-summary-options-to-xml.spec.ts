import type { SummaryOptions } from '../requests/interfaces/summary-options.interface';
import { parseSummaryOptionsToXML } from './parse-summary-options-to-xml';

describe('parseSummaryOptionsToXML', () => {
  it('should handle minimal summary options with only required fields', () => {
    const summaryPayload: SummaryOptions = {
      date: '2025-02-18',
      pcc: '8AYC'
    };
    const xml = parseSummaryOptionsToXML(summaryPayload)
    expect(xml).toEqual('<SelectionCriteria><PseudoCityCode>8AYC</PseudoCityCode><ReportDate>2025-02-18</ReportDate></SelectionCriteria>')
  })

  it('should handle parse summary options with BSP & Tickets', () => {
    const summaryPayload: SummaryOptions = {
      pcc: '8AYC',
      date: '2025-02-18',
      settlementType: 'TKT',
      documentType: 'TKT'
    };
    const xml = parseSummaryOptionsToXML(summaryPayload);
    expect(xml).toEqual('<SelectionCriteria><PseudoCityCode>8AYC</PseudoCityCode><ReportDate>2025-02-18</ReportDate><SettlementType>TKT</SettlementType><DocumentType>TKT</DocumentType></SelectionCriteria>');
  });


  it('should handle parse summary options with specific ticket', () => {
    const summaryPayload: SummaryOptions = {
      pcc: '8AYC',
      date: '2025-02-18',
      documentNumber: '1134567834412'
    };
    const xml = parseSummaryOptionsToXML(summaryPayload);
    expect(xml).toEqual('<SelectionCriteria><PseudoCityCode>8AYC</PseudoCityCode><ReportDate>2025-02-18</ReportDate><DocumentNumber>1134567834412</DocumentNumber></SelectionCriteria>');
  });
})