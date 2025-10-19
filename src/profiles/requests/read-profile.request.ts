import { request } from "../../common/helpers/request.helper"
import { ActionsRQ } from "../../common/interfaces/actions.interface"
import { ReadProfileRequestOptions } from "./interfaces/read-profile-options.interface"

/**
 * <Sabre_OTA_ProfileReadRQ xmlns="http://www.sabre.com/eps/schemas" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sabre.com/eps/schemas/WSDLSabre_OTA_ProfileReadRQ.xsd" Version="6.99.2">
 *   <Profile>
 *     <TPA_Identity UniqueID="102597606" ProfileName="ABCSTAR" DomainID="A2FE" ClientCode="TN" ProfileTypeCode="TVL" ClientContextCode="TMP" ProfileStatusCode="AC"></TPA_Identity>
 *   </Profile>
 * </Sabre_OTA_ProfileReadRQ>
 * @param options ReadProfileRequestOptions
 * @returns string
 */
function readProfileRequest(options: ReadProfileRequestOptions): string {
  const { uniqueID, profileName, domainID, profileTypeCode,clientContextCode,profileStatusCode, authorization, conversationId } = options
  const body = `<Sabre_OTA_ProfileReadRQ xmlns="http://www.sabre.com/eps/schemas" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sabre.com/eps/schemas/schemasWSDL/Sabre_OTA_ProfileReadRQ.xsd" Version="6.99.2"><Profile><TPA_Identity UniqueID="${uniqueID}" ProfileName="${profileName}" DomainID="${domainID}" ClientCode="TN" ProfileTypeCode="${profileTypeCode}" ClientContextCode="${clientContextCode}" ProfileStatusCode="${profileStatusCode}"></TPA_Identity></Profile></Sabre_OTA_ProfileReadRQ>`
  return request({
    body, action: ActionsRQ.READ_PROFILE, authorization, conversationId
  })
}

export { readProfileRequest }