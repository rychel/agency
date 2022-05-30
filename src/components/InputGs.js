import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';

const InputGs = (props) => {
  return (
    <View>
      <Text style={styles.ui_splash_title_form_control}>{props.title}</Text>
      <TextInput
          style={props.errors ? styles.ui_splash_input_form_control_error : styles.ui_splash_input_form_control}
          keyboardType={props.keyboard}
          onBlur={props.onBlur}
          onChangeText={props.onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_input_form_control: {
    width: '90%',
    marginTop: 8,
    marginBottom: 10,
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1.6,
    borderColor: '#A3BDED',
    fontSize: 17,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    color: 'orange',
  },
  ui_splash_input_form_control_error: {
    width: '90%',
    marginTop: 8,
    marginBottom: 10,
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1.6,
    borderColor: 'red',
    fontSize: 17,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    color: 'orange',
  },
  ui_splash_title_form_control: {
    left: 26,
    fontSize: 17,
    top: 22,
    color: '#A3BDED',
  },
});

export default InputGs;
