import React from 'react';
import { TouchableWithoutFeedback, Text,View, StyleSheet } from 'react-native';

function RoundButton(props) { 
  return (
    <TouchableWithoutFeedback>
      <View style={styles.border}>
      <Text style={[props.fontSize==24?styles.round24: styles.round]}> 
        {props.title}
      </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  border:{
    flexWrap:'wrap',
    borderWidth:1,
    borderRadius: 100,
    color:'black',
    borderColor:'black',
    marginBottom:15,
    marginEnd:10,
    
  },
  round :{
    padding:10,
    fontSize:10,
    textAlignVertical:'center',
    textAlign:'center',
    justifyContent:'center',
  },
  round24 :{
    fontSize:20,
    paddingHorizontal: 75,
    marginBottom: 5,
    textAlignVertical:'center',
    textAlign:'center',
    justifyContent:'center',
  },
  

}
)
export { RoundButton };
