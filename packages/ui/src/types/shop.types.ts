import { SanityGeopoint } from './sanity.types'

export type Shop = {
  _id: string
  name: string
  displayName: string
  logo: any
  location: SanityGeopoint
}
