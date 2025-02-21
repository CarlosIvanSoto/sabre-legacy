const SETTLEMENT_TYPE = {
  TAT: 'TAT',
  TCH: 'TCH',
  TKT: 'TKT'
} as const

export type SettlementType = keyof typeof SETTLEMENT_TYPE