import { dir } from 'i18next'
import Providers from '../../components/providers'
import { LanguageType } from '../../types/i18n.types'
import { CnLogo } from '../../components/logos/CnLogo'
import { EnLogo } from '../../components/logos/EnLogo'
import { ReactNode } from 'react'

const languages = ['en', 'zh-CN']

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: ReactNode
  params: { lng: any }
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        {lng === LanguageType.English ? (
          <EnLogo lng={lng} />
        ) : (
          <CnLogo lng={lng} />
        )}
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
