const DOCUMENT_TYPE = {
  TKT: 'TKT',
  EMD: 'EMD',
  RFEMD: 'RFEMD',
  RFND: 'RFND',
  MCO: 'MCO' 
} as const

export type DocumentType = keyof typeof DOCUMENT_TYPE