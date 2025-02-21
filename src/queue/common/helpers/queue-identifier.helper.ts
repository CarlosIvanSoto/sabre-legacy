import { QueueIdentifierOptions } from "./interfaces/queue-identifier-options.interface"

/**
 * 
 * <QueueIdentifier PseudoCityCode="{{pcc}}"/>
 * or 
 * <QueueIdentifier Number="{{number}}" PseudoCityCode="{{pcc}}"/>
 * or 
 * <QueueIdentifier Number="{{number}}" PseudoCityCode="{{pcc}}"/>
 * or
 * <QueueIdentifier Number="{{number}}" PrefatoryInstructionCode="{{code}}" PseudoCityCode="{{pcc}}">
 *  <List Ind="true" PrimaryPassenger="true" />
 * </QueueIdentifier>
 * 
 * @param options QueueIdentifierOptions
 * @returns string
 */
function queueIdentifier(options: QueueIdentifierOptions) {
  const { pcc, number, ind, code } = options
  const listParam = ind ? '><List Ind="true" PrimaryPassenger="true" /></QueueIdentifier>' : '/>'
  const numberParam = number ? `Number="${number}" ` : ''
  const codeParam = code ? `PrefatoryInstructionCode="${code}" ` : ''
  return `<QueueIdentifier ${numberParam}${codeParam}PseudoCityCode="${pcc}"${listParam}`
}

export { queueIdentifier }