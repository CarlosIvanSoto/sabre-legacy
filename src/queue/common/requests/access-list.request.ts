import { request } from "../../../common/helpers/request.helper";
import { ActionsRQ } from "../../../common/interfaces/actions.interface";
import { queueAccess } from "../../common/helpers/queue-access.helper";
import { builderQueueIdentifier } from "../utils/builder-queue-identifier";
import { AccessListOptions } from "./interfaces/access-list-options.interface";

/**
 * {{header}}
 * 
 * {{queueAccess(queueInfo)}}
 * 
 * {{footer}}
 * @param options AccessOptions
 * @returns string
 */
function accessListRequest(options: AccessListOptions): string {
  const { pcc, number, authorization, conversationId, primaryPassenger } = options;
  const queueInfo = builderQueueIdentifier({ pcc, number, ind: true, primaryPassenger });
  const body = queueAccess(queueInfo);
  return request({
    body, authorization, conversationId, action: ActionsRQ.QUEUE_ACCESS
  })
}

export { accessListRequest }