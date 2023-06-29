import Link from 'next/link'
import { useTranslation } from '../../../i18n'
import { Footer } from '../../../../components/Footer'
import { getShops } from '../../../../composables/shop.functions'
import { Shop } from 'ui'

export default async function Page({ params: { lng, shopId } }) {
  const { t } = await useTranslation(lng)
  const shops = await getShops()

  return (
    <>
      {shops.result.map((shop: Shop) => {
        return <div key={shop._id}>{shop.name}</div>
      })}
      <Footer lng={lng} />
    </>
  )
}
