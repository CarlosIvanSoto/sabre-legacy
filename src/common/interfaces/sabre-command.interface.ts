import { ApplicationResults } from "./application-results.interface"

export interface SabreCommandResponseSuccess {
    sabreCommandLLSRS: SabreCommandLLSRS
  }

export interface SabreCommandLLSRS {
  applicationResults: ApplicationResults
  response?: string
}