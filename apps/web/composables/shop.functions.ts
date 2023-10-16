import { Shop, Coin } from 'ui'
import { COIN_MAP } from '../constants/coin.contants'
import { client } from './sanity.functions'
import { SHOPS_URL } from '../constants/coin.contants'

export async function getShops() {
  const shopResp = await fetch(SHOPS_URL, { next: { revalidate: 60 } })
  return shopResp.json()
}

export async function getShop(shopId: string): Promise<Shop> {
  const results = await client.fetch(`*[_id=="${shopId}"]{
    ...,
    acceptCoins[]->{name},
    "coins": acceptCoins[]->name
    
  }`)
  return results[0]
}
export async function getCoins(): Promise<Coin[]> {
  const results = await client.fetch(`*[_type=="coin"]{
    name
  }`)
  return results
}

export const AcceptCoins = (list: Coin[]) => {
  if (!list?.length) return []
  const coinArr = []
  list.forEach((coin) => {
    switch (coin.name) {
      case 'Himalaya Coin':
        coinArr.push('H')
        break
      case 'Ethernet':
        coinArr.push('E')
        break
      case 'GETTR Coin':
        coinArr.push('G')
        break
      case 'Bitcoin':
        coinArr.push('B')
        break
      default:
        break
    }
  })
  return coinArr
}

export const getCoinCls = (coin: string, shopCoins: string[]) => {
  const matchCoin = shopCoins.includes(COIN_MAP[coin])
  return matchCoin
    ? 'text-lime-600 cursor-pointer'
    : 'text-gray-300 cursor-cursor-not-allowed'
}
