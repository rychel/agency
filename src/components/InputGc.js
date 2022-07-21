import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const InputGc = props => {
  const {
    title,
    keyboard,
    onChange,
    onBlur,
    onChangeText,
    errors,
    onFocus,
    Icon,
    Placeholder,
  } = props;

  return (
    <View>
      <View style={styles.ui_splash_global_control}>
        <FontAwesome5
          name={Icon}
          size={18}
          color="#009688d1"
          style={styles.ui_splash_title_logo_control}
        />
        <Text style={styles.ui_splash_title_form_control}>{title}</Text>
      </View>
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
        placeholder={Placeholder}
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
  ui_splash_global_control: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 1,
    left: -4,
    flexDirection: 'row',
  },
  ui_splash_input_form_control: {
    width: '90%',
    height: 37,
    alignSelf: 'center',
    borderWidth: 0.6,
    borderColor: '#0000007d',
    fontSize: 15,
    color: '#009688d1',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    marginBottom: 1,
    left: -4,
  },
  ui_splash_input_form_control_error: {
    width: '90%',
    height: 37,
    alignSelf: 'center',
    borderWidth: 0.6,
    borderColor: 'red',
    fontSize: 15,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    color: '#009688d1',
    marginBottom: 1,
    left: -4,
  },
  ui_splash_title_form_control: {
    left: 10,
    fontSize: 14,
    top: 5,
    color: '#009688d1',
    fontFamily: 'opensanscondensedbold',
  },
  ui_splash_title_logo_control: {
    left: 4,
    fontSize: 15,
    top: 6,
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

export default InputGc;
