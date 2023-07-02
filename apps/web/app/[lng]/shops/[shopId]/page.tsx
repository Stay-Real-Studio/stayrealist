import { useTranslation } from '../../../i18n'
import { getShop } from '../../../../composables/shop.functions'
import { Shop } from 'ui'
import { Metadata, ResolvingMetadata } from 'next'
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
  const shop: Shop = await getShop(shopId)

  return (
    <div className="flex flex-col">
      <h1>{shop.displayName}详情:</h1>
      <div className="m-4">Phone number: To be confirmed</div>
      <div className="m-4">Shop email: To be confirmed</div>
      <div className="m-4">
        Share {shop.displayName}: <ShareButtons shop={shop} lng={lng} />
      </div>
    </div>
  )
}
