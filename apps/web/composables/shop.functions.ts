import { Shop } from 'ui'

import { client } from './sanity.functions'
import { SHOPS_URL } from '../constants/coin.contants'

export async function getShops() {
  const shopResp = await fetch(SHOPS_URL, { next: { revalidate: 60 } })
  return shopResp.json()
}

export async function getShop(shopId: string): Promise<Shop> {
  const results = await client.fetch(`*[_id=="${shopId}"]`)
  return results[0]
}
