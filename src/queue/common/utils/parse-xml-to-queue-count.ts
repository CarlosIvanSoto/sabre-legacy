import { parseXML } from "../../../common/config/xml-parser.config"
import { QueueCountResponseSuccess, QueueCountRS } from "./interfaces/queue-count.interface"

function parseXMLToQueueCount(body: string): QueueCountRS {
  const { queueCountRS } = parseXML<QueueCountResponseSuccess>(body)
  return queueCountRS
}

export { parseXMLToQueueCount }