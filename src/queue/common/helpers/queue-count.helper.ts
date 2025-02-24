/**
 * <QueueCountRQ xmlns="http://webservices.sabre.com/sabreXML/2011/10" ReturnHostCommand="true" Version="2.2.1">
 *  <QueueInfo>{{queueInfo}}</QueueInfo>
 * </QueueCountRQ>
 * 
 * @param queueInfo string
 * @returns string
 */
function queueCount(queueInfo: string): string {
  return `<QueueCountRQ xmlns="http://webservices.sabre.com/sabreXML/2011/10" ReturnHostCommand="true" Version="2.2.1"><QueueInfo>${queueInfo}</QueueInfo></QueueCountRQ>`
}

export { queueCount }