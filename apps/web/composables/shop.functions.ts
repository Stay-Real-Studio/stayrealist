import { Shop } from 'ui'
import {
  SHOPS_URL,
  SHOP_URL,
  SANIRY_PROJECT_ID,
} from '../constants/coin.contants'

export async function getShops(): Promise<{
  result: Shop[]
}> {
  const res = await fetch(SHOPS_URL, { next: { revalidate: 60 } })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function getShop(shopId: string) {
  const url = SHOP_URL(shopId)
  console.log(url)
  const res = await fetch(url, { next: { revalidate: 60 } })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
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
