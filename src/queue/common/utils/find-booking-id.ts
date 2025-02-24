function findBookingId(text?: string): string {
  if (!text) throw new Error('Missing text.')
  const BOOKING_ID_REGEX = /[*]A{1}\w{2}[\s\S]+([A-Z0-9]{6})/g
  const found = BOOKING_ID_REGEX.exec(text)
  if (!found) throw new Error('booking id not found')
  return found[1]
}
export { findBookingId }