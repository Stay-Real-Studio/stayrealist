'use client'

import { Shop, ShopDetails } from 'ui'

import { WhatsappShareButton, WhatsappIcon } from 'next-share'
export const ShopDetailsContainer = ({ shop }: { shop: Shop }) => {
  return (
    <>
      <WhatsappShareButton
        url={
          'https://www.stayrealist.com/zh-CN/shops/3e30d82a-2111-4e51-bc2e-192569caafb6'
        }
        title={`${shop.name} is good`}
        separator=":: "
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <ShopDetails
        key={shop._id}
        shop={shop}
        onShareClick={() => {
          console.log('clicked!!!')
        }}
      />
    </>
  )
}
