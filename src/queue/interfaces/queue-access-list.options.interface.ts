import { QueueAccessList } from "../common/utils/interfaces/queue-access-list.interface";
import { QueueAccessOptions } from "./queue-access-options.interface";

export interface QueueAccessListOptions extends QueueAccessOptions {
  primaryPassenger?: boolean
}

export interface QueueAccessListResponse extends QueueAccessList {}