'use client';

import { FooterBase } from './FooterBase';
import { useTranslation } from '../../../i18n/client';

export const Footer = ({ lng }) => {
  console.log({
    where: 'client footer',
    lng
  })
  const { t } = useTranslation(lng, 'footer');
  return <FooterBase t={t} lng={lng} />;
};
