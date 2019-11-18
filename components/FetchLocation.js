import React from 'react';
import { Button, StyleSheet } from 'react-native';

const fetchLocation = props => {
  return (
    <Button style={styles.button} title="Get Location" onPress={props.onGetLocation}></Button>
  )
}

const styles = new StyleSheet.create({
  button: {
    width: 20
  }
})

export default fetchLocation;