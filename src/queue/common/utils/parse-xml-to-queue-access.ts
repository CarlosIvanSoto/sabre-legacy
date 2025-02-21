import { parseXML } from "../../../common/config/xml-parser.config"
import { QueueAccessResponseSuccess } from "./interfaces/queue-access.interface"

function parseXMLToQueueAccess(body: string) {
  const { queueAccessRS } = parseXML<QueueAccessResponseSuccess>(body)
  return queueAccessRS
}

export { parseXMLToQueueAccess }