'use client'

import { FooterBase } from './FooterBase'
import { useTranslation } from '../../app/i18n/client'

export const Footer = ({ lng }: { lng: any }) => {
  const { t } = useTranslation(lng)
  return <FooterBase t={t} lng={lng} />
}
