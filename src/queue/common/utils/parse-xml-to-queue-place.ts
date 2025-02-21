import { parseXML } from "../../../common/config/xml-parser.config";
import { QueuePlaceResponseSuccess } from "./interfaces";

function parseXMLToQueuePlace(body: string) {
  return parseXML<QueuePlaceResponseSuccess>(body).queuePlaceRS
}

export { parseXMLToQueuePlace }