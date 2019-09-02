import React, { Component } from 'react';
import { View, Text, Button, CheckBox, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function BookDetail(props) {
  return (
    <>
      <View style={styles.separator}>
        <Text style={styles.detail}>Book Detail</Text>
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
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <View style={{ flex: 1 }}>
            <Text>1. Hormone Balancing Program</Text>
          </View>
          <View>
            <Text>RP. 379.000</Text>
          </View>
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
            <Text style={styles.total}>RP. 379.000</Text>
          </View>

          <Text>Inclusive of Tax</Text>
          <View style={styles.button}>
            <Button title="Add Treatment" color="#696969" />
          </View>
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
          <Button title="Book Now" color="#696969" />
        </View>
      </View>
    </>
  );
}

export { BookDetail };

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
