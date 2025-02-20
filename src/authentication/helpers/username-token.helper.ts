import { UsernameTokenOptions } from "../interfaces/username-token-options.interface";

/**
 * <UsernameToken>
 *  <Username>{{username}}</Username>
 *  <Password>{{password}}</Password>
 *  <Organization>{{pcc}}</Organization>
 *  <Domain>{{domain}}</Domain>
 *  <ClientId>{{clientId}}</ClientId>
 *  <ClientSecret>{{clientSecret}}</ClientSecret>
 * </UsernameToken>
 * @param options 
 * @returns string
 */
function usernameToken (options: UsernameTokenOptions) {
  const { username, password, pcc, domain } = options
  return `<UsernameToken><Username>${username}</Username><Password>${password}</Password><Organization>${pcc}</Organization><Domain>${domain}</Domain></UsernameToken>`
}
export { usernameToken }