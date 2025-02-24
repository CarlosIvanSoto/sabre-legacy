import { parseXML } from "../../../common/config/xml-parser.config"
import { QueueAccessResponseSuccess, QueueAccessRS } from "./interfaces/queue-access.interface"

function parseXMLToQueueAccess(body: string): QueueAccessRS {
  const { queueAccessRS } = parseXML<QueueAccessResponseSuccess>(body)
  return queueAccessRS
}

export { parseXMLToQueueAccess }