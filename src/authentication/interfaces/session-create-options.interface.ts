import { UsernameTokenOptions } from "./username-token-options.interface"

export interface SessionCreateOptions {
  authorization: UsernameTokenOptions
  conversationId: string
}