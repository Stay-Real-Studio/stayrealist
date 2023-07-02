import { ReactNode } from 'react'

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: ReactNode
  params: { lng: any }
}) {
  return <>{children}</>
}
