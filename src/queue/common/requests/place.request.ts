
import { request } from "../../../common/helpers/request.helper";
import { ActionsRQ } from "../../../common/interfaces/actions.interface";
import { queueIdentifier } from "../helpers/queue-identifier.helper";
import { queuePlace } from "../helpers/queue-place.helper";
import { PlaceOptions } from "./interfaces/place-options.inferface"

/**
 * {{header}}
 * 
 * {{queuePlace(queueInfo)}}
 * 
 * {{footer}}
 * @param options PlaceOptions
 * @returns string
 */
function placeRequest(options: PlaceOptions) {
  const { number, pcc, authorization, conversationId } = options; 
  const queueInfo = queueIdentifier({ number, code: 11, pcc });
  const body = queuePlace(queueInfo);
  return request({ body, authorization, conversationId, action: ActionsRQ.QUEUE_PLACE })
}

export { placeRequest }