import { SoapEnvOptions } from "../interfaces/soap-env-options.interface"

/**
 * <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
 *  <SOAP-ENV:Header>
 *    {{header}}
 *  </SOAP-ENV:Header>
  * <SOAP-ENV:Body>
  *   {{body}}
  * </SOAP-ENV:Body>
 * </SOAP-ENV:Envelope>
 * @param payload 
 * @returns string
 */
function soapEnv (payload: SoapEnvOptions) {
  const { header, body } = payload
  return `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"><SOAP-ENV:Header>${header}</SOAP-ENV:Header><SOAP-ENV:Body>${body}</SOAP-ENV:Body></SOAP-ENV:Envelope>`
}

export { soapEnv }