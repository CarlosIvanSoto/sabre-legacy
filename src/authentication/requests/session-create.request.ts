import { ActionsRQ } from "../../common/interfaces/actions.interface"
import { messageHeader } from "../../common/helpers/message-header.helper"
import { security } from "../../common/helpers/security.helper"
import { soapEnv } from "../../common/helpers/soap-env.helper"
import { usernameToken } from "../helpers/username-token.helper"
import { SessionCreateOptions } from "./interfaces/session-create-options.interface"

/**
 * {{header = message + security ( usernameToken )}}
 * 
 * <SessionCreateRQ returnContextID="true" Version="1.0.0" xmlns="http://www.opentravel.org/OTA/2002/11"/>
 * 
 * {{footer}}
 * @param payload SessionCreateOptions
 * @returns string
 */
function sessionCreateRequest(payload: SessionCreateOptions):string  {
  const { conversationId, authorization } = payload
  const message = messageHeader({
    action: ActionsRQ.SESSION_CREATE,
    conversationId: conversationId,
    to: 'Sabre_API',
  });
  const header = message + security(usernameToken(authorization))
  const body = '<SessionCreateRQ returnContextID="true" Version="1.0.0" xmlns="http://www.opentravel.org/OTA/2002/11"/>'
  return soapEnv({ header, body })
}

export { sessionCreateRequest }