import { parseXMLToSabreCommand } from "./parse-xml-to-sabre-command"

describe('parse XML to sabre command options', () => {
  it('should handle xml with minimal issuance data', () => {
    const xmlPayload = `<SabreCommandLLSRS xmlns="http://webservices.sabre.com/sabreXML/2011/10" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:stl="http://services.sabre.com/STL/v01" Version="2.0.0"><stl:ApplicationResults status="Complete"><stl:Success timeStamp="2025-03-22T18:43:48Z"><stl:SystemSpecificResults><stl:HostCommand LNIATA="6B3525">DC¥USD1/MXN/20MAR25</stl:HostCommand></stl:SystemSpecificResults></stl:Success></stl:ApplicationResults><Response>RATE BSR 1USD -  19.9845          MXN

MXN        19.9       TRUNCATED

MXN        20         ROUNDED UP TO NEXT   1      - FARES

MXN        20         ROUNDED UP TO NEXT   1      - TAXES</Response></SabreCommandLLSRS>`;
  
    const sabreCommand = parseXMLToSabreCommand(xmlPayload)

    expect(sabreCommand).toEqual({
      applicationResults: {
        success: {
          systemSpecificResults: {
            hostCommand: { content: 'DC¥USD1/MXN/20MAR25', lNIATA: '6B3525' }
          },
          timeStamp: '2025-03-22T18:43:48Z'
        },
        status: 'Complete'
      },
      response: `RATE BSR 1USD -  19.9845          MXN

MXN        19.9       TRUNCATED

MXN        20         ROUNDED UP TO NEXT   1      - FARES

MXN        20         ROUNDED UP TO NEXT   1      - TAXES`
    })
  })

})