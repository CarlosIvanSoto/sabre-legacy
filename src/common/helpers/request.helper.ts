import { RequestOptions } from "../interfaces/request-options.interface";
import { header } from "./header.helper";
import { soapEnv } from "./soap-env.helper";

/**
 * {{header({ action, authorization })}}
 * 
 *  {{body}}
 * 
 * {{footer}}
 * @param payload 
 * @returns string
 */
function request(payload: RequestOptions) {
  const { action, conversationId, authorization, body } = payload;
  return soapEnv({
    header: header({ action, conversationId, authorization }),
    body
  })
}

export { request }