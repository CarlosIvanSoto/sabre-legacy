import { QueueAccessList, QueueAccessListRS } from "./interfaces/queue-access-list.interface";
import { QueueContext } from "./interfaces/queue-context.interface"

function parseAccessListResponseToList(
  context: QueueContext,
  accessListResponse: QueueAccessListRS
): QueueAccessList {
  if (!accessListResponse.line) {
    throw new Error(accessListResponse.applicationResults.error?.systemSpecificResults?.message || 'Unknown error');
  }
  const { queueNumber: queue } = context
  const { paragraph, line } = accessListResponse;
  return { 
    bookings: line.map(qall => ({ 
      index: qall.number,
      dateTime: qall.dateTime,
      passengerName: qall.passengerName,
      agent: qall.pOS.source.agentSine,
      pcc: qall.pOS.source.pseudoCityCode,
      bookingId: qall.uniqueID.iD
    })),
    paragraph,
    queue
  }
}
export { parseAccessListResponseToList }