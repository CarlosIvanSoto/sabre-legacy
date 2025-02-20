import { RequestOptions } from "../interfaces/request-options.interface";
import { header } from "./header.helper";
import { soapEnv } from "./soap-env.helper";

/**
 * {{header({ action, authorization })}}
 * 
 *  {{body}}
 * 
 * {{footer}}
 * @param options 
 * @returns string
 */
function request(options: RequestOptions) {
  const { action, conversationId, authorization, body } = options;
  return soapEnv({
    header: header({ action, conversationId, authorization }),
    body
  })
}

export { request }