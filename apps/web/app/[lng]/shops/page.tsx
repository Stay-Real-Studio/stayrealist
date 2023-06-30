import Link from 'next/link'
import { useTranslation } from '../../i18n'
import { getShops } from '../../../composables/shop.functions'

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'shops')
  const shops = await getShops()

  return (
    <div className="flex flex-col">
      <h1>{t('title')}</h1>
      {shops.result.map((shop) => {
        return (
          <div key={shop._id}>
            <Link href={`/${lng}/shops/${shop._id}`}>Go to {shop.name}</Link>
          </div>
        )
      })}

      <Link href={`/${lng}`}>{t('back-to-home')}</Link>
    </div>
  )
}
