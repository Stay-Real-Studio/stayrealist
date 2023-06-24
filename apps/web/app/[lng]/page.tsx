import Link from 'next/link';
import { useTranslation } from '../i18n';
import { Footer } from '../../components/ui';
import { getCoins } from '../../composables/coin.functions';
 
export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  const coins = await getCoins()

  console.log(coins)
  console.log(lng)
  
  return (
    <>
      <h1>{t('title')}</h1>
      <Link href={`/${lng}/second-page`}>{t('to-second-page')}</Link>
      <Footer lng={lng} />
    </>
  );
}
