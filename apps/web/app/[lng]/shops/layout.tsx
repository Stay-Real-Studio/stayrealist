import { ReactNode } from 'react'
import { LanguageType } from '../../../types/i18n.types'
import { CnLogo } from '../../../components/logos/CnLogo'
import { EnLogo } from '../../../components/logos/EnLogo'

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
    <>
      {lng === LanguageType.English ? (
        <EnLogo lng={lng} />
      ) : (
        <CnLogo lng={lng} />
      )}
      {children}
    </>
  )
}
