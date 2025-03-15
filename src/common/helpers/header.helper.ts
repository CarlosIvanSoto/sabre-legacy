import { HeaderOptions } from "../interfaces/header-options.interface"
import { binarySecurityToken } from "./binary-security-token.helper"
import { messageHeader } from "./message-header.helper"
import { security } from "./security.helper"

/**
 * 
 * {{messageHeader({ action, conversationId }) + security(authorization)}}
 * 
 * @param payload HeaderOptions
 * @returns string
 */
function header (payload: HeaderOptions) {
  const { action, conversationId, authorization } = payload
  const binarySecurity = binarySecurityToken(authorization)
  return messageHeader({ action, conversationId }) + security(binarySecurity)
}
export { header }