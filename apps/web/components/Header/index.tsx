import { useTranslation } from '../../app/i18n'
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
      <header className="flex w-full absolute top-8 px-12 justify-between items-center z-10">
        <span className="logo w-40">{t('logo')}</span>
        <div className="hidden lg:flex lg:gap-x-12 flex flex-1 justify-center items-center">
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
        <LanguageList className={'w-40'} lng={lng}/>
      </header>
    </>
  )
}
