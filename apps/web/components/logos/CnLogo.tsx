import Link from 'next/link'
import { getLogoClassName } from '../../composables/logo.functions'

export const CnLogo = ({ lng }: { lng: any }) => {
  return (
    <Link href={`/${lng}/`} className={getLogoClassName()}>
      至真列表
    </Link>
  )
}
