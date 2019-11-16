//tutorial: https://www.youtube.com/watch?v=6ZnfsJ6mM5c
//maps dependency  https://github.com/react-native-community/react-native-maps/blob/master/docs/installation.md
//maps dependency issue: https://github.com/react-native-community/react-native-maps/issues/3108

import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
//https://github.com/Agontuk/react-native-geolocation-service
import Geolocation from 'react-native-geolocation-service';

import requestLocationPermission from './services/LocationPermission'
import FetcthLocation from './components/FetchLocation';
import UsersMap from './components/UsersMap';

//use class instead const App: () => React$Node = () => {
class App extends React.Component {
  componentDidMount() { requestLocationPermission(); }

  getUserLocationHandler = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
      },
      (error) => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FetcthLocation onGetLocation={this.getUserLocationHandler} />
        <UsersMap />
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
