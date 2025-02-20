import { ActionsRQ } from "../../common/interfaces/actions.interface"
import { request } from "../../common/helpers/request.helper"
import { PingOptions } from "../interfaces/ping-options.interface"

/**
 * {{header}}
 * 
 * <OTA_PingRQ Version="1.0.0" xmlns="http://www.opentravel.org/OTA/2003/05"/>
 * 
 * {{footer}}
 * @param options PingOptions
 * @returns string
 */
function pingRequest(options: PingOptions) {
  const body = '<OTA_PingRQ Version="1.0.0" xmlns="http://www.opentravel.org/OTA/2003/05"/>'
  return request({ body, action: ActionsRQ.PING, ...options })
}

export { pingRequest }