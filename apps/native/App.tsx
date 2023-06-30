import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { ApplicationProvider, Layout } from '@ui-kitten/components'
import * as eva from '@eva-design/eva'
import { Shop, ShopDetails } from 'ui'

export default function Native() {
  const shop: Shop = {
    _id: 'abc',
    name: 'Test Shop',
  }
  return (
    <>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Layout
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <View>
            <View>
              <Text>isLoading</Text>
            </View>
            <ShopDetails shop={shop} />
            <Text>HOME</Text>
          </View>
        </Layout>
      </ApplicationProvider>
      <StatusBar />
    </>
  )
}
