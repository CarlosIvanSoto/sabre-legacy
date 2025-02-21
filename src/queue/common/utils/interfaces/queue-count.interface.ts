import { ApplicationResults } from "../../../../common/interfaces"

export interface QueueCountResponseSuccess {
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