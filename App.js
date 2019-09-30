import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './components/Login';
import Register from './components/Register';

import React, {Component} from 'react';
const AppNavigator = createStackNavigator({
  Login: {screen: Login, navigationOptions: () => ({
    header: null,  
  })},
Register: {screen: Register, navigationOptions: () => ({
    header: null,  
  })},

});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
