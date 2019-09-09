import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ScrollView,
  Button,
  TouchableOpacity
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
export default function PlusMinus(props) {
  return (
    <>
      <TouchableWithoutFeedback onPress={props.onPress}>
        <View
          style={{
            backgroundColor: '#FD7F06',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
            height: 30,
            width: 30
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 32,
              alignSelf: 'auto',
              justifyContent: 'center',
              paddingBottom: 2
            }}
          >
            {props.title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
