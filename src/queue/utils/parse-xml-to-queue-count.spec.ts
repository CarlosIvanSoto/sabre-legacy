import { parseXMLToQueueCount } from "./parse-xml-to-queue-count";


describe('Parse XML Queue Count', () => {
  it('should handle minimal response body', () => {
    const bodyPayload = '<QueueCountRS xmlns="http://webservices.sabre.com/sabreXML/2011/10" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:stl="http://services.sabre.com/STL/v01" Version="2.2.1"><stl:ApplicationResults status="Complete"><stl:Success timeStamp="2025-02-17T19:54:14Z"/></stl:ApplicationResults><QueueInfo DateTime="02-17T13:54" PseudoCityCode="H8GI"><QueueIdentifier Count="6" Number="S"/><QueueIdentifier Count="1" Number="305"/></QueueInfo><Totals Count="6" Type="MESSAGES"/><Totals Count="0" Type="SPECIALS"/><Totals Count="1" Type="PNRS"/></QueueCountRS>'
    const queueCountSuccessResponse = parseXMLToQueueCount(bodyPayload);
    // console.dir(queueCountSuccessResponse, { depth: null })
    expect(queueCountSuccessResponse).toEqual({
      applicationResults: {
        success: { timeStamp: '2025-02-17T19:54:14Z' },
        status: 'Complete'
      },
      queueInfo: {
        queueIdentifier: [ { count: '6', number: 'S' }, { count: '1', number: '305' } ],
        dateTime: '02-17T13:54',
        pseudoCityCode: 'H8GI'
      },
      totals: [
        { count: '6', type: 'MESSAGES' },
        { count: '0', type: 'SPECIALS' },
        { count: '1', type: 'PNRS' }
      ]
    })
  })
  it('should handle response body', () => {
    const bodyPayload = '<QueueCountRS xmlns="http://webservices.sabre.com/sabreXML/2011/10" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:stl="http://services.sabre.com/STL/v01" Version="2.2.1"><stl:ApplicationResults status="Complete"><stl:Success timeStamp="2025-02-16T17:29:06Z"/></stl:ApplicationResults><QueueInfo DateTime="02-16T11:29" PseudoCityCode="8AYC"><QueueIdentifier Count="185" Number="S"/><QueueIdentifier Count="647" Number="115"/><QueueIdentifier Count="14" Number="0"/><QueueIdentifier Count="197" Number="116"/><QueueIdentifier Count="46" Number="1"/><QueueIdentifier Count="166" Number="118"/><QueueIdentifier Count="4" Number="6"/><QueueIdentifier Count="795" Number="120"/><QueueIdentifier Count="17" Number="7"/><QueueIdentifier Count="72" Number="195"/><QueueIdentifier Count="18" Number="9"/><QueueIdentifier Count="1" Number="13"/><QueueIdentifier Count="4" Number="20"/><QueueIdentifier Count="8" Number="25"/><QueueIdentifier Count="1486" Number="100"/><QueueIdentifier Count="296" Number="101"/><QueueIdentifier Count="10" Number="102"/><QueueIdentifier Count="17" Number="103"/><QueueIdentifier Count="2" Number="104"/><QueueIdentifier Count="1" Number="107"/><QueueIdentifier Count="32" Number="108"/><QueueIdentifier Count="32" Number="110"/></QueueInfo><Totals Count="185" Type="MESSAGES"/><Totals Count="0" Type="SPECIALS"/><Totals Count="3865" Type="PNRS"/></QueueCountRS>'

    const queueCountSuccessResponse = parseXMLToQueueCount(bodyPayload);

    expect(queueCountSuccessResponse).toEqual({
      applicationResults: {
        success: { timeStamp: '2025-02-16T17:29:06Z' },
        status: 'Complete'
      },
      queueInfo: {
        queueIdentifier: [
          { count: '185', number: 'S' },
          { count: '647', number: '115' },
          { count: '14', number: '0' },
          { count: '197', number: '116' },
          { count: '46', number: '1' },
          { count: '166', number: '118' },
          { count: '4', number: '6' },
          { count: '795', number: '120' },
          { count: '17', number: '7' },
          { count: '72', number: '195' },
          { count: '18', number: '9' },
          { count: '1', number: '13' },
          { count: '4', number: '20' },
          { count: '8', number: '25' },
          { count: '1486', number: '100' },
          { count: '296', number: '101' },
          { count: '10', number: '102' },
          { count: '17', number: '103' },
          { count: '2', number: '104' },
          { count: '1', number: '107' },
          { count: '32', number: '108' },
          { count: '32', number: '110' }
        ],
        dateTime: '02-16T11:29',
        pseudoCityCode: '8AYC'
      },
      totals: [
        { count: '185', type: 'MESSAGES' },
        { count: '0', type: 'SPECIALS' },
        { count: '3865', type: 'PNRS' }
      ]
    })
  });
});