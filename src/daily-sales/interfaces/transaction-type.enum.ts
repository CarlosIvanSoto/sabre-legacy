const TRANSACTION_TYPE = {
  SALE: 'SALE',
  CNCL: 'CNCL',
  RFND: 'RFND',
  VOID: 'VOID'
} as const

export type TransactionType = keyof typeof TRANSACTION_TYPE