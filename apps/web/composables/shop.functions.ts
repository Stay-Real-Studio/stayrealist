import { Shop } from 'ui'
import { SHOPS_URL } from '../constants/coin.contants'

export async function getShops(): Promise<{
  result: Shop[]
}> {
  const res = await fetch(SHOPS_URL, { next: { revalidate: 60 } })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
