import { Shop } from 'ui'
import {
  SHOPS_URL,
  SHOP_URL,
  SANIRY_PROJECT_ID,
} from '../constants/coin.contants'
import { client } from './sanity.functions'

export async function getShops(): Promise<Shop[]> {
  const shops = await client.fetch('*[_type == "shop"]')
  return shops
}

export async function getShop(shopId: string): Promise<Shop> {
  const shops = await client.fetch(`*[_id=="${shopId}"]`)
  return shops[0]
}

export function getSanityImgURL(ref: string) {
  // ref formart: image-2ee03a2eba5d43120c0db51e53d4c9c6db5b8c17-150x150-jpg
  const firstSplitIndex = ref.indexOf('-')
  const lastSplitIndex = ref.lastIndexOf('-')
  const retRef = `${ref.slice(firstSplitIndex + 1, lastSplitIndex)}.${ref.slice(
    lastSplitIndex + 1
  )}`
  const BASE_SANITY_IMG_URL = `https://cdn.sanity.io/images/${SANIRY_PROJECT_ID}/production/${retRef}`
  return BASE_SANITY_IMG_URL
}
