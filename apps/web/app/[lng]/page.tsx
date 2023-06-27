import Link from 'next/link'
import { useTranslation } from '../i18n'
import { getCoins } from '../../composables/coin.functions'
import { Footer } from './components/Footer'
import { LanguageType } from '../../types/i18n.types'
import { EnLogo } from './components/EnLogo'
import { CnLogo } from './components/CnLogo'

export default async function Page({ params: { lng } }) {
    const { t } = await useTranslation(lng)
    const coins = await getCoins()

    return (
        <>
            {lng === LanguageType.English ? <EnLogo /> : <CnLogo />}
            <h1>{t('title')}</h1>
            {coins.result.map((coin) => {
                return <div key={coin._rev}>{coin.name}</div>
            })}
            <Link href={`/${lng}/second-page`}>{t('to-second-page')}</Link>
            <br />
            <Link href={`/${lng}/client-page`}>{t('to-map-page')}</Link>
            <Footer lng={lng} />
        </>
    )
}
