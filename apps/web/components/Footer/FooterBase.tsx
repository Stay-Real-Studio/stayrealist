import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { LanguageType } from '../../types/i18n.types'
import { useRouter } from 'next/router';

export const FooterBase = ({ t, lng }: { t: any; lng: LanguageType }) => {
  return (
    <footer className="md:text-base md:right-6 xl:right-8 xl:text-lg 2xl:text-2xl sm:top-4 md:p-4 text-sm xl:p-6 xl:top-6   z-10 absolute top-4 right-4 p-4">
      <Link href={`/${lng}`} className="mr-3">
        {t('back-to-home')}
      </Link>
      <Trans i18nKey="languageSwitcher" t={t}>
        {lng == LanguageType.English ? (
          <Link href={`/${LanguageType.SimplifiedChinese}`}>中文版本</Link>
        ) : (
          <Link href={`/${LanguageType.English}`}>Switch to English</Link>
        )}
      </Trans>
    </footer>
  )
}
