import { Shop } from 'ui'

import { client } from './sanity.functions'

export async function getShops(): Promise<Shop[]> {
  const shops = await client.fetch('*[_type == "shop"]')
  return shops
}

export async function getShop(shopId: string): Promise<Shop> {
  const shops = await client.fetch(`*[_id=="${shopId}"]`)
  return shops[0]
}
