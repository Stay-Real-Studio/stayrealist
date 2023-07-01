import { useTranslation } from '../../../i18n'
import { Footer } from '../../../../components/Footer'
import { getShop } from '../../../../composables/shop.functions'
import { Shop } from 'ui'
import { Metadata, ResolvingMetadata } from 'next'
import { ShopDetails } from 'ui'
import { ShareButtons } from '../../../../components/share-buttons.client'
import { builder } from '../../../../composables/sanity.functions'

type Props = { params: { lng: any; shopId: any }; searchParams: any }
export async function generateMetadata(
  { params: { lng, shopId } }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const shop: Shop = await getShop(shopId)

  return {
    title: `${shop.displayName}`,
    description: `${shop.displayName}'s description.`,
    openGraph: {
      images: [
        {
          url: builder.image(shop.logo).width(256).height(256).url(),
          width: 256,
          height: 256,
        },
      ],
      locale: lng,
    },
  }
}

export default async function Page({ params: { lng, shopId } }: Props) {
  const { t } = await useTranslation(lng)
  const shop = await getShop(shopId)

  return (
    <>
      <h1>{t('title')}</h1>
      <ShopDetails key={shop._id} shop={shop} lng={lng} />
      <ShareButtons shop={shop} lng={lng} />
      <Footer lng={lng} />
    </>
  )
}
