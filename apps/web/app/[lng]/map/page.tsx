'use client'

import { Footer } from '../../../components/Footer/client'
import { LanguageType } from '../../../types/i18n.types'
import SrMap from '../../../components/map'

export default function Page({
  params: { lng },
}: {
  params: { lng: LanguageType }
}) {
  return (
    <>
      <SrMap />
      <Footer lng={lng} />
    </>
  )
}
