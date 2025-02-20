import { parseXML } from "../../common/config/xml-parser.config";
import { GetQueueCountResponseSuccess } from "../interfaces/get-queue-count-options.interface";

function parseXMLToQueueCount(body: string) {
  const { queueCountRS } = parseXML<GetQueueCountResponseSuccess>(body)
  return queueCountRS
}

export { parseXMLToQueueCount }