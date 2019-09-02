import React from 'react';
import { TouchableWithoutFeedback, Text } from 'react-native';

function CustomButton(props) {
  return (
    <TouchableWithoutFeedback>
      <Text style={{ fontSize: 36, color: '#999999', margin: 15 }}>
        {props.title}
      </Text>
    </TouchableWithoutFeedback>
  );
}

export { CustomButton };
