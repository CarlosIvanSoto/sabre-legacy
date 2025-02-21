
/**
 * <QueuePlaceRQ ReturnHostCommand="true" Version="2.0.4" xmlns="http://webservices.sabre.com/sabreXML/2011/10">
 *  <QueueInfo>{{queueInfo}}</QueueInfo>
 * </QueuePlaceRQ>
 * 
 * @param queueInfo string
 * @returns string
 */
function queuePlace(queueInfo: string) {
  return `<QueuePlaceRQ ReturnHostCommand="true" Version="2.0.4" xmlns="http://webservices.sabre.com/sabreXML/2011/10"><QueueInfo>${queueInfo}</QueueInfo></QueuePlaceRQ>`
}
export { queuePlace }