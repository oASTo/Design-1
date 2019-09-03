
import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, ScrollView } from 'react-native';
import { CustomButton } from './Button';
import { Ionicons } from '@expo/vector-icons';
import {Search} from './Search';
import {History} from './History';

export default class SearchScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            categories:[
                    {id:1,title:'hair serum'},
                    {id:2,title:'Diet'},
                    {id:3,title:'Slimming'},
                    {id:4,title:'Facial'},
                    {id:5,title:'Facial'},
                    {id:6,title:'Faciaal'},
                    {id:7,title:'Botol'},
                    {id:8,title:'Botox'},
                    {id:9,title:'Susuk'},
                    {id:10,title:'hair serum'},
                    {id:11,title:'Diet'},
                    {id:12,title:'Slimming'},
                    {id:13,title:'Facial'},
                    {id:14,title:'Facial'},
                    {id:15,title:'Faciaal'},
                    {id:16,title:'Botol'},
                    {id:17,title:'Botox'},
                    {id:18,title:'Susuk'},
            ]
        }
    }
    static navigationOptions = {
      headerTitle: 'Search',
      headerLeft: <CustomButton title="<" />,
      headerRight: (
        <Ionicons
          style={{ marginRight: 15 }}
          name="md-menu"
          size={32}
          color="#999999"
        />
      ),
  
      headerStyle: {
        backgroundColor: '#E7E7E7'
      },
      //headerTintColor: '#0ff',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#999999'
      }
    };
  
    render() {
      return (
        <>
          <View style={styles.container}>
          <Search />
          <ScrollView>
          <Text style={{paddingBottom:15, fontSize:16}}>Your History</Text>
              {this.state.categories.map(item => (
                  <History key={item.id} title={item.title}/>
              ))}
            </ScrollView>
          </View>
        </>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      padding: 15,
      flex: 1,
      flexDirection:'column',
      justifyContent: 'center',
      backgroundColor: '#F5FCFF'
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5
    }
  });
  
  