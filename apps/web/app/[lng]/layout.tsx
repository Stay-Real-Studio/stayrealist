import { dir } from 'i18next'
import Providers from '../../components/providers'
import { ReactNode } from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

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
        <Providers>
          <Header lng={lng} />
          {children}
        </Providers>
        {/* <Footer lng={lng} /> */}
      </body>
    </html>
  )
}
