import { parseXML } from "../../common/config/xml-parser.config";
import { GetQueuePlaceResponseSuccess } from "../interfaces/get-queue-place-options.interface";

function parseXMLToQueuePlace(body: string) {
  return parseXML<GetQueuePlaceResponseSuccess>(body).queuePlaceRS
}

export { parseXMLToQueuePlace }