import { ActionsRQ } from "../../common/interfaces/actions.interface"
import { messageHeader } from "../../common/helpers/message-header.helper"
import { security } from "../../common/helpers/security.helper"
import { soapEnv } from "../../common/helpers/soap-env.helper"
import { usernameToken } from "../helpers/username-token.helper"
import { TokenCreateOptions } from "../interfaces"

/**
 * {{header}}
 * 
 * <TokenCreateRQ Version="1.0.0" xmlns="http://webservices.sabre.com"/>
 * 
 * {{footer}}
 * @param options TokenCreateOptions
 * @returns string
 */
function tokenCreateRequest(options: TokenCreateOptions):string  {
  const { conversationId, authorization } = options
  const message = messageHeader({
    action: ActionsRQ.TOKEN_CREATE,
    conversationId: conversationId,
    to: 'Sabre_API',
  });
  const header = message + security(usernameToken(authorization))
  const body = '<TokenCreateRQ Version="1.0.0" xmlns="http://webservices.sabre.com"/>'
  return soapEnv({ header, body })
}

export { tokenCreateRequest }