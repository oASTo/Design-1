import React, { Component } from 'react';
import { View, Text, Button, CheckBox, StyleSheet } from 'react-native';
import {RoundButton} from './RoundButton';
import { Ionicons } from '@expo/vector-icons';

function Search(){
    return (
        <>
        <RoundButton title="Find Treatment, products" fontSize={24} />
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <Text>Your Location</Text>
        <Ionicons
          style={{ marginRight: 15 }}
          name="md-locate"
          size={32}
          color="#999999"
        />
        </View>
        <Text style={styles.search}>Legok</Text>
        <View style={{borderWidth:1, borderColor:'#999999'} }/>
        </>

    );
}

export {Search}


const styles = StyleSheet.create({
    search:{
         paddingBottom:10,
         marginBottom:5,
         fontWeight:'bold',
    },
}
)