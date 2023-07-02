import { useTranslation } from '../../i18n'
import { Faqs } from '../../../components/template/Faqs'

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'shop')

  return <Faqs lng={lng} className="" />
}
