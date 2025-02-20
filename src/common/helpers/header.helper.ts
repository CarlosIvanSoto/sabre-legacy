import { HeaderOptions } from "../interfaces/header-options.interface"
import { messageHeader } from "./message-header.helper"
import { security } from "./security.helper"

/**
 * 
 * {{messageHeader({ action, conversationId }) + security(authorization)}}
 * 
 * @param options HeaderOptions
 * @returns string
 */
function header (options: HeaderOptions) {
  const { action, conversationId, authorization } = options
  return messageHeader({ action, conversationId }) + security(authorization)
}
export { header }