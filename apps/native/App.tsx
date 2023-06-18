import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MapView from 'react-native-maps';

export default function Native() {
  return (
    <View className='flex items-center justify-center'>
      <View className="flex-1">
        <Text className="Text-slate-800">isLoading</Text>
      </View>
      
      <MapView
        className="h-full w-full"
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
}
