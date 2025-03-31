import { formatMonth, Month } from "../../../currency/helpers/get-month-name-sabre.helper"
import { QueueLine } from "./interfaces"

function findQueueLine(text?: string): QueueLine {
  if (!text) throw new Error('Missing text.')
  // example: 8AYC.8AYC*AGH 1341/29JUN24 YWDSRL H
  const LINE_REGEX = /(\w{4})\.(\w{4})\*(A{1}[A-Z0-9]{2})\s(\d{4})\/(\d{2}[A-Z]{3}\d{2})\s([A-Z0-9]{6})/g
  const found = LINE_REGEX.exec(text)
  if (!found) throw new Error('Queue line not found')
  const [_, workPcc, homePcc, agent, time, date, bookingId ] = found
  return { workPcc, homePcc, agent, dateTime: `20${date.slice(5)}-${formatMonth(date.slice(2,5) as Month)}-${date.slice(0,2)}T${time.slice(0,2)}:${time.slice(2)}`, bookingId }
}
export { findQueueLine }