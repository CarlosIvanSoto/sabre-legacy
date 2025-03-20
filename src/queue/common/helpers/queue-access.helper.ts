/**
 * <QueueAccessRQ ReturnHostCommand="true" Version="2.1.0" xmlns="http://webservices.sabre.com/sabreXML/2011/10">
 *  {{queueInfo}}
 * </QueueAccessRQ>
 * @param queueInfo string
 * @returns string
 */
function queueAccess(queueInfo: string): string {
  return `<QueueAccessRQ ReturnHostCommand="false" Version="2.1.0" xmlns="http://webservices.sabre.com/sabreXML/2011/10">${queueInfo}</QueueAccessRQ>`
}
export { queueAccess }