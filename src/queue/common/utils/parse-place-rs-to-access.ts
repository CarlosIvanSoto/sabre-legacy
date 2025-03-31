import { findQueueLine } from "./find-queue-line";
import { QueueAccess, QueuePlaceRS } from "./interfaces"
import { QueueContext } from "./interfaces/queue-context.interface"
import { parseParagraphToWarnings } from "./parse-paragraph-to-warnings"
import { parseWarningsToNotifications } from "./parse-warnings-to-notifications"

function parsePlaceResponseToAccess(
  context: QueueContext,
  placeResponse: QueuePlaceRS
): QueueAccess {
  if (!placeResponse.text) {
    throw new Error(placeResponse.applicationResults.error?.systemSpecificResults?.message || 'Unknown error');
  }
  const { queueNumber: queue } = context
  const warnings = parseParagraphToWarnings(placeResponse)
  const notifications = parseWarningsToNotifications({ queue, warnings })
  const { dateTime, agent, homePcc, bookingId } = findQueueLine(placeResponse.text.pop())
  return { 
    dateTime,
    agent,
    pcc: homePcc,
    bookingId,
    notifications,
    paragraph: placeResponse,
    queue
  }
}
export { parsePlaceResponseToAccess }