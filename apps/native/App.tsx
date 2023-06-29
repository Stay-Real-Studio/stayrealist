import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { ApplicationProvider, Layout } from '@ui-kitten/components'
import * as eva from '@eva-design/eva'

export default function Native() {
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
            <Text>HOME</Text>
          </View>
        </Layout>
      </ApplicationProvider>
      <StatusBar />
    </>
  )
}
