import { QueueIdentifierOptions } from "../helpers/interfaces/queue-identifier-options.interface";
import { builderQueueIdentifier } from "./builder-queue-identifier";


describe('Builder queue identifier', () => {
  it('should handle minimal identifier options', () => {
    const payload: QueueIdentifierOptions = {
      number: '1',
      pcc: 'H8GI'
    };
    const xml = builderQueueIdentifier(payload)
    // console.log(xml)
    expect(xml).toEqual('<QueueIdentifier Number="1" PseudoCityCode="H8GI"/>')
  })

  it('should handle queue place options in identifier options', () => {
    const payload: QueueIdentifierOptions = {
      number: '100',
      code: '11',
      pcc: 'H8GI',
    };
    const xml = builderQueueIdentifier(payload)
    // console.log(xml)
    expect(xml).toEqual('<QueueIdentifier Number="100" PrefatoryInstructionCode="11" PseudoCityCode="H8GI"/>')
  })

  it('should handle queue count options in identifier options', () => {
    const payload: QueueIdentifierOptions = {
      pcc: 'H8GI',
    };
    const xml = builderQueueIdentifier(payload)
    // console.log(xml)
    expect(xml).toEqual('<QueueIdentifier PseudoCityCode="H8GI"/>')
  })

  it('should handle queue access list options in identifier options', () => {
    const payload: QueueIdentifierOptions = {
      number: '100',
      pcc: 'H8GI',
      ind: true,
      primaryPassenger: true
    };
    const xml = builderQueueIdentifier(payload)
    // console.log(xml)
    expect(xml).toEqual('<QueueIdentifier Number="100" PseudoCityCode="H8GI"><List Ind="true" PrimaryPassenger="true"/></QueueIdentifier>')
  })
})