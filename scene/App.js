/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from'react-navigation';

import HomeScene from './homeScene'; 
import LoginScene from './loginScene';
import RegisterScene from './registerScene';

const SimpleApp = StackNavigator({

  Home:{
    screen: HomeScene,
    navigationOptions:{
      header: null,
    }
  },
  Register:{
    screen:RegisterScene,
    navigationOptions:{
      headerTitle:'Regist',
    }
  },
   Login: {
    screen: LoginScene,
    navigationOptions: {
      headerTitle: 'Login',
    }
  }
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}
