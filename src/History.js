import React, { Component } from 'react';
import { View, Text} from 'react-native';
import {RoundButton} from './RoundButton'

function History(){
    return (
        <>
        <Text style={{paddingBottom:15, fontSize:16}}>Your History</Text>
        <View style={{flex:1, flexDirection:'row', justifyContent:'flex-start' }}>
            <View>
            <RoundButton title="hair serum" />
            </View>
            <RoundButton title="Facial" />
            <RoundButton title="Slimming" />
        </View>
        <RoundButton title="Diet"/>
        </>

    );
}

export {History}