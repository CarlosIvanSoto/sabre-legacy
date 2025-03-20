import { parseXMLToDailySalesSummary } from "./parse-xml-to-daily-sales-summary"


describe('parseXMLToDailySalesSummary', () => {
  it('should handle xml with everything except NDC', () => {
    const xmlPayload = '<asr:DailySalesSummaryRS xmlns:asr="http://www.sabre.com/ns/Ticketing/AsrServices/1.0" version="1.2.2" isQueryStillRunning="false"><asr:Header messageID="TKT_WS_PROD_V6WV-11003-2103709565-1739991967431-17568600-asrwsDqb"><OrchestrationID xmlns="http://services.sabre.com/STL/v01" xmlns:ns2="http://www.sabre.com/ns/Ticketing/AsrServices/1.0" xmlns:ns4="http://www.sabre.com/ns/Ticketing/TTL/1.0" xmlns:ns3="http://services.sabre.com/STL/Catalog/v01" seq="0">TKT_WS_PROD_V6WV-11003-2103709565-1739991967431-17568600-asrwsDqb</OrchestrationID><Results xmlns="http://services.sabre.com/STL/v01" xmlns:ns2="http://www.sabre.com/ns/Ticketing/AsrServices/1.0" xmlns:ns4="http://www.sabre.com/ns/Ticketing/TTL/1.0" xmlns:ns3="http://services.sabre.com/STL/Catalog/v01"><Success><System>T2-ASR</System></Success></Results></asr:Header><ns2:DSHeader xmlns:ns2="http://www.sabre.com/ns/Ticketing/AsrServices/1.0" xmlns="http://services.sabre.com/STL/v01" xmlns:ns4="http://www.sabre.com/ns/Ticketing/TTL/1.0" xmlns:ns3="http://services.sabre.com/STL/Catalog/v01"><ns2:PseudoCityCode>8AYC</ns2:PseudoCityCode><ns2:AgencyName>CORPORATIVO GALES</ns2:AgencyName></ns2:DSHeader><ns2:DailySalesReport xmlns:ns2="http://www.sabre.com/ns/Ticketing/AsrServices/1.0" xmlns="http://services.sabre.com/STL/v01" xmlns:ns4="http://www.sabre.com/ns/Ticketing/TTL/1.0" xmlns:ns3="http://services.sabre.com/STL/Catalog/v01"><ns2:ReportDate>2025-02-18</ns2:ReportDate><ns2:Transaction nonInteractive="false" electronicDocument="true" itineraryType="D"><ns2:DocumentType>TKT</ns2:DocumentType><ns2:SettlementType>TKT</ns2:SettlementType><ns2:PnrLocator>UFKBGS</ns2:PnrLocator><ns2:PassengerName>RODRIGUEZ GOMEZ/MARCO ANTONIO</ns2:PassengerName><ns2:DocumentDetails><ns2:DocumentNumber>1393474586780</ns2:DocumentNumber><ns2:StockType>MX</ns2:StockType><ns2:TransactionCode>SALE</ns2:TransactionCode></ns2:DocumentDetails><ns2:AirlineCode AirlineNumber="139">AM</ns2:AirlineCode><ns2:Commission><ns2:Amount>64</ns2:Amount><ns2:Percent>1.0</ns2:Percent></ns2:Commission><ns2:Payments><ns2:CurrencyCode decimalPlace="0">MXN</ns2:CurrencyCode><ns2:DocumentPayment><ns2:PaymentTotal>8946</ns2:PaymentTotal><ns2:PaymentDetail fop="CA" category="Cash"><ns2:PaymentAmount>8946</ns2:PaymentAmount></ns2:PaymentDetail></ns2:DocumentPayment></ns2:Payments><ns2:AgentSine>ASS</ns2:AgentSine><ns2:AgentPseudoCity>8AYC</ns2:AgentPseudoCity><ns2:TransactionDateTime>2025-02-18T22:58:00.000</ns2:TransactionDateTime></ns2:Transaction><ns2:TotalDailySales><ns2:TransactionType>SALE</ns2:TransactionType><ns2:SalesBySettlement><ns2:SettlementType>TKT</ns2:SettlementType><ns2:SaleTotals><ns2:CurrencyCode>MXN</ns2:CurrencyCode><ns2:CashTotals count="17">180705</ns2:CashTotals><ns2:CreditTotals count="19">649020</ns2:CreditTotals><ns2:CommissionTotals count="15">1486</ns2:CommissionTotals></ns2:SaleTotals></ns2:SalesBySettlement></ns2:TotalDailySales></ns2:DailySalesReport></asr:DailySalesSummaryRS>'
  
    const dailySalesSummary = parseXMLToDailySalesSummary(xmlPayload)

    expect(dailySalesSummary).toEqual({
      header: {
        orchestrationID: {
          content: 'TKT_WS_PROD_V6WV-11003-2103709565-1739991967431-17568600-asrwsDqb',
          seq: '0'
        },
        results: { success: { system: 'T2-ASR' } },
        messageID: 'TKT_WS_PROD_V6WV-11003-2103709565-1739991967431-17568600-asrwsDqb'
      },
      dSHeader: { pseudoCityCode: '8AYC', agencyName: 'CORPORATIVO GALES' },
      dailySalesReport: {
        reportDate: '2025-02-18',
        transaction: {
          documentType: 'TKT',
          settlementType: 'TKT',
          pnrLocator: 'UFKBGS',
          passengerName: 'RODRIGUEZ GOMEZ/MARCO ANTONIO',
          documentDetails: {
            documentNumber: 1393474586780,
            stockType: 'MX',
            transactionCode: 'SALE'
          },
          airlineCode: { content: 'AM', airlineNumber: '139' },
          commission: { amount: 64, percent: 1 },
          payments: {
            currencyCode: { content: 'MXN', decimalPlace: '0' },
            documentPayment: {
              paymentTotal: 8946,
              paymentDetail: { paymentAmount: 8946, fop: 'CA', category: 'Cash' }
            }
          },
          agentSine: 'ASS',
          agentPseudoCity: '8AYC',
          transactionDateTime: '2025-02-18T22:58:00.000',
          nonInteractive: 'false',
          electronicDocument: 'true',
          itineraryType: 'D'
        },
        totalDailySales: {
          transactionType: 'SALE',
          salesBySettlement: {
            settlementType: 'TKT',
            saleTotals: {
              currencyCode: 'MXN',
              cashTotals: { content: 180705, count: '17' },
              creditTotals: { content: 649020, count: '19' },
              commissionTotals: { content: 1486, count: '15' }
            }
          }
        }
      },
      version: '1.2.2',
      isQueryStillRunning: 'false'
    })
  })

})