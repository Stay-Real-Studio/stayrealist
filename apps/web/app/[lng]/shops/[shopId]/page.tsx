import { useTranslation } from '../../../i18n'
import { Footer } from '../../../../components/Footer'
import { getShops, getShop } from '../../../../composables/shop.functions'
import { Shop } from 'ui'
import { Metadata, ResolvingMetadata } from 'next'
import { ShopDetailsContainer } from '../../../../components/shop/shop-details-container.client'

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
          url: 'https://images.unsplash.com/photo-1540487482501-751a27ab6a7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
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
      return <ShopDetailsContainer key={shop._id} shop={shop} lng={lng} />
      <Footer lng={lng} />
    </>
  )
}
