import React, { Component } from 'react';
import { View, Text} from 'react-native';
import {RoundButton} from './RoundButton'

function History(props){
    return (
        <>
        <View style={{flex:1, flexDirection:'row', justifyContent:'flex-start' }}>
            <View>
            <RoundButton title={props.title} />
            </View>
            <RoundButton title={props.title} />
            <RoundButton title={props.title} />
        </View>
        </>
    )
}

export {History}