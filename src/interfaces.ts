import { ActionsRQ, ActionsRS } from "./common/interfaces/actions.interface";

export type Actions = ActionsRQ | ActionsRS

export interface SabreOptions {
  username?: string,
  password?: string,
  organization?: string, // PCC
}