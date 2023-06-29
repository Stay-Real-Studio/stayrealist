import Link from 'next/link'
import { useTranslation } from '../i18n'
import { getCoins } from '../../composables/coin.functions'
import { Footer } from '../../components/Footer'
import { getShops } from '../../composables/shop.functions'

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng)
  const shops = await getShops()

  return (
    <>
      <h1>{t('title')}</h1>
      {shops.result.map((shop) => {
        return (
          <Link key={shop._id} href={`/${lng}/shops/${shop._id}`}>
            Go to {shop.name}
          </Link>
        )
      })}
      <Link href={`/${lng}/shop-list`}>{t('to-shop-list')}</Link>
      <br />
      <Link href={`/${lng}/map`}>{t('to-map-page')}</Link>
      <Footer lng={lng} />
    </>
  )
}
