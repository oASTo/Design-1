import React, { Component } from 'react';
import { View, Text, Button, CheckBox, StyleSheet } from 'react-native';

function Item(props) {
  return (
    <>
            <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
      <View style={props.flex}>
        <Text>1. Hormone Balancing Program</Text>
      </View>
      <View>
        <Text>RP. 379.000</Text>
      </View>
      </View>
    </>
  );
}
export { Item };
