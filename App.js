//tutorial: https://www.youtube.com/watch?v=6ZnfsJ6mM5c

import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
//https://github.com/Agontuk/react-native-geolocation-service
import Geolocation from 'react-native-geolocation-service';

import FetcthLocation from './components/FetchLocation';

//use class instead const App: () => React$Node = () => {
class App extends React.Component {

  getUserLocationHandler = () => {
    alert('malac')
  }

  render() {
    return (
      <View style={styles.container}>
        <FetcthLocation onGetLocation={this.getUserLocationHandler} />
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
