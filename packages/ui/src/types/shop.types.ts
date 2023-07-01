import { sanityRef } from './sanity.types'

export type Shop = {
  _id: string
  name: string
  displayName: string
  logo: sanityRef
}
