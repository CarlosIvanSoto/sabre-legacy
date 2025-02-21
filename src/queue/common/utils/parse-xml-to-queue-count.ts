import { parseXML } from "../../../common/config/xml-parser.config"
import { QueueCountResponseSuccess } from "./interfaces/queue-count.interface"

function parseXMLToQueueCount(body: string) {
  const { queueCountRS } = parseXML<QueueCountResponseSuccess>(body)
  return queueCountRS
}

export { parseXMLToQueueCount }