'use client'

import { Shop } from 'ui'

import { WhatsappShareButton, WhatsappIcon } from 'next-share'
export const ShareButtons = ({ lng, shop }: { lng: any; shop: Shop }) => {
  return (
    <>
      <WhatsappShareButton
        url={`https://www.stayrealist.com/${lng}/shops/${shop._id}`}
        title={`${shop.name} is recommanded by Stayrealist`}
        separator=":: "
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </>
  )
}
