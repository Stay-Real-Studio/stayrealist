export const SANIRY_PROJECT_ID = `kfoyr571`
export const SANIRY_BASE_URL = `https://${SANIRY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/production`
export const COINS_URL = `${SANIRY_BASE_URL}?query=*[_type=='coin']`
export const SHOPS_URL = `${SANIRY_BASE_URL}?query=*[_type=='shop']`
export const SHOP_URL = (shopId: string) =>
  `${SANIRY_BASE_URL}?query=*[_id=='${shopId}']`

export const COIN_MAP = {
  H: 'Himalaya Coin',
  E: 'Ethernet',
  G: 'GETTR Coin',
  B: 'Bitcoin',
}
