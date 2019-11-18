import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const usersMap = props => {
  return (
    <View style={styles.mapContainer}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map} />
    </View>
  )
}

const styles = new StyleSheet.create({
  mapContainer: {
    width: '100%',
    height: 200,
    marginTop: 20,
  },
  map: {
    width: '100%',
    height: '100%'
  }
})

export default usersMap