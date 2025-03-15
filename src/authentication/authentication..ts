import { Sabre } from "../sabre";
import { ActionsRQ } from "../common/interfaces/actions.interface";
import { pingRequest, sessionCloseRequest, sessionCreateRequest, tokenCreateRequest } from "./requests";

export class Authentication {
  constructor(private readonly sabre: Sabre) {}

  /**
   * See https://developer.sabre.com/docs/soap_apis/session_management/create_session
   * @returns string
   */
  async sessionCreate(): Promise<string> {
    this.sabre.setAction(ActionsRQ.SESSION_CREATE);
    const xml = await this.sabre.auth(sessionCreateRequest);
    return xml
  }

  /**
   * See https://developer.sabre.com/docs/soap_apis/session_management/close_session
   * @returns string
   */
  async sessionClose(): Promise<string> {
    this.sabre.setAction(ActionsRQ.SESSION_CLOSE);
    const xml = await this.sabre.post(sessionCloseRequest);
    return xml
  }

  /**
   * See https://developer.sabre.com/docs/soap_apis/session_management/refresh_session
   * @returns string
   */
  async ping(): Promise<string> {
    this.sabre.setAction(ActionsRQ.PING);
    const xml = await this.sabre.post(pingRequest);
    return xml
  }

  /**
   * See https://developer.sabre.com/docs/soap_apis/session_management/create_access_token
   * @returns string
   */
  async tokenCreate(): Promise<string> {
    this.sabre.setAction(ActionsRQ.TOKEN_CREATE);
    const xml = await this.sabre.auth(tokenCreateRequest);
    return xml
  }
}