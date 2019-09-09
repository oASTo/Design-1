import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, ScrollView } from 'react-native';

export default function Item(props) {
  return (
    <>
      <View style={[styles.boxshadowed]}>
        <Text>{props.title}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  boxshadowed: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderWidth: 1,

    shadowOpacity: 0.8,
    shadowColor: '#000',
    shadowRadius: 3,
    shadowOffset: { width: 5, height: 5 }
  }
});
