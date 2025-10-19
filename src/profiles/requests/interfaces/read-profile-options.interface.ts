import { HeadersRequestOptions } from "../../../common/interfaces"

export interface ReadProfileOptions {
  uniqueID: string
  profileName: string
  domainID?: string
  profileTypeCode: string
  clientContextCode: string
  profileStatusCode: string
}

export interface ReadProfileRequestOptions extends HeadersRequestOptions, ReadProfileOptions {}