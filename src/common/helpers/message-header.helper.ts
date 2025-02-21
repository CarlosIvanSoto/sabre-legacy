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
 * @param payload 
 * @returns string
 */
function messageHeader(payload: MessageHeaderOptions) {
  const {
    from = 'Agency',
    to = 'SWS',
    conversationId = '2021.01.DevStudio',
    action,
  } = payload;
  return `<MessageHeader xmlns="http://www.ebxml.org/namespaces/messageHeader"><From><PartyId>${from}</PartyId></From><To><PartyId>${to}</PartyId></To><ConversationId>${conversationId}</ConversationId><Action>${action}</Action></MessageHeader>`
}

export { messageHeader }