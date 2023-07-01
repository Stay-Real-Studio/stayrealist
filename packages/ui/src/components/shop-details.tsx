import * as React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import { Shop } from '../types/shop.types'

export interface ShopDetailsProps {
  shop: Shop
  lng: any
}

export function ShopDetails({ shop }: ShopDetailsProps) {
  console.log(shop)
  return (
    <>
      <Text style={styles.text}>{shop.name}</Text>
      <Text style={styles.text}>Share {shop.name}</Text>

      {/* <TouchableOpacity style={styles.button} onPress={onShareClick}>
      </TouchableOpacity> */}
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    maxWidth: 200,
    textAlign: 'center',
    borderRadius: 10,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: '15px',
    backgroundColor: '#2f80ed',
  },
  text: {
    color: 'white',
  },
})
