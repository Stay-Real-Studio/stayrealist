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
  return <>{children}</>
}
