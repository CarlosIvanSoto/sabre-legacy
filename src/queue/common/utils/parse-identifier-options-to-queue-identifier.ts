import { QueueIdentifierOptions } from "../helpers/interfaces/queue-identifier-options.interface"

function parseIdentifierOptionsToQueueIdentifier(payload: QueueIdentifierOptions) {
  return {
    QueueIdentifier: {
      "$Number": payload.number,
      "$PrefatoryInstructionCode": payload.code,
      "$PseudoCityCode": payload.pcc,

      List: payload.ind 
      ? {
        "$Ind": payload.ind,
        "$PrimaryPassenger": payload.primaryPassenger
      }
      : undefined
    }
  }
}

export { parseIdentifierOptionsToQueueIdentifier }