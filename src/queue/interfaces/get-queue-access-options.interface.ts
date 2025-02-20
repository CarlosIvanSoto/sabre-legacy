import { ApplicationResults } from "../../common/interfaces/application-results.interface"

export interface GetQueueAccessResponseSuccess {
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

export interface BookingText {
  text: string[]
}