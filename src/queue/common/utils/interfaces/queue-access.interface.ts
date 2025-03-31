import { ApplicationResults } from "../../../../common/interfaces"
import { Notification } from "../../interfaces"
import { BookingText } from "./booking-text.interface"

export interface QueueAccessResponseSuccess {
  queueAccessRS: QueueAccessRS
}

export interface QueueAccessRS {
  applicationResults: ApplicationResults
  line?: {
    dateTime: string
    pOS: { source: { agentSine: string, pseudoCityCode: string }},
    uniqueID: { iD: string }
  },
  paragraph: BookingText
}

export interface QueueAccess {
  dateTime: string
  agent: string
  pcc: string
  bookingId: string
  notifications: Array<Notification>
  paragraph: BookingText
  queue: string
}