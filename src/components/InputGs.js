import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';

const InputGs = (props) => {
  const {title, keyboard, onChange, onBlur, onChangeText, errors, onFocus} = props;
  
  return (
    <View>
      <Text style={styles.ui_splash_title_form_control}>{title}</Text>
      <TextInput
          style={errors ? styles.ui_splash_input_form_control_error : styles.ui_splash_input_form_control}
          keyboardType={keyboard}
          onChange={onChange}
          onBlur={onBlur}
          onChangeText={onChangeText}
          errors={errors}
          onFocus={onFocus}
          {...props}
      />
      {errors ? <Text style={styles.ui_splash_title_form_error_control}>{errors}</Text> : null}
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
  ui_splash_title_form_error_control: {
    left: 26,
    fontSize: 17,
    color: 'red',
  },
});

export default InputGs;
