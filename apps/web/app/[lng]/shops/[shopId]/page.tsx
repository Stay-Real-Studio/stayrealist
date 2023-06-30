import { useTranslation } from '../../../i18n'
import { Footer } from '../../../../components/Footer'
import { getShops } from '../../../../composables/shop.functions'
import { Shop } from 'ui'
import { Metadata, ResolvingMetadata } from 'next'
import { ShopDetails } from 'ui'
import { WhatsappIcon, WhatsappShareButton } from 'next-share'
import { ShopDetailsContainer } from '../../../../components/shop/shop-details-container.client'

type Props = { params: { lng: any; shopId: any }; searchParams: any }
export async function generateMetadata(
  { params: { lng } }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const shops = await getShops()
  const shop: Shop = shops.result[0]

  return {
    title: `${shop.displayName}`,
    description: `${shop.displayName}'s description.`,
    openGraph: {
      images: [
        {
          url: 'https://nextjs.org/og.png',
          width: 800,
          height: 600,
        },
      ],
      locale: lng,
    },
  }
}

export default async function Page({ params: { lng } }: Props) {
  const { t } = await useTranslation(lng)
  const shops = await getShops()
  const shop: Shop = shops.result[0]

  return (
    <>
      {shops.result.map((shop: Shop) => {
        return <ShopDetailsContainer key={shop._id} shop={shop} lng={lng} />
      })}
      <Footer lng={lng} />
    </>
  )
}
