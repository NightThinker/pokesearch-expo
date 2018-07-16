import React from 'react';
import { Platform, Text, View, ImageBackground } from 'react-native';
import { Button } from 'native-base';

const myBackgroud = require('./assets/landing.jpg')

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={myBackgroud } style={{width: '100%', height: '100%'}} >
          <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>Welcome to PokeSearch</Text>
            <Button 
              block={true}
              style={styles.buttonStyle}
              onPress={() => {}}
            >
              <Text style={styles.buttonText}>Start Searching...</Text>
            </Button>
          </View>
        </ImageBackground>
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
