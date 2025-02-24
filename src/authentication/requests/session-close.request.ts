import { ActionsRQ } from './../../common/interfaces/actions.interface';
import { request } from "../../common/helpers/request.helper"
import { SessionCloseOptions } from "./interfaces/session-close-options.interface"

/**
 * {{header}}
 * 
 * <SessionCloseRQ Version="1.0.0" xmlns="http://www.opentravel.org/OTA/2002/11"/>
 * 
 * {{footer}}
 * @param payload SessionCloseOptions 
 * @returns string
 */
function sessionCloseRequest (payload: SessionCloseOptions): string {
  const body = '<SessionCloseRQ Version="1.0.0" xmlns="http://www.opentravel.org/OTA/2002/11"/>'
  return request({ body, action: ActionsRQ.SESSION_CLOSE, ...payload })
}

export { sessionCloseRequest }