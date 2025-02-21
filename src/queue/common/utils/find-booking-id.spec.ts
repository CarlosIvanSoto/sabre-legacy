import { findBookingId } from "./find-booking-id";


describe('Find Booking Id', () => {
  it('should handle booking id', () => {
    const payload = '8AYC.8AYC*AEH 1829/04JUN24 FXIDVU H'
    const response = findBookingId(payload);
    // console.dir(response, { depth: null })
    expect(response).toEqual('FXIDVU')
  });
});