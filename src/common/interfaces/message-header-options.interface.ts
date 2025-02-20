import { ActionsRQ } from "./actions.interface";

export interface MessageHeaderOptions {
  from?: string
  to?: string,
  conversationId: string,
  action: ActionsRQ,
}