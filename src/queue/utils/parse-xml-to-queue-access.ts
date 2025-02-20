import { parseXML } from "../../common/config/xml-parser.config";
import { GetQueueAccessResponseSuccess } from "../interfaces/get-queue-access-options.interface";

function parseXMLToQueueAccess(body: string) {
  const { queueAccessRS } = parseXML<GetQueueAccessResponseSuccess>(body)
  return queueAccessRS
}

export { parseXMLToQueueAccess }