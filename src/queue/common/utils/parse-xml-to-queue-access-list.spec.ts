import { parseXMLToQueueAccessList } from "./parse-xml-to-queue-access-list";

describe('Parse XML Queue List', () => {
  it('should handle response body', () => {
    const bodyPayload = '<QueueAccessRS xmlns="http://webservices.sabre.com/sabreXML/2011/10" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:stl="http://services.sabre.com/STL/v01" Version="2.1.0"><stl:ApplicationResults status="Complete"><stl:Success timeStamp="2025-03-29T19:51:27Z"/></stl:ApplicationResults><Line Number="1"><DateTime>2025-02-28T16:48</DateTime><PassengerName>GIL/AGUSTIN MR</PassengerName><POS><Source AgentSine="MAA" PseudoCityCode="PLT"/></POS><UniqueID ID="ILJHDN"/></Line><Line Number="2"><DateTime>2025-03-01T16:48</DateTime><PassengerName>TRICIOHARO/JOS</PassengerName><POS><Source AgentSine="M1A" PseudoCityCode="PLT"/></POS><UniqueID ID="YOBPQR"/></Line><Paragraph><Text>QUEUE LIST FOR 8AYC  QUEUE 001 ON 29MAR AT 1351</Text><Text>NUM PNR LOCATOR    PLACED BY    DATE     TIME  NAME</Text><Text>1   JGKGPN        PLT  MAM     15FEB25  2100  1QUIROZ ARREOLA</Text><Text>2   SNDUNN        PLT  MAM     17FEB25  2221  1ISSA TAFICH/EM</Text><Text>END OF LIST</Text></Paragraph></QueueAccessRS>'
    const response = parseXMLToQueueAccessList(bodyPayload);
    // console.dir(response, { depth: null })
    expect(response).toEqual({
      applicationResults: {
        success: { timeStamp: '2025-03-29T19:51:27Z' },
        status: 'Complete'
      },
      line: [
        {
          dateTime: '2025-02-28T16:48',
          passengerName: 'GIL/AGUSTIN MR',
          pOS: { source: { agentSine: 'MAA', pseudoCityCode: 'PLT' } },
          uniqueID: { iD: 'ILJHDN' },
          number: '1'
        },
        {
          dateTime: '2025-03-01T16:48',
          passengerName: 'TRICIOHARO/JOS',
          pOS: { source: { agentSine: 'M1A', pseudoCityCode: 'PLT' } },
          uniqueID: { iD: 'YOBPQR' },
          number: '2'
        }
      ],
      paragraph: {
        text: [
          'QUEUE LIST FOR 8AYC  QUEUE 001 ON 29MAR AT 1351',
          'NUM PNR LOCATOR    PLACED BY    DATE     TIME  NAME',
          '1   JGKGPN        PLT  MAM     15FEB25  2100  1QUIROZ ARREOLA',
          '2   SNDUNN        PLT  MAM     17FEB25  2221  1ISSA TAFICH/EM',
          'END OF LIST'
        ]
      }
    })
  });
});
