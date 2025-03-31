import { request } from "../../../common/helpers/request.helper";
import { ActionsRQ } from "../../../common/interfaces/actions.interface";
import { queueCount } from "../../common/helpers/queue-count.helper";
import { builderQueueIdentifier } from "../utils/builder-queue-identifier";
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
function countRequest(options: CountOptions): string {
  const { authorization, conversationId, pcc } = options;
  const queueInfo = builderQueueIdentifier({ pcc });
  const body = queueCount(queueInfo)
  return request({ 
    body,
    authorization,
    conversationId,
    action: ActionsRQ.QUEUE_COUNT
  })
}
export { countRequest }