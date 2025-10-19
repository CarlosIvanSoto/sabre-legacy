import { Profile } from "./profile.interface"

export interface ReadOptions {
  date: string
  pcc?: string
}

export interface SabreOTAProfileReadRS {
    profile: Profile
}
