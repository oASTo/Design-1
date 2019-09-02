import React, { Component } from 'react';
import { View, Text, Button, CheckBox, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {Item} from './Item'

function BookReceipt(props) {
  return (
    <>
      <View style={styles.separator}>
        <Text style={styles.detail}>NJGHSKI</Text>
        <Text style={styles.highlight}>Clinic</Text>
        <Text>Oriaklin Clinic Kedoya</Text>
      </View>

      <View style={styles.separator}>
        <Text style={styles.highlight}>Address</Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start'
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ textAlign: 'justify' }}>
              Jl apasaja, No.17 Kedoya Jakarta Barat DKI Jakarta
            </Text>
          </View>
          <View style={{ paddingTop: 15 }}>
            <Ionicons
              name="ios-navigate"
              size={32}
              color="black"
              alignSelf="justify"
            />
          </View>
        </View>
      </View>

      <View style={styles.separator}>
        <Text style={styles.highlight}>Check-in Date</Text>
        <Text>17 August 2019, 14.00</Text>
      </View>

      <View style={styles.separator}>
        <Text style={styles.highlight}>Treatment</Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <Item flex={1} />
          <Item flex={1}/>
          <Item flex={1}/>
          <Item flex={1}/>
          <Item flex={1}/>
          <Item flex={1}/>
          <Item flex={1}/>
          <Item flex={1}/>
          <Item flex={1}/>
          <Item flex={1}/>
          <Item flex={1}/>
          <Item flex={1}/>
          <Item flex={1}/>
          <Item flex={1}/>
          <Item flex={1}/>
          <Item flex={1}/>
          <Item flex={1}/>
          <Item flex={1}/>
          

        </View>

        <View style={styles.separator}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <Text style={{ paddingTop: 15 }}>Total Price</Text>
            <Text style={styles.total}>RP. 1.895.000</Text>
          </View>

          <Text>Inclusive of Tax</Text>

        </View>

        <Text style={styles.highlight}>Cancelation Policy</Text>
        <Text> {cancelPolicy} </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start'
          }}
        >
          <CheckBox />
          <Text style={{ marginTop: 5 }}>I Agree</Text>
        </View>

        <View style={styles.button}>
          <Button title="Cancel Book" color="#696969" />
        </View>
      </View>
    </>
  );
}

export { BookReceipt };

const styles = StyleSheet.create({
  separator: {
    borderBottomColor: '#F5F5F5',
    borderBottomWidth: 2,
    padding: 5
  },

  button: {
    margin: 10,
    backgroundColor: '#EFF0F1'
  },
  detail: {
    alignSelf: 'center',
    fontSize: 20,
    textDecorationLine: 'underline',
    fontWeight: 'bold'
  },
  highlight: {
    color: '#999999',
    fontSize: 18
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    borderTopWidth: 2
  }
});

const cancelPolicy = (
  <Text>
    We require 1 days cancellation notice prior to your scheduled date and time,
    otherwise you will get -5 Point, and will charge 5% for the latency
  </Text>
);
