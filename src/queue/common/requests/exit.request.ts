import { request } from "../../../common/helpers/request.helper";
import { ActionsRQ } from "../../../common/interfaces/actions.interface";
import { navigationAction } from "../../common/helpers/navigation-action.helper"
import { ExitOptions } from "./interfaces/exit-options.interface";
import { NavigationAction } from "../../common/helpers/interfaces/navigation-actions.interface"

/**
 * {{header}}
 * 
 * {{navigationAction(action)}}
 * 
 * {{footer}}
 * @param options ExitOptions
 * @returns string
 */
function exitRequest(options: ExitOptions) {
  const { authorization, conversationId } = options 
  const body = navigationAction(NavigationAction.EXIT);
  return request({ authorization, conversationId, body, action: ActionsRQ.QUEUE_ACCESS })
}

export { exitRequest }