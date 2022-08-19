import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSquare} from '@fortawesome/free-solid-svg-icons';

const InputGs = props => {
  const {Footus, onChange, onBlur, onChangeText, errors, onFocus} = props;

  return (
    <View style={styles.ui_splash_global_control}>
      <View style={styles.ui_splash_input_fusion_globe_control}>
        <FontAwesomeIcon
          icon={faSquare}
          size={21}
          color={Footus ? 'white' : 'none'}
          style={styles.ui_splash_contain_saisi_form_logo_left}
        />
        <TextInput
          style={
            Footus
              ? styles.ui_splash_input_form_control_focus
              : errors
              ? styles.ui_splash_input_form_control_error
              : styles.ui_splash_input_form_control
          }
          onBlur={onBlur}
          onChangeText={onChangeText}
          errors={errors}
          onFocus={onFocus}
          {...props}
        />
      </View>

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
    width: '98%',
    fontSize: 12,
    color: '#9c27b0',
    overflow: 'hidden',
    flexDirection: 'column',
  },
  ui_splash_input_fusion_globe_control: {
    width: '98%',
    flexDirection: 'column',
    alignSelf: 'center',
    height: 66,
  },
  ui_splash_input_form_control: {
    width: '97%',
    height: 55,
    alignSelf: 'center',
    borderWidth: 0.8,
    borderColor: '#0a0a0a61',
    fontSize: 15,
    color: '#7baffd',
    top: -13,
    borderRadius: 4,
    fontFamily: 'Roboto-Light',
  },
  ui_splash_input_form_control_error: {
    width: '97%',
    height: 55,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#f44336',
    borderRadius: 4,
    fontSize: 14,
    color: '#7baffd',
    top: -13,
    fontFamily: 'Roboto-Light',
  },
  ui_splash_input_form_control_focus: {
    width: '97%',
    height: 55,
    alignSelf: 'center',
    borderWidth: 1.5,
    borderColor: '#7baffd',
    fontSize: 14,
    color: '#7baffd',
    borderRadius: 4,
    top: -13,
    fontFamily: 'Roboto-Light',
  },
  ui_splash_title_form_error_control: {
    left: 7,
    fontSize: 10.45,
    color: 'red',
    padding: 3,
    backgroundColor: '#ffeb3b',
    borderRadius: 3,
  },
  ui_splash_title_form_error_caps_control: {
    flexDirection: 'row',
  },
  ui_splash_contain_saisi_form_logo_left: {
    left: 1,
    zIndex: 1,
    top: 1,
  },
});

export default InputGs;
