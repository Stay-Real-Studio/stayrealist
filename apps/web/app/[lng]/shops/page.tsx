import Link from 'next/link'
import { useTranslation } from '../../i18n'
import { getShops, getSanityImgURL } from '../../../composables/shop.functions'
// import Image from 'next/image'

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'shop')
  const shops = await getShops()

  return (
    <div className="flex flex-col p-8 md:p-12 xl:p-16">
      <div className="mb-8">
        <span className="mr-4 font-medium text-lg ">{t('title')}</span>
        <Link href={`/${lng}`} className="text-sm">
          {t('back-to-home')}
        </Link>
      </div>
      <div className="flex flex-wrap items-center ">
        {shops.map((shop) => {
          return (
            <div key={shop._id} className="mr-4 mb-4 ">
              <Link href={`/${lng}/shops/${shop._id}`}>
                <span>Go to {shop.name}</span>
                <img
                  src={getSanityImgURL(shop.logoUrl.asset._ref)}
                  width={100}
                  height={100}
                  alt="map icon"
                  className="rounded xl:w-[400px] xl:h-[320px] sm:w-[300px] sm:h-[260px] w-[200px] h-[160px]"
                />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
