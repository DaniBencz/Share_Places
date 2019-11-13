//https://www.youtube.com/watch?v=6ZnfsJ6mM5c

import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import FetcthLocation from './components/FetchLocation';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <FetcthLocation onGetLocation={() => alert('malac')} />
    </View>
  );
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
