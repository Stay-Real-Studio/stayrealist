import { useTranslation } from '../../../i18n'
import { Footer } from '../../../../components/Footer'
import { getShops } from '../../../../composables/shop.functions'
import { Shop } from 'ui'
import { ShopDetailsContainer } from '../../../../components/shop/shop-details.client'
import { Metadata, ResolvingMetadata } from 'next'

type Props = { params: { lng: any; shopId: any }; searchParams: any }
export async function generateMetadata(
  { params: { lng } }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const shops = await getShops()
  const shop: Shop = shops.result[0]

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: shop.name,
    openGraph: {
      images: [
        'https://gfashion.com/cdn/shop/files/logo_220x@2x.png?v=1670594613',
        ...previousImages,
      ],
    },
  }
}

export default async function Page({ params: { lng } }: Props) {
  const { t } = await useTranslation(lng)
  const shops = await getShops()

  return (
    <>
      {shops.result.map((shop: Shop) => {
        return <ShopDetailsContainer key={shop._id} shop={shop} />
      })}
      <Footer lng={lng} />
    </>
  )
}
