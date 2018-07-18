import React from 'react';
import { Platform, View } from 'react-native';

import Landing from './src/Landing';



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Landing />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.OS === 'android' ? 24 : 40,
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 30,
    color: 'blue',
    alignItems: 'center',
  },
  buttonStyle: {
    margin: 10,
  },
  buttonText: {
    color: 'white'
  }
};
