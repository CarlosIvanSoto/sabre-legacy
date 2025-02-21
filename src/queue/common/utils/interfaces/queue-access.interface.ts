import { ApplicationResults } from "../../../../common/interfaces"
import { BookingText } from "./booking-text.interface"

export interface QueueAccessResponseSuccess {
  queueAccessRS: QueueAccessRS
}

export interface QueueAccessRS {
  applicationResults: ApplicationResults
  line: {
    dateTime: string
    pOS: { source: { agentSine: string, pseudoCityCode: string }},
    uniqueID: { iD: string }
  },
  paragraph: BookingText
}