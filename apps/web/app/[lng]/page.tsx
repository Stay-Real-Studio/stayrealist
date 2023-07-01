import Link from 'next/link'
import { useTranslation } from '../i18n'
import { Footer } from '../../components/Footer'
import Image from 'next/image'
import iconLayerPNG from '../../assets/images/map/iconLyaer.png'
import shopListPNG from '../../assets/images/map/shopList.png'

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng)

  return (
    <div className="px-8 md:px-12 xl:px-16 py-[1200px]">
      <h1 className="text-lg font-medium mb-8">{t('title')}</h1>
      <div className="flex flex-wrap items-center">
        <Link href={`/${lng}/shops`} className="mr-4 ">
          <span>{t('to-shops-page')}</span>
          <Image
            src={shopListPNG}
            alt="map icon"
            className="rounded border border-solid border-slate-100 border xl:w-[600px] xl:h-[400px] md:w-[400px] md:h-[250px] w-[200px] h-[100px]"
          />
        </Link>
        <br />
        <Link href={`/${lng}/map`} className="mr-4">
          <span>{t('to-map-page')}</span>

          <Image
            src={iconLayerPNG}
            alt="map icon"
            className="rounded border border-solid border-slate-100 border xl:w-[600px] xl:h-[400px] md:w-[400px] md:h-[250px] w-[200px] h-[100px]"
          />
        </Link>{' '}
      </div>
      <Footer lng={lng} />
    </div>
  )
}
