import { useTranslation } from '../../../i18n'
import { Footer } from '../../../../components/Footer'
import { getShop } from '../../../../composables/shop.functions'
import { Shop } from 'ui'
import { Metadata, ResolvingMetadata } from 'next'
import { WhatsappShareButton, WhatsappIcon } from 'next-share'
import { ShopDetails } from 'ui'
import { ShareButtons } from '../../../../components/share-buttons.client'

type Props = { params: { lng: any; shopId: any }; searchParams: any }
export async function generateMetadata(
  { params: { lng, shopId } }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const shopResp = await getShop(shopId)
  const shop: Shop = shopResp.result[0]

  return {
    title: `${shop.displayName}`,
    description: `${shop.displayName}'s description.`,
    openGraph: {
      images: [
        {
          url: `https://cdn.sanity.io/images/kfoyr571/production/${shop.logo.asset._ref}`,
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
  const shopResp = await getShop(shopId)
  const shop: Shop = shopResp.result[0]

  return (
    <>
      <ShopDetails key={shop._id} shop={shop} lng={lng} />
      <ShareButtons shop={shop} lng={lng} />
      <Footer lng={lng} />
    </>
  )
}
