import { request } from "../../common/helpers/request.helper";
import { ActionsRQ } from "../../common/interfaces/actions.interface";
import { queueCount } from "../helpers/queue-count.helper";
import { queueIdentifier } from "../helpers/queue-identifier.helper";
import { CountOptions } from "./interfaces/count-options.interface";

/**
 * {{header}}
 * 
 * {{queueCount(queueInfo)}}
 * 
 * {{footer}}
 * @param options QueueCountOptions
 * @returns string
 */
function countRequest(options: CountOptions) {
  const { authorization, conversationId, pcc } = options;
  const queueInfo = queueIdentifier({ pcc });
  const body = queueCount(queueInfo)
  return request({ 
    body,
    authorization,
    conversationId,
    action: ActionsRQ.QUEUE_COUNT
  })
}
export { countRequest }