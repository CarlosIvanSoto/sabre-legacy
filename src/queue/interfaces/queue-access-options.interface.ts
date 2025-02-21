import { FormatQueueResponse } from "../common/utils/interfaces"

export interface QueueAccessOptions {
  number: string
  pcc?: string
}

export interface QueueAccessResponse extends FormatQueueResponse {}