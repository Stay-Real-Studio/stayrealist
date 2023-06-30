import { Shop } from 'ui'
import { SHOPS_URL } from '../constants/coin.contants'

export async function getShops(): Promise<{
  result: Shop[]
}> {
  const res = await fetch(SHOPS_URL, { next: { revalidate: 60 } })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
