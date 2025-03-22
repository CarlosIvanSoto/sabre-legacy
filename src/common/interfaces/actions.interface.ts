
export enum ActionsRQ {
  SESSION_CREATE = 'SessionCreateRQ',
  SESSION_CLOSE = 'SessionCloseRQ',
  TOKEN_CREATE = 'TokenCreateRQ',
  QUEUE_COUNT = 'QueueCountLLSRQ',
  QUEUE_ACCESS = 'QueueAccessLLSRQ',
  QUEUE_PLACE = 'QueuePlaceLLSRQ',
  AGENCY_REPORT = 'TKT_TravelAgencyReportsRQ',
  DAILY_SALES_REPORT = 'DailySalesReportLLSRQ',
  PING = 'OTA_PingRQ',
  ENCODE_DECODE = 'EncodeDecodeLLSRQ',
  SABRE_COMMANDS = 'SabreCommandLLSRQ',
} 

export enum ActionsRS {
  SESSION_CLOSE = 'SessionCloseRS',
  QUEUE_ACCESS = 'QueueAccessLLSRS',
}