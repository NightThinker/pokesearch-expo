import React from 'react';
import { Platform, Text, View } from 'react-native';
import { Button } from 'native-base';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button><Text>Hello</Text></Button>
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
};
