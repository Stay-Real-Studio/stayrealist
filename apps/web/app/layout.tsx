// These styles apply to every route in the application
import { Analytics } from '@vercel/analytics/react'

import '../styles/global.css'

export const metadata = {
  title: {
    template: '%s - Stayrealist',
    default: 'Stayrealist', // a default is required when creating a template
  },
  description: 'Stayrealist',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Analytics />
    </>
  )
}
