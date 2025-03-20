import { parseXMLToDailySalesReport } from "./parse-xml-to-daily-sales-report"


describe('parseXMLToDailySalesReport', () => {
  it('should handle xml with minimal issuance data', () => {
    const xmlPayload = '<DailySalesReportRS xmlns="http://webservices.sabre.com/sabreXML/2011/10" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:stl="http://services.sabre.com/STL/v01" Version="2.0.0"><stl:ApplicationResults status="Complete"><stl:Success timeStamp="2025-02-19T17:58:54Z"/></stl:ApplicationResults><SalesReport><CreationDetails><Source AgencyName="CORPORATIVO GALES" CreateDateTime="2025-02-18" PseudoCityCode="8AYC"/></CreationDetails><IssuanceData AgentSine="ASS" Commission="64" DocumentType="T" DomesticInternational="D" IndicatorTwo="ET" IssueTime="2258" ItineraryRef="UFKBGS" StockItemCount="1" TicketPrinter="1" TicketStock="MX"><Payment><Form Amount="8946" CurrencyCode="MXN">CA</Form></Payment><PersonName>RODRIGUEZ GOMEZ/MARCO ANTONIO</PersonName><TicketingInfo><Ticketing Ind="ETR" UsedCount="1" eTicketNumber="1393474586780"/></TicketingInfo></IssuanceData></SalesReport></DailySalesReportRS>'
  
    const dailySalesReport = parseXMLToDailySalesReport(xmlPayload)

    expect(dailySalesReport).toEqual({
      applicationResults: {
        success: { timeStamp: '2025-02-19T17:58:54Z' },
        status: 'Complete'
      },
      salesReport: {
        creationDetails: {
          source: {
            agencyName: 'CORPORATIVO GALES',
            createDateTime: '2025-02-18',
            pseudoCityCode: '8AYC'
          }
        },
        issuanceData: {
          payment: { form: { content: 'CA', amount: '8946', currencyCode: 'MXN' } },
          personName: 'RODRIGUEZ GOMEZ/MARCO ANTONIO',
          ticketingInfo: {
            ticketing: { ind: 'ETR', usedCount: '1', eTicketNumber: '1393474586780' }
          },
          agentSine: 'ASS',
          commission: '64',
          documentType: 'T',
          domesticInternational: 'D',
          indicatorTwo: 'ET',
          issueTime: '2258',
          itineraryRef: 'UFKBGS',
          stockItemCount: '1',
          ticketPrinter: '1',
          ticketStock: 'MX'
        }
      }
    })
  })

  it('should handle error daily sales report', () => {
    const xmlPayload = '<DailySalesReportRS xmlns="http://webservices.sabre.com/sabreXML/2011/10" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:stl="http://services.sabre.com/STL/v01" Version="2.0.0"><stl:ApplicationResults status="NotProcessed"><stl:Error type="BusinessLogic" timeStamp="2025-02-19T18:34:09Z"><stl:SystemSpecificResults><stl:Message>TICKETING DATABASE ERROR</stl:Message><stl:ShortText>ERR.SWS.HOST.ERROR_IN_RESPONSE</stl:ShortText></stl:SystemSpecificResults></stl:Error></stl:ApplicationResults></DailySalesReportRS>'
  
    const dailySalesReport = parseXMLToDailySalesReport(xmlPayload)

    expect(dailySalesReport).toEqual({
      applicationResults: {
        error: {
          systemSpecificResults: {
            message: 'TICKETING DATABASE ERROR',
            shortText: 'ERR.SWS.HOST.ERROR_IN_RESPONSE'
          },
          type: 'BusinessLogic',
          timeStamp: '2025-02-19T18:34:09Z'
        },
        status: 'NotProcessed'
      }
    })
  })
})