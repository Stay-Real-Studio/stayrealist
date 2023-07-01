import { ReactNode } from 'react'
import { LanguageType } from '../../../types/i18n.types'
import { CnMapLogo } from '../../../components/logos/CnMapLogo'
import { EnMapLogo } from '../../../components/logos/EnMapLogo'

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
        <EnMapLogo lng={lng} />
      ) : (
        <CnMapLogo lng={lng} />
      )}
      {children}
    </>
  )
}
