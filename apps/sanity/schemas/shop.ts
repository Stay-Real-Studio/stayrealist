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
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'phoneNumber',
      type: 'string',
      title: 'Phone number',
    },
    {
      name: 'website',
      type: 'string',
      title: 'Website',
    },
    {
      title: 'Shop Location',
      name: 'location',
      type: 'geopoint',
    },
    {
      name: 'logo',
      title: 'Shop Logo Image',
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
