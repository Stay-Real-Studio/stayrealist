import { useTranslation } from '../../../i18n'
import { getShop } from '../../../../composables/shop.functions'
import { Shop } from 'ui'
import { Metadata, ResolvingMetadata } from 'next'
import { ShareButtons } from '../../../../components/share-buttons.client'
import { builder } from '../../../../composables/sanity.functions'
import Image from 'next/image'

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
  console.log(shop, 'shop-detail')

  return (
    <div className="flex flex-col p-8">
      <h1>
        <span className="font-medium text-base sm:text-lg mr-2">
          {shop.displayName}
        </span>
        <span className="text-sm sm:text-base"> 详情:</span>
      </h1>
      <div className="m-4">
        <span className="text-sm sm:text-base font-medium mr-4">
          Phone number:
        </span>
        <span className="">To be confirmed</span>
      </div>
      <div className="m-4 flex items-center">
        <span className="text-sm sm:text-base font-medium mr-4">logo:</span>
        <span className="">
          {shop.logo ? (
            <Image
              src={builder.image(shop.logo).width(256).height(256).url()}
              width={1000}
              height={1000}
              alt="map icon"
              className="object-cover rounded-full w-48 h-48  border-solid border-slate-100 border"
            />
          ) : (
            <></>
          )}
        </span>
      </div>
      <div className="m-4">
        <span className="text-sm sm:text-base font-medium mr-4">
          Shop email:
        </span>
        <span className="">To be confirmed</span>
      </div>

      <div className="m-4 sm:flex-center sm:flex-wrap flex-column">
        <div className="">
          <span className="text-sm sm:text-base font-medium ">Share</span>
          <span className="mx-4">{shop.displayName}: </span>
        </div>

        <ShareButtons shop={shop} lng={lng} />
      </div>
    </div>
  )
}
