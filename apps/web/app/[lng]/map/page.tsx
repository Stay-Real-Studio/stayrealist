'use client'

import Link from 'next/link'
import { useTranslation } from '../../i18n/client'
import { Footer } from '../../../components/Footer/client'
import { LanguageType } from '../../../types/i18n.types'
import SrMap from '../../../components/map'
import { Merchant } from '../components/Merchant'

export default function Page({
  params: { lng },
}: {
  params: { lng: LanguageType }
}) {
  const { t } = useTranslation(lng, 'client-page')
  return (
    <>
      <div className="z-10">
        <h1 className="text-3xl font-bold">{t('title')}</h1>
        <Link href={`/${lng}`}>
          <button type="button" className="text-3xl font-bold underline">
            {t('back-to-home')}
          </button>
        </Link>
      </div>
      <SrMap />

      <Footer lng={lng} />
      {/* <div className="z-10 bg-lime-50 p-4 top-6 right-6">
        <Merchant lng={lng} />
      </div> */}
    </>
  )
}
