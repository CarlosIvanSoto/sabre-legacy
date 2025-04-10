import { formatMonth, Month } from "../../../currency/helpers/get-month-name-sabre.helper"
import { QueueBookingInfo } from "./interfaces"

function getQueueBookingInfo(text?: string): QueueBookingInfo {
  if (!text) throw new Error('Missing text.')
  // example: "1   JGKGPN        PLT  MAM     15FEB25  2100  1QUIROZ ARREOLA"
  const BOOKING_INFO_REGEX = /(\d+)\s+([A-Z0-9]{6})\s+(\w{3,})[\s|\/]+(\w{3,})\s+(\d{2}[A-Z]{3}\d{2})\s+(\d{4})\s+[1](.+)/g
  const found = BOOKING_INFO_REGEX.exec(text)
  if (!found) throw new Error('Queue booking info not found')
  const [_, num, bookingId, pcc, agent, date, time, name ] = found
  return { num, bookingId, placeBy: `${pcc} ${agent}`, date: `20${date.slice(5)}-${formatMonth(date.slice(2,5) as Month)}-${date.slice(0,2)}T${time.slice(0,2)}:${time.slice(2)}`, name }
}
export { getQueueBookingInfo }