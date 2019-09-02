import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, ScrollView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { CustomButton } from './src/Button';
import { Ionicons } from '@expo/vector-icons';
import { Process } from './src/Process';
import { BookReceipt } from './src/BookReceipt';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Treatment Name',
    headerLeft: <CustomButton title="<" />,
    headerRight: (
      <Ionicons
        style={{ marginRight: 15 }}
        name="md-menu"
        size={32}
        color="#999999"
      />
    ),

    headerStyle: {
      backgroundColor: '#E7E7E7'
    },
    //headerTintColor: '#0ff',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#999999'
    }
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          <ScrollView>
            <Process />
            <BookReceipt />
          </ScrollView>
        </View>
      </>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    headerLayoutPreset: 'center'
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
