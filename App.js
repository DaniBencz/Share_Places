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

  state = {
    userLocation: null
  }

  componentDidMount() { requestLocationPermission(); }

  getUserLocationHandler = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          userLocation: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }
        })
        fetch('https://shareplaces-5ae08.firebaseio.com/places.json', {
          method: 'POST',
          body: JSON.stringify({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
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
        <UsersMap userLocation={this.state.userLocation} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    //padding: 8,
  },
});

export default App;
