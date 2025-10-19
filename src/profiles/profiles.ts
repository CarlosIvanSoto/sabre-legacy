import { Sabre } from "../sabre";
import { ActionsRQ } from "../common/interfaces";
import { readProfileRequest } from "./requests/read-profile.request";
import { ReadProfileOptions } from "./requests/interfaces/read-profile-options.interface";
import { parseXMLToReadProfile } from "./utils/parse-xml-to-read-profile";
import { SabreOTAProfileReadRS } from "./interfaces/read-profile-options.interface";

export class Profiles {
    constructor(private readonly sabre: Sabre) {}

  /**
   * See https://developer.sabre.com/docs/soap_apis/air/fulfill/Get_Sales_Reports
   * @param payload ReadProfileOptions
   * @returns DailySalesReportRS
   */
  async read(payload: ReadProfileOptions): Promise<SabreOTAProfileReadRS> {
    if (!payload.domainID) {
      if (typeof process !== 'undefined' && process.env) {
        payload.domainID = process.env.SABRE_ORGANIZATION;
      }
    }
    if (!payload.domainID) throw new Error('Missing domainID. Set it in read profile({ domainID })')

    const { domainID } = payload
    this.sabre.setAction(ActionsRQ.READ_PROFILE)
    const xml = await this.sabre.post((headersPayload) => readProfileRequest({ ...payload, ...headersPayload }))
    return parseXMLToReadProfile(xml)
  }

}