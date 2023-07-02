import Link from 'next/link'
import { getLogoClassName } from '../../composables/logo.functions'

export const EnLogo = ({ lng }: { lng: any }) => {
  return (
    <Link href={`/${lng}/`} className={getLogoClassName()}>
      Stay Real List
    </Link>
  )
}
