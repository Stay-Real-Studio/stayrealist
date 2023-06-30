'use client'

import { Shop, ShopDetails } from 'ui'

import { WhatsappShareButton, WhatsappIcon } from 'next-share'
export const ShopDetailsContainer = ({
  lng,
  shop,
}: {
  lng: any
  shop: Shop
}) => {
  return (
    <>
      <WhatsappShareButton
        url={`https://www.stayrealist.com/${lng}/shops/${shop._id}`}
        title={`${shop.name} is recommanded by Stayrealist`}
        separator=":: "
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <ShopDetails key={shop._id} shop={shop} />
    </>
  )
}
