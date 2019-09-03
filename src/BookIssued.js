import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, ScrollView } from 'react-native';
import { CustomButton } from './Button';
import { Ionicons } from '@expo/vector-icons';
import { Process } from './Process';
import { BookReceipt } from './BookReceipt';

export default class BookIssued extends Component {
  static navigationOptions = {
    headerTitle: 'Search',
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
