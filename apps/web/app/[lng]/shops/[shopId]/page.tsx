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
          url: 'https://images.unsplash.com/photo-1540487482501-751a27ab6a7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
          width: 256,
          height: 256,
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
