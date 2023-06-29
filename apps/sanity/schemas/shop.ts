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
      title: 'Shop Location',
      name: 'location',
      type: 'geopoint'
    }
  ],
}
