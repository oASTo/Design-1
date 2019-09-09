import React, { Component } from 'react';
import Item from './Item';
import { Ionicons } from '@expo/vector-icons';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ScrollView,
  Button
} from 'react-native';

export default function Clinics(props) {
  return (
    <>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Item title={'Clinic'} />
      <Text>{props.title}</Text>
      <Text></Text>
      <Ionicons
        style={{ marginLeft: 15 }}
        name="ios-arrow-forward"
        size={32}
        color="#999999"
      />
    </View>
    <View style={{
      borderWidth: 1,
      marginVertical: 5,
    }} />
    </>
  );
}
