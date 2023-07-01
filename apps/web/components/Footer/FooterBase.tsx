import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages } from '../../app/i18n/settings'

export const FooterBase = ({ t, lng }) => {
  return (
    <footer className="md:text-base md:right-6 xl:right-8 xl:text-lg 2xl:text-2xl sm:top-4 md:p-4 text-sm xl:p-6 xl:top-6   z-10 absolute top-4 right-4 p-4">
      <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{lng}</strong> to:{' '}
      </Trans>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && ' or '}
              <Link href={`/${l}`}>{l}</Link>
            </span>
          )
        })}
    </footer>
  )
}
