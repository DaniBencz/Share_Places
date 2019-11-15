//tutorial: https://www.youtube.com/watch?v=6ZnfsJ6mM5c

import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
//https://github.com/Agontuk/react-native-geolocation-service
import Geolocation from 'react-native-geolocation-service';

import { PermissionsAndroid } from 'react-native';

import FetcthLocation from './components/FetchLocation';

//use class instead const App: () => React$Node = () => {
class App extends React.Component {

  getUserLocationHandler = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }

  async requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        alert('got it')
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      alert('nope')
      console.warn(err);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FetcthLocation onGetLocation={this.requestCameraPermission} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

export default App;
