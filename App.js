import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, ScrollView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BookIssued from './src/BookIssued';
import SearchScreen from './src/SearchScreen';
import BuyTreatmentScreen from './Buy/index'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});


const AppNavigator = createStackNavigator(
  {
    BuyTreatment : BuyTreatmentScreen,
    Search : SearchScreen,
    BookIssued: BookIssued,
  },
  {
    headerLayoutPreset: 'center'
  },
  {
    initialRouteName: 'BuyTreatment'
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

