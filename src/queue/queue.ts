import { parseXMLToQueueCount, parseXMLToQueueAccess, parseXMLToQueuePlace, parseXMLToQueueAccessList, parseAccessListResponseToList, parseAccessResponseToAccess, parsePlaceResponseToAccess } from "./common/utils";
import { QueueAccessListOptions, QueueAccessListResponse, QueueAccessOptions, QueueAccessResponse, QueueCountResponse, QueueExitResponse, QueueIgnoreResponse, QueuePlaceOptions, QueuePlaceResponse, QueueRemoveResponse } from "./interfaces";
import { countRequest, accessRequest, ignoreRequest, removeRequest, exitRequest, placeRequest, accessListRequest } from "./common/requests";
import { ActionsRQ, ActionsRS } from "../common/interfaces/actions.interface";
import { Sabre } from "../sabre";

export class Queue {
  private readonly meta = {
    queue: '',
  }
  constructor(private readonly sabre: Sabre) { }

  /**
   * List Queues
   * 
   * See https://developer.sabre.com/docs/soap_apis/management/queue/Get_Queue_Count
   * @param pcc string
   * @returns QueueCountResponse
   */
  async count(pcc?: string): Promise<QueueCountResponse> {
    if (!pcc) {
      if (typeof process !== 'undefined' && process.env) {
        pcc = process.env.SABRE_ORGANIZATION;
      }
    }
    if (!pcc) throw new Error('Missing pcc. Set it in count("PCC")')

    this.sabre.setAction(ActionsRQ.QUEUE_COUNT)
    const xml = await this.sabre.post((opts) => countRequest({
      pcc, ...opts
    }))
    return parseXMLToQueueCount(xml)
  }

  /**
   * Access queue 
   * 
   * See https://developer.sabre.com/docs/soap_apis/management/queue/Access_Queue
   * @param payload QueueAccessOptions
   * @returns QueueAccessResponse
   */
  async access(payload: QueueAccessOptions): Promise<QueueAccessResponse> {
    if (!payload.pcc) {
      if (typeof process !== 'undefined' && process.env) {
        payload.pcc = process.env.SABRE_ORGANIZATION;
      }
    }
    if (!payload.pcc) throw new Error('Missing pcc. Set it in access({ pcc, number })')
    const { number, pcc } = payload
    this.sabre.setAction(ActionsRS.QUEUE_ACCESS)
    const xml = await this.sabre.post((opts) => accessRequest({
      number, pcc, ...opts
    }))
    this.meta.queue = number
    const queueAccess = parseXMLToQueueAccess(xml)
    return parseAccessResponseToAccess({ queueNumber: this.meta.queue }, queueAccess)
  }
  /**
   * Get PNR list from queue (Stateless)
   * 
   * See https://developer.sabre.com/docs/soap_apis/management/queue/Access_Queue
   * @param payload QueueAccessListOptions
   * @returns QueueAccessListResponse
   */
  async accessList(payload: QueueAccessListOptions): Promise<QueueAccessListResponse> {
    if (!payload.pcc) {
      if (typeof process !== 'undefined' && process.env) {
        payload.pcc = process.env.SABRE_ORGANIZATION;
      }
    }
    if (!payload.pcc) throw new Error('Missing pcc. Set it in access({ pcc, number })')
    const { number, pcc, primaryPassenger } = payload
    this.sabre.setAction(ActionsRS.QUEUE_ACCESS)
    const xml = await this.sabre.post((opts) => accessListRequest({
      number, pcc, primaryPassenger, ...opts
    }))
    const queueAccessList = parseXMLToQueueAccessList(xml)
    return parseAccessListResponseToList({ queueNumber: number }, queueAccessList)
  }

  /**
   * Ignore PNR & Next
   * 
   * See https://developer.sabre.com/docs/soap_apis/management/queue/Access_Queue
   * @returns QueueIgnoreResponse
   */
  async ignore(): Promise<QueueIgnoreResponse> {
    this.sabre.setAction(ActionsRS.QUEUE_ACCESS)
    const xml = await this.sabre.post(ignoreRequest)
    const queueAccess = parseXMLToQueueAccess(xml)
    return parseAccessResponseToAccess({ queueNumber: this.meta.queue }, queueAccess)
  }

  /**
   * Remove PNR & Next
   * 
   * See https://developer.sabre.com/docs/soap_apis/management/queue/Access_Queue
   * @returns QueueRemoveResponse
   */
  async remove(): Promise<QueueRemoveResponse> {
    this.sabre.setAction(ActionsRS.QUEUE_ACCESS)
    const xml = await this.sabre.post(removeRequest)
    const queueAccess = parseXMLToQueueAccess(xml)
    return parseAccessResponseToAccess({ queueNumber: this.meta.queue }, queueAccess)
  }

  /**
   * Ignore PNR & Exit
   * 
   * See https://developer.sabre.com/docs/soap_apis/management/queue/Access_Queue
   * @returns QueueExitResponse
   */
  async exit(): Promise<QueueExitResponse> {
    this.sabre.setAction(ActionsRS.QUEUE_ACCESS)
    const xml = await this.sabre.post(exitRequest)
    const queueAccess = parseXMLToQueueAccess(xml)
    if (queueAccess.applicationResults.error) {
      throw new Error(queueAccess.applicationResults.error?.systemSpecificResults?.message);
    }
    return {
      paragraph: queueAccess.paragraph,
    }
  }

  /**
   * Queue Place "Stateful Single Queue"
   * 
   * See https://developer.sabre.com/docs/soap_apis/management/queue/Place_Queue_Message
   * @param payload QueuePlaceOptions
   * @returns QueuePlaceResponse
   */
  async place(payload: QueuePlaceOptions): Promise<QueuePlaceResponse> {
    if (!payload.pcc) {
      if (typeof process !== 'undefined' && process.env) {
        payload.pcc = process.env.SABRE_ORGANIZATION;
      }
    }
    if (!payload.pcc) throw new Error('Missing pcc. Set it in place({ pcc, number })')
    const { number, pcc } = payload
    this.sabre.setAction(ActionsRQ.QUEUE_PLACE)
    const xml = await this.sabre.post((opts) => placeRequest({
      number, pcc, ...opts
    }))
    const queuePlace = parseXMLToQueuePlace(xml)
    return parsePlaceResponseToAccess({ queueNumber: this.meta.queue }, queuePlace)
  }
}