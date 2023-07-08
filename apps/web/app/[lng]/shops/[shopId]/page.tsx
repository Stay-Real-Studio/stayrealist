import { useTranslation } from '../../../i18n'
import {
  getShop,
  getCoins,
  AcceptCoins,
  getCoinCls,
} from '../../../../composables/shop.functions'
import { COIN_MAP } from '../../../../constants/coin.contants'
import { Shop, Coin } from 'ui'
import { Metadata, ResolvingMetadata } from 'next'
import { ShareButtons } from '../../../../components/share-buttons.client'
import { builder } from '../../../../composables/sanity.functions'
import Image from 'next/image'
import Link from 'next/link'
import toWebsitePNG from '../../../../assets/images/toWebsite.png'

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
  const coinsList: Coin[] = await getCoins()

  return (
    <>
      <div>
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            <span className="font-medium text-base sm:text-lg mr-2">
              {shop.displayName}
            </span>
            <span className="text-sm sm:text-base"> 详情:</span>
          </h3>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                logo:
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
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
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Accept coins:
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {shop?.coins?.length ? (
                  AcceptCoins(coinsList).map((coin: string, i: number) => (
                    <span
                      key={i}
                      className={`${getCoinCls(
                        coin,
                        shop?.coins
                      )} mr-4 px-2 leading-6 text-center inline-block hover:text-amber-500 hover:bg-lime-200 rounded-full`}
                      title={COIN_MAP[coin]}
                    >
                      {coin}
                    </span>
                  ))
                ) : (
                  <span className="">To be confirmed</span>
                )}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Shop email:
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {shop.email ? (
                  shop.email
                ) : (
                  <span className="">To be confirmed</span>
                )}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                phone number:
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {shop.phoneNumber ? (
                  shop.phoneNumber
                ) : (
                  <span className="">To be confirmed</span>
                )}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Website:
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex  items-center">
                {shop.website ? (
                  <Link href={shop.website} target="_blank">
                    {shop.website}
                  </Link>
                ) : (
                  <span className="">To be confirmed</span>
                )}
                <Link href={shop.website ? shop.website : ''} target="_blank">
                  <Image
                    src={toWebsitePNG}
                    width={24}
                    height={24}
                    alt="toWebsite"
                    className="ml-2 w-4 h-4 cursor-pointer"
                  ></Image>
                </Link>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                <span className="text-sm sm:text-base font-medium ">Share</span>
                <span className="mx-4">{shop.displayName}: </span>
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <ShareButtons shop={shop} lng={lng} />
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  )
}
