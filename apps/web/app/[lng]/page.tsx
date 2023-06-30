import Link from 'next/link'
import { useTranslation } from '../i18n'
import { Footer } from '../../components/Footer'

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng)

  return (
    <div className="flex flex-col">
      <h1>{t('title')}</h1>
      <Link href={`/${lng}/shops`}>{t('to-shops-page')}</Link>
      <br />
      <Link href={`/${lng}/map`}>{t('to-map-page')}</Link>
      <Footer lng={lng} />
    </div>
  )
}
