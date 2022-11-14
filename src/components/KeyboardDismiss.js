import React from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';

const KeyboardDismiss = ({children}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default KeyboardDismiss;
