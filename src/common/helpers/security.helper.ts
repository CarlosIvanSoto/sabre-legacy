/**
 * <Security xmlns="http://schemas.xmlsoap.org/ws/2002/12/secext">
 *  {{authorization}}
 * </Security>
 * @param authorization
 * @returns 
 */
function security (authorization: string) {
  return `<Security xmlns="http://schemas.xmlsoap.org/ws/2002/12/secext">${authorization}</Security>`
}

export { security }