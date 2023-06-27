import { dir } from 'i18next'
import Providers from '../../components/providers'
import { LanguageType } from '../../types/i18n.types'
import { CnLogo } from './components/CnLogo'
import { EnLogo } from './components/EnLogo'

const languages = ['en', 'zh-CN']

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        {lng === LanguageType.English ? <EnLogo /> : <CnLogo />}
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
