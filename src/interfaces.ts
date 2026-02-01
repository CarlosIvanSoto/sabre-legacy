import { ActionsRQ, ActionsRS } from "./common/interfaces/actions.interface";

export type Actions = ActionsRQ | ActionsRS

export interface SabreOptions {
  token?: string,
  username?: string,
  password?: string,
  organization?: string, // PCC
}

export interface FetchRequestOptions {
  method: 'POST',
  headers: Headers,
  body: string,
}