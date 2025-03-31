import { QueueAccess, QueueAccessRS } from "./interfaces"
import { QueueContext } from "./interfaces/queue-context.interface"
import { parseParagraphToWarnings } from "./parse-paragraph-to-warnings"
import { parseWarningsToNotifications } from "./parse-warnings-to-notifications"

function parseAccessResponseToAccess(
  context: QueueContext,
  accessResponse: QueueAccessRS
): QueueAccess {
  if (!accessResponse.line?.uniqueID?.iD) {
    throw new Error(accessResponse.applicationResults.error?.systemSpecificResults?.message || 'Unknown error');
  }
  const { queueNumber: queue } = context
  const { paragraph, line } = accessResponse;
  const warnings = parseParagraphToWarnings(paragraph)
  const notifications = parseWarningsToNotifications({ queue, warnings })
  return { 
    dateTime: line.dateTime,
    agent: line.pOS.source.agentSine,
    pcc: line.pOS.source.pseudoCityCode,
    bookingId: line.uniqueID.iD,
    notifications,
    paragraph,
    queue
  }
}
export { parseAccessResponseToAccess }