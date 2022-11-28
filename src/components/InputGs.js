import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from '@react-native-material/core';

const InputGs = props => {
  const {onChangeText, errors} = props;

  return (
    <View style={styles.ui_splash_global_control}>
      <View style={styles.ui_splash_input_fusion_globe_control}>
        <TextInput
          variant="outlined"
          color="#757ddfe3"
          inputContainerStyle={styles.ui_splash_container_input_form_control}
          inputStyle={styles.ui_splash_input_form_control}
          onChangeText={onChangeText}
          errors={errors}
          keyboardType=''
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
    overflow: 'hidden',
    flexDirection: 'column',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ui_splash_input_fusion_globe_control: {
    width: '98%',
    flexDirection: 'column',
    height: 68,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ui_splash_container_input_form_control: {
    width: '96%',
    height: 58,
    marginTop: 10,
  },
  ui_splash_input_form_control: {
    fontSize: 15,
    fontFamily: 'Roboto-Light',
    height: 67,
  },
  ui_splash_title_form_error_control: {
    fontSize: 10.45,
    color: 'red',
    padding: 3,
    borderRadius: 3,
    backgroundColor: '#ffeb3b4d',
    left: 3,
  },
  ui_splash_title_form_error_caps_control: {
    flexDirection: 'row',
    width: '96%',
  },
});

export default InputGs;
