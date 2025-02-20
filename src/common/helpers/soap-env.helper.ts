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
 * @param options 
 * @returns string
 */
function soapEnv (options: SoapEnvOptions) {
  const { header, body } = options
  return `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"><SOAP-ENV:Header>${header}</SOAP-ENV:Header><SOAP-ENV:Body>${body}</SOAP-ENV:Body></SOAP-ENV:Envelope>`
}

export { soapEnv }