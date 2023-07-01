// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'shop',
  type: 'document',
  title: 'Shop',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'displayName',
      type: 'string',
      title: 'Display Name',
    },
    {
      title: 'Shop Location',
      name: 'location',
      type: 'geopoint',
    },
    {
      name: 'logoUrl',
      title: 'Shop Logo URL',
      type: 'image',
    },
    {
      title: 'Shop Logo',
      name: 'logo',
      type: 'image',
    },
    {
      title: 'Shop Background Image',
      name: 'backgroundImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Accept Coins',
      name: 'acceptCoins',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'coin'}],
        },
      ],
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
  ],
}
