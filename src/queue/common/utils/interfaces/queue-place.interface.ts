import { ApplicationResults } from "../../../../common/interfaces"

export interface QueuePlaceResponseSuccess {
  queuePlaceRS: QueuePlaceRS
}

export interface QueuePlaceRS {
  applicationResults: ApplicationResults
  text: string[]
}