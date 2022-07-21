import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const InputGs = props => {
  const {title, keyboard, onChange, onBlur, onChangeText, errors, onFocus} =
    props;

  return (
    <View style={styles.ui_splash_global_control}>
      <Text style={styles.ui_splash_title_form_control}>{title}</Text>
      <TextInput
        style={
          errors
            ? styles.ui_splash_input_form_control_error
            : styles.ui_splash_input_form_control
        }
        keyboardType={keyboard}
        onChange={onChange}
        onBlur={onBlur}
        onChangeText={onChangeText}
        errors={errors}
        onFocus={onFocus}
        {...props}
      />
      {errors ? (
        <View style={styles.ui_splash_title_form_error_caps_control}>
          <Text style={styles.ui_splash_title_form_error_control}>
            {errors}
          </Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_input_form_control: {
    width: '90%',
    height: 39,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.6,
    borderColor: 'white',
    fontSize: 15,
    color: 'white',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    marginBottom: 1,
    left: -4,
  },
  ui_splash_input_form_control_error: {
    width: '90%',
    height: 34,
    borderWidth: 0.6,
    borderColor: 'red',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    color: 'orange',
    left: 12,
  },
  ui_splash_title_form_control: {
    left: 16,
    fontSize: 15,
    top: 5,
    color: '#d9d9d9',
    fontFamily: 'PatrickHandSC-Regular',
  },
  ui_splash_title_form_error_control: {
    left: 14,
    fontSize: 10.45,
    color: 'red',
    padding: 3,
    backgroundColor: '#ffeb3b',
    borderRadius: 100,
  },
  ui_splash_title_form_error_caps_control: {
    flexDirection: 'row',
  },
});

export default InputGs;
