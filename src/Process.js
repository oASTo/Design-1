import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Process() {
  return (
    <>
      <View style={styles.processView}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.roundedborder}>1</Text>
          <Text>Book</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.roundedborderblack}>2</Text>
          <Text>Review</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.roundedborder}>3</Text>
          <Text>Issued</Text>
        </View>
      </View>
    </>
  );
}

export { Process };

const styles = StyleSheet.create({
  processView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    borderBottomColor: '#F5F5F5'
  },
  roundedborder: {
    width: 20,
    height: 20,
    borderWidth: 0.5,
    borderRadius: 50 / 2,
    textAlign: 'center',
    marginRight: 10
  },
  roundedborderblack: {
    width: 20,
    height: 20,
    borderWidth: 0.5,
    borderRadius: 50 / 2,
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white',
    marginRight: 10
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50 / 2,
    backgroundColor: 'red',
    justifyContent: 'flex-end'
  }
});
