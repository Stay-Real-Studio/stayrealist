import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MapView from 'react-native-maps';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)

export default function Native() {
  return (
    <View style={styles.container}>
      <StyledView className="flex-1 items-center justify-center">
        <StyledText className="StyledText-slate-800">isLoading</StyledText>
      </StyledView>
      <MapView style={styles.map}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 36,
  },
  map: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
});
