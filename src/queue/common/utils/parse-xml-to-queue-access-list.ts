import { parseXML } from "../../../common/config/xml-parser.config"
import { QueueAccessListResponseSuccess } from "./interfaces/queue-access-list.interface"

function parseXMLToQueueAccessList(body: string) {
  const { queueAccessRS } = parseXML<QueueAccessListResponseSuccess>(body)
  return queueAccessRS
}

export { parseXMLToQueueAccessList }