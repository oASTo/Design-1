import React, { Component } from 'react';
import { View, Text, Button, CheckBox, StyleSheet } from 'react-native';
import {RoundButton} from './RoundButton';
import { Ionicons } from '@expo/vector-icons';

function Search(){
    return (
        <>
        <View style={styles.search}>
        <RoundButton title="Find Treatment, products" fontSize={24} />
        <View style={{flex:1, flexDirection:"row", justifyContent:"space-between"}}>
        <Text>Your Location</Text>
        <Ionicons
          style={{ marginRight: 15 }}
          name="md-locate"
          size={32}
          color="#999999"
        />
        </View>
        
        <Text style={{fontWeight:'bold', paddingBottom:15}}>Legok</Text>

        </View>

        </>

    );
}

export {Search}


const styles = StyleSheet.create({
    search:{
        borderBottomWidth:2,
         borderColor:'#999999', 
         marginBottom:5
    },
}
)