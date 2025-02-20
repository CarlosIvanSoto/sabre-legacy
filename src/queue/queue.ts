import { ActionsRQ, ActionsRS } from "../common/interfaces/actions.interface";
import { LegacySabre } from "../sabre";
import { QueueAccessOptions, QueuePlaceOptions } from "./interfaces";
import { countRequest, accessRequest, ignoreRequest, removeRequest, exitRequest, placeRequest } from "./requests";
import { findBookingId } from "./utils/find-booking-id";
import { formatQueueResponse } from "./utils/format-queue-response";
import { parseXMLToQueueAccess } from "./utils/parse-xml-to-queue-access";
import { parseXMLToQueueCount } from "./utils/parse-xml-to-queue-count";
import { parseXMLToQueuePlace } from "./utils/parse-xml-to-queue-place";

export class Queue {
  private readonly meta = {
    queue: '',
  }
  constructor(private readonly sabre: LegacySabre) {}
  async count(pcc?: string) {
    if (!pcc) {
      if (typeof process !== 'undefined' && process.env) {
        pcc = process.env.SABRE_ORGANIZATION;
      }
    }
    if (!pcc) throw new Error('Missing pcc. Set it in count("PCC")')
    
    this.sabre.setAction(ActionsRQ.QUEUE_COUNT)
    const response = await this.sabre.post<string>((opts) => countRequest({ 
      pcc, ...opts
    }))
    if (!response.data) throw new Error(`Response error ${response.error}`)
    return parseXMLToQueueCount(response.data)
  }
  async access(payload: QueueAccessOptions) {
    if (!payload.pcc) {
      if (typeof process !== 'undefined' && process.env) {
        payload.pcc = process.env.SABRE_ORGANIZATION;
      }
    }
    if (!payload.pcc) throw new Error('Missing pcc. Set it in access({ pcc, number })')
    const { number, pcc } = payload
    this.sabre.setAction(ActionsRS.QUEUE_ACCESS)
    const response = await this.sabre.post<string>((opts) => accessRequest({
      number, pcc, ...opts
    }))
    if (!response.data) throw new Error(`Response error ${response.error}`)
    this.meta.queue = number
    const queueAccess = parseXMLToQueueAccess(response.data)
    return formatQueueResponse({
      bookingId: queueAccess.line.uniqueID.iD,
      paragraph: queueAccess.paragraph,
      queue: this.meta.queue
    })
  }
  async ignore() {
    this.sabre.setAction(ActionsRS.QUEUE_ACCESS)
    const response = await this.sabre.post<string>(ignoreRequest)
    if (!response.data) throw new Error(`Response error ${response.error}`)
    const queueAccess = parseXMLToQueueAccess(response.data)
    return formatQueueResponse({
      bookingId: queueAccess.line.uniqueID.iD,
      paragraph: queueAccess.paragraph,
      queue: this.meta.queue
    })
  }
  async remove() {
    this.sabre.setAction(ActionsRS.QUEUE_ACCESS)
    const response = await this.sabre.post<string>(removeRequest)
    if (!response.data) throw new Error(`Response error ${response.error}`)
    const queueAccess = parseXMLToQueueAccess(response.data)
    return formatQueueResponse({
      bookingId: queueAccess.line.uniqueID.iD,
      paragraph: queueAccess.paragraph,
      queue: this.meta.queue
    })
  }
  async exit() {
    this.sabre.setAction(ActionsRS.QUEUE_ACCESS)
    await this.sabre.post<string>(exitRequest)
  }
  async place(payload: QueuePlaceOptions) {
    if (!payload.pcc) {
      if (typeof process !== 'undefined' && process.env) {
        payload.pcc = process.env.SABRE_ORGANIZATION;
      }
    }
    if (!payload.pcc) throw new Error('Missing pcc. Set it in place({ pcc, number })')
    const { number, pcc } = payload
    this.sabre.setAction(ActionsRQ.QUEUE_PLACE)
    const response = await this.sabre.post<string>((opts) => placeRequest({
      number, pcc, ...opts
    }))
    if (!response.data) throw new Error(`Response error ${response.error}`)
    const queuePlace = parseXMLToQueuePlace(response.data)
    return formatQueueResponse({
      bookingId: findBookingId(queuePlace.text.pop()),
      paragraph: { text: queuePlace.text },
      queue: this.meta.queue
    })
  }
}