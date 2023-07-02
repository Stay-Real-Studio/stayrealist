'use client'

import { Shop } from 'ui'

import {
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WeiboIcon,
  WeiboShareButton,
  EmailIcon,
  EmailShareButton,
} from 'next-share'
export const ShareButtons = ({ lng, shop }: { lng: any; shop: Shop }) => {
  const url = `https://www.stayrealist.com/${lng}/shops/${shop._id}`
  const title = `${shop.name} is recommanded by Stayrealist`
  return (
    <>
      <WhatsappShareButton url={url} title={title} separator=":: ">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <EmailShareButton url={url} subject={title} body="body">
        <EmailIcon size={32} round />
      </EmailShareButton>
      <RedditShareButton url={url} title={title}>
        <RedditIcon size={32} round />
      </RedditShareButton>
      <TelegramShareButton url={url} title={title}>
        <TelegramIcon size={32} round />
      </TelegramShareButton>
      <WeiboShareButton
        url={url}
        title={title}
        // image={`${String(window.location)}/${example - image}`}
      >
        <WeiboIcon size={32} round />
      </WeiboShareButton>
    </>
  )
}
