import { Sabre } from "../sabre";
import { ActionsRQ } from "../common/interfaces/actions.interface";
import { pingRequest, sessionCloseRequest, sessionCreateRequest, tokenCreateRequest } from "./requests";

export class Authentication {
  constructor(private readonly sabre: Sabre) {}

  async sessionCreate(): Promise<string> {
    this.sabre.setAction(ActionsRQ.SESSION_CREATE);
    const xml = await this.sabre.auth(sessionCreateRequest);
    return xml
  }
  async sessionClose(): Promise<string> {
    this.sabre.setAction(ActionsRQ.SESSION_CLOSE);
    const xml = await this.sabre.post(sessionCloseRequest);
    return xml
  }
  async ping(): Promise<string> {
    this.sabre.setAction(ActionsRQ.PING);
    const xml = await this.sabre.post(pingRequest);
    return xml
  }
  async tokenCreate(): Promise<string> {
    this.sabre.setAction(ActionsRQ.TOKEN_CREATE);
    const xml = await this.sabre.auth(tokenCreateRequest);
    return xml
  }
}