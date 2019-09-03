import React from 'react';
import { TouchableWithoutFeedback, Text, StyleSheet } from 'react-native';

function RoundButton(props) { 
  return (
    <TouchableWithoutFeedback>
      <Text style={[props.fontSize==24?styles.round24: styles.round]}> 
        {props.title}
      </Text>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  round :{
    width:75,
    fontSize:10,
    color :'black',
    padding: 5,
    borderWidth: 1,
    borderRadius: 20,
    textAlign: 'center',
    margin: 5,
    marginBottom:10,
  },
  round24 :{
    fontSize:16,
    color :'black',
    paddingHorizontal: 75,
    borderWidth: 1,
    borderRadius: 100,
    textAlignVertical:'center',
    textAlign:'center',
    marginBottom: 5,
  },
  

}
)
export { RoundButton };
