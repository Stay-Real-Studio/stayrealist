import { LanguageType } from '../../../types/i18n.types'
import dynamic from 'next/dynamic'

const SrMap = dynamic(() => import('../../../components/map'), { ssr: false })

export default function Page({
  params: { lng },
}: {
  params: { lng: LanguageType }
}) {
  return <SrMap />
}
