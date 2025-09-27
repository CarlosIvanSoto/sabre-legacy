const PROFILE_TYPE = {
  Traveler: 'TVL',
  Corporate: 'CRP',
  Group: 'GRP',
  Travel_Agency: 'AGY',
  Travel_Agent: 'AGT',
  Operational: 'OPX'
} as const

export type ProfileType = keyof typeof PROFILE_TYPE