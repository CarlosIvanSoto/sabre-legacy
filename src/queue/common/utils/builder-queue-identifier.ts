import { QueueIdentifierOptions } from "../helpers/interfaces/queue-identifier-options.interface";
import { parseIdentifierOptionsToQueueIdentifier } from "./parse-identifier-options-to-queue-identifier";
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

function builderQueueIdentifier(payload: QueueIdentifierOptions): string {
  const QueueIdentifierObj = parseIdentifierOptionsToQueueIdentifier(payload)

  const {XMLBuilder} = require('fast-xml-parser');

  const options = {
    ignoreAttributes: false,
    attributeNamePrefix: "$",
    suppressBooleanAttributes: false,
    suppressEmptyNode: true
  }
  const builder = new XMLBuilder(options);
  return builder.build(QueueIdentifierObj);
}

export { builderQueueIdentifier }