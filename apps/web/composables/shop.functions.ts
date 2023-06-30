import { Shop } from 'ui'
import { SHOPS_URL, SHOP_URL } from '../constants/coin.contants'

export async function getShops(): Promise<{
  result: Shop[]
}> {
  const res = await fetch(SHOPS_URL, { next: { revalidate: 60 } })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function getShop(shopId: string): Promise<{
  shop: Shop
}> {
  const url = SHOP_URL(shopId)
  console.log(url)
  const res = await fetch(url, { next: { revalidate: 60 } })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
