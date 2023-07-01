import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { SANIRY_PROJECT_ID } from '../constants/coin.contants'

export const client = createClient({
  projectId: SANIRY_PROJECT_ID,
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

export const builder = imageUrlBuilder(client)
