import * as React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  Text,
} from 'react-native'
import { Shop } from '../types/shop.types'

export interface ShopDetailsProps {
  shop: Shop
  onClick?: (event: GestureResponderEvent) => void
}

export function ShopDetails({ shop, onClick }: ShopDetailsProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onClick}>
      <Text style={styles.text}>{shop.name}</Text>
    </TouchableOpacity>
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
