import { Sabre } from "../sabre";
import { ActionsRQ } from "../common/interfaces/actions.interface";
import { pingRequest, sessionCloseRequest, sessionCreateRequest, tokenCreateRequest } from "./requests";

export class Authentication {
  constructor(private readonly sabre: Sabre) {}

  async sessionCreate() {
    this.sabre.setAction(ActionsRQ.SESSION_CREATE);
    const response = await this.sabre.auth<string>(sessionCreateRequest);
    return response
  }
  async sessionClose() {
    this.sabre.setAction(ActionsRQ.SESSION_CLOSE);
    const response = await this.sabre.post(sessionCloseRequest);
    return response
  }
  async ping() {
    this.sabre.setAction(ActionsRQ.PING);
    const response = await this.sabre.post(pingRequest);
    return response
  }
  async tokenCreate() {
    this.sabre.setAction(ActionsRQ.TOKEN_CREATE);
    const response = await this.sabre.auth<string>(tokenCreateRequest);
    return response
  }
}