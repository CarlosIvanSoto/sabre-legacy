const CUPON_TYPE = {
  F: 'F',
  P: 'P',
  E: 'E'
} as const

export type CuponType = keyof typeof CUPON_TYPE