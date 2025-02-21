import { HeaderOptions } from "../interfaces/header-options.interface"
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
  return messageHeader({ action, conversationId }) + security(authorization)
}
export { header }