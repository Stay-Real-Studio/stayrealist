import { useTranslation } from '../../app/i18n'
import { LanguageType } from '../../types/i18n.types'
import { CnLogo } from '../logos/CnLogo'
import { EnLogo } from '../logos/EnLogo'
import LanguageList from '../template/LanList'
import LogoJPG from '../../assets/images/logo.jpg'
import Image from 'next/image'
import Link from 'next/link'

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
      <header className="flex w-full fixed justify-between py-8 top-0 items-center z-10 px-8 bg-white">
        <div className="w-16 sm:w-48 flex items-center">
          {lng === LanguageType.English ? (
            <EnLogo lng={lng} />
          ) : (
            <CnLogo lng={lng} />
          )}
        </div>

        <div className="sm:text-base text-sm hidden sm:flex sm:gap-x-2 md:gap-x-5 lg:gap-x-10 flex-1 justify-center items-center">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-semibold leading-6 text-gray-900 "
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex justify-center items-center w-40">
          <LanguageList lng={lng} />
        </div>
      </header>
    </>
  )
}
