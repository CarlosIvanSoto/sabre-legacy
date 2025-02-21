import { request } from "../../../common/helpers/request.helper";
import { ActionsRQ } from "../../../common/interfaces/actions.interface";
import { navigationAction } from "../../common/helpers/navigation-action.helper"
import { IgnoreOptions } from "./interfaces/ignore-options.interface";
import { NavigationAction } from "../../common/helpers/interfaces/navigation-actions.interface"

/**
 * {{header}}
 * 
 * {{navigationAction(action)}}
 * 
 * {{footer}}
 * @param options IgnoreOptions
 * @returns string
 */
function ignoreRequest(options: IgnoreOptions) {
  const { authorization, conversationId } = options 
  const body = navigationAction(NavigationAction.IGNORE);
  return request({ authorization, conversationId, body, action: ActionsRQ.QUEUE_ACCESS })
}

export { ignoreRequest }