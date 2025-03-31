import { QueueAccess } from "../common/utils/interfaces"

export interface QueueAccessOptions {
  number: string
  pcc?: string
}

export interface QueueAccessResponse extends QueueAccess {}