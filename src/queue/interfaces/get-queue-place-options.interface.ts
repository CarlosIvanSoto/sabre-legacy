import { ApplicationResults } from "../../common/interfaces/application-results.interface"

export interface GetQueuePlaceResponseSuccess {
  queuePlaceRS: QueuePlaceRS
}

export interface QueuePlaceRS {
  applicationResults: ApplicationResults
  text: string[]
}