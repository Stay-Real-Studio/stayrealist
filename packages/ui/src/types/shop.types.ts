import { SanityGeopoint } from './sanity.types'

export type Shop = {
  _id: string
  name: string
  displayName: string
  logo: any
  location: SanityGeopoint
  email: string
  phoneNumber: string
  website: string
  coins?: string[]
}

export type Coin = {
  name: string
}
