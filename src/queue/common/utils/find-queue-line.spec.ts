import { findQueueLine } from "./find-queue-line";

describe('Find Queue Line', () => {
  it('should handle queue line', () => {
    const payload = '8AYC.8AYC*AEH 1829/04JUN24 FXIDVU H'
    const response = findQueueLine(payload);
    // console.dir(response, { depth: null })
    expect(response).toEqual({
      workPcc: '8AYC',
      homePcc: '8AYC',
      agent: 'AEH',
      dateTime: '2024-06-04T18:29',
      bookingId: 'FXIDVU'
    })
  });
});