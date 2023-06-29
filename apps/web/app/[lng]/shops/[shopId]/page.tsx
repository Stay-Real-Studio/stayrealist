import { useTranslation } from '../../../i18n'
import { Footer } from '../../../../components/Footer'
import { getShops } from '../../../../composables/shop.functions'
import { Shop } from 'ui'
import { ShopDetailsContainer } from '../../../../components/ShopDetailsContainer'

export default async function Page({ params: { lng, shopId } }) {
  const { t } = await useTranslation(lng)
  const shops = await getShops()

  return (
    <>
      {shops.result.map((shop: Shop) => {
        console.log(shop)
        return <ShopDetailsContainer key={shop._id} shop={shop} />
      })}
      <Footer lng={lng} />
    </>
  )
}
