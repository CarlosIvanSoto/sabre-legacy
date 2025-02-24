import { parseXML } from "../../../common/config/xml-parser.config";
import { QueuePlaceResponseSuccess, QueuePlaceRS } from "./interfaces";

function parseXMLToQueuePlace(body: string): QueuePlaceRS {
  return parseXML<QueuePlaceResponseSuccess>(body).queuePlaceRS
}

export { parseXMLToQueuePlace }