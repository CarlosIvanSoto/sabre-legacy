import { request } from "../../common/helpers/request.helper";
import { ActionsRQ } from "../../common/interfaces/actions.interface";
import { navigationAction } from "../helpers/navigation-action.helper"
import { NavigationAction } from "../helpers/interfaces/navigation-actions.interface"
import { RemoveOptions } from "./interfaces/remove-options.interface";

/**
 * {{header}}
 * 
 * {{navigationAction(action)}}
 * 
 * {{footer}}
 * @param options RemoveOptions
 * @returns string
 */
function removeRequest(options: RemoveOptions) {
  const { authorization, conversationId } = options 
  const body = navigationAction(NavigationAction.IGNORE);
  return request({ authorization, conversationId, body, action: ActionsRQ.QUEUE_ACCESS })
}

export { removeRequest }