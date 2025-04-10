import { ApplicationResults } from "../../../../common/interfaces"
import { Notification } from "../../interfaces"
import { BookingText } from "./booking-text.interface"

export interface QueueAccessListResponseSuccess {
  queueAccessRS: QueueAccessListRS
}

export interface QueueAccessListRS {
  applicationResults: ApplicationResults
  line?: Array<QueueAccessListLine>
  paragraph: BookingText
}

interface QueueAccessListLine {
  number: string // Index
  dateTime: string
  passengerName?: string
  pOS: { source: { agentSine: string, pseudoCityCode: string }},
  uniqueID: { iD: string }
}

interface LineInfo {
  index: string,
  dateTime: string
  passengerName?: string
  agent: string
  pcc: string
  bookingId: string
}
export interface QueueBookingInfo {
  num: string,
  bookingId: string
  date: string
  placeBy: string
  name?: string
}

export interface QueueAccessList {
  lines?: Array<LineInfo>
  list: Array<QueueBookingInfo>
  paragraph: BookingText
  queue: string
}