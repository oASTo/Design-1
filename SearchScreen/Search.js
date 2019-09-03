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
        </>

    );
}

export {Search}


const styles = StyleSheet.create({
    search:{
        borderBottomWidth:2,
         borderColor:'#999999', 
         paddingBottom:10,
         marginBottom:5,
    },
}
)