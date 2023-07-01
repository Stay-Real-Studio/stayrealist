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
  ],
}
