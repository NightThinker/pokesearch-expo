import React from 'react';
import { Platform, View } from 'react-native';

import Landing from './src/Landing';
import Search from './src/Search'



export default class App extends React.Component {

  state = {
    currentScreen: 'search'
  }

  switchScreen = (currentScreen) => {
    this.setState({currentScreen})
  }

  renderScreen = () => {
    if (this.state.currentScreen === 'landing') {
      return (
        <Landing switchScreen={this.switchScreen}/>
      )
    } else if (this.state.currentScreen === 'search') {
      return (
        <Search />
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderScreen()}
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
