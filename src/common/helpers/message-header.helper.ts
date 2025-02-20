import { MessageHeaderOptions } from "../interfaces/message-header-options.interface";

/**
 * <MessageHeader xmlns="http://www.ebxml.org/namespaces/messageHeader">
 *  <From>
 *    <PartyId>{{from}}</PartyId>
 *  </From>
 *  <To>
 *    <PartyId>{{to}}</PartyId>
 *  </To>
 *  <ConversationId>{{conversationId}}</ConversationId>
 *  <Action>{{action}}</Action>
 * </MessageHeader>
 * @param options 
 * @returns string
 */
function messageHeader(options: MessageHeaderOptions) {
  const {
    from = 'Agency',
    to = 'SWS',
    conversationId = '2021.01.DevStudio',
    action,
  } = options;
  return `<MessageHeader xmlns="http://www.ebxml.org/namespaces/messageHeader"><From><PartyId>${from}</PartyId></From><To><PartyId>${to}</PartyId></To><ConversationId>${conversationId}</ConversationId><Action>${action}</Action></MessageHeader>`
}

export { messageHeader }