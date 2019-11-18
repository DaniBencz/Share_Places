import React from 'react';
import { Button, StyleSheet } from 'react-native';

const fetchLocation = props => {
  return (
    <Button title="Get Location" onPress={props.onGetLocation}></Button>
  )
}


export default fetchLocation;