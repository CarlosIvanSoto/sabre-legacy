import { ApplicationResults } from "./application-results.interface"

export interface SabreCommandResponseSuccess {
    sabreCommandRS: SabreCommandLLSRS
  }

export interface SabreCommandLLSRS {
  applicationResults: ApplicationResults
  response?: string
}