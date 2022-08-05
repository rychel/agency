import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';

const InputGc = props => {
  const {title, keyboard, Placeholder} = props;

  return (
    <View>
      <View style={styles.ui_splash_contain_title_form_control}>
        <View style={styles.ui_splash_title_block_form_control}>
          <Text style={styles.ui_splash_title_form_control}>{title}</Text>
        </View>
        <View style={styles.ui_splash_contain_saisi_form_display}>
          <TextInput
            style={styles.ui_splash_input_form_control}
            keyboardType={keyboard}
            placeholder={Placeholder}
            {...props}
          />
          <FontAwesomeIcon
            icon={faAngleRight}
            style={styles.ui_splash_contain_saisi_form_logo_direction}
            color="#00000014"
            size={15}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_input_form_control: {
    width: '97%',
    height: 50,
    fontSize: 14,
    borderWidth: 0.5,
    left: 4,
    borderRadius: 4,
    marginBottom: 5,
    top: 3,
    borderColor: '#101010a6',
    color: '#f44336',
    fontFamily: 'NotoSans-Regular',
  },
  ui_splash_contain_title_form_control: {
    flexDirection: 'column',
    top: 10,
    backgroundColor: 'white',
    height: 75,
    width: '90%',
    alignSelf: 'center',
  },
  ui_splash_title_block_form_control: {
    flexDirection: 'row',
  },
  ui_splash_title_form_control: {
    fontSize: 10,
    color: '#101010a6',
    fontFamily: 'NotoSans-Regular',
    height: 15,
    marginBottom: 4,
    top: 2,
    zIndex: 2,
    transform: [{translateY: 14}],
    opacity: 1,
    left: 8,
  },
  ui_splash_contain_saisi_form_display: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    height: 70,
    alignItems: 'center',
    top: -14,
  },
  ui_splash_contain_saisi_form_logo_direction: {
    left: -30,
  },
});

export default InputGc;
