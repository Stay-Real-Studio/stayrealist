import { useTranslation } from '../../app/i18n'
import { LanguageType } from '../../types/i18n.types'
import { CnLogo } from '../logos/CnLogo'
import { EnLogo } from '../logos/EnLogo'
import LanguageList from '../template/LanList'

export const Header = async ({ lng }) => {
  const { t } = await useTranslation(lng)
  const navigation = [
    { name: t('to-shops-page'), href: `/${lng}/shops` },
    { name: t('to-map-page'), href: `/${lng}/map` },
    // { name: t('contact-us'), href: '#' },
    { name: t('FAQ'), href: `/${lng}/faq` },
  ]
  return (
    <>
      <header className="flex w-full absolute top-8 justify-between items-center z-10">
        <span className="logo w-40">
          {lng === LanguageType.English ? (
            <EnLogo lng={lng} />
          ) : (
            <CnLogo lng={lng} />
          )}
        </span>

        <div className="hidden sm:flex sm:gap-x-2 md:gap-x-5 lg:gap-x-10 flex-1 justify-center items-center">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 "
            >
              {item.name}
            </a>
          ))}
        </div>
        <LanguageList className={'w-40'} lng={lng} />
      </header>
    </>
  )
}
