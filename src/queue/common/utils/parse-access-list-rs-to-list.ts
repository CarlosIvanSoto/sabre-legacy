import { getQueueBookingInfo } from "./get-queue-booking-info";
import { QueueAccessList, QueueAccessListRS } from "./interfaces/queue-access-list.interface";
import { QueueContext } from "./interfaces/queue-context.interface"

function parseAccessListResponseToList(
  context: QueueContext,
  accessListResponse: QueueAccessListRS
): QueueAccessList {
  if (!accessListResponse.applicationResults?.success) {
    throw new Error(accessListResponse.applicationResults.error?.systemSpecificResults?.message || 'Unknown error');
  }
  const { queueNumber: queue } = context
  const { paragraph, line } = accessListResponse;
  return { 
    lines: line ? 
      line.map(qall => ({ 
        index: qall.number,
        dateTime: qall.dateTime,
        passengerName: qall.passengerName,
        agent: qall.pOS.source.agentSine,
        pcc: qall.pOS.source.pseudoCityCode,
        bookingId: qall.uniqueID.iD
      }))
      : undefined,
    list: paragraph.text.slice(2, -1).map(text => getQueueBookingInfo(text)),
    paragraph,
    queue
  }
}
export { parseAccessListResponseToList }