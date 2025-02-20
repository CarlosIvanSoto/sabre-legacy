import { ApplicationResults } from "../../common/interfaces/application-results.interface"

export interface GetQueueCountResponseSuccess {
  queueCountRS: QueueCountRS
}

export interface QueueCountRS {
  applicationResults: ApplicationResults
  queueInfo: QueueInfo
  total: QueueTotal[]
}

interface QueueInfo {
  queueIdentifier: QueueIdentifier[]
  dateTime: string
  pseudoCityCode: string
}

interface QueueIdentifier {
  count: string
  number: string
}
interface QueueTotal {
  count: string
  type: 'MESSAGE' | 'SPECIALS' | 'PNRS'
}