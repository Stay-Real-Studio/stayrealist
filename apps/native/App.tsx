import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MapView from 'react-native-maps';

export default function Native() {
  return (
    <View>
      <View >
        <Text>isLoading</Text>
      </View>
      
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

      <StatusBar />
    </View>
  );
}
