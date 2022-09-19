import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSquare} from '@fortawesome/free-solid-svg-icons';

const InputGc = props => {
  const {onFocus, syncInput, onBlur, errors} = props;

  return (
    <View style={styles.ui_splash_contain_title_form_control}>
      <View style={styles.ui_splash_contain_saisi_form_display}>
        <FontAwesomeIcon
          icon={faSquare}
          style={styles.ui_splash_contain_saisi_form_logo_left}
          color={syncInput ? 'white' : 'none'}
          size={15}
        />
        <TextInput
          style={
            syncInput
              ? styles.ui_splash_input_form_control_focus
              : styles.ui_splash_input_form_control
          }
          onFocus={onFocus}
          onBlur={onBlur}
          {...props}
        />
        <FontAwesomeIcon
          icon={faSquare}
          style={styles.ui_splash_contain_saisi_form_logo_right}
          color={syncInput ? 'white' : 'none'}
          size={15}
        />
      </View>
      <Text style={styles.ui_splash_title_form_control_error}>{errors}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_input_form_control: {
    width: '88%',
    height: 50,
    fontSize: 16,
    borderWidth: 0.5,
    left: 4,
    borderRadius: 4,
    marginBottom: 5,
    top: 3,
    borderColor: '#101010a6',
    color: '#2196f3',
    fontFamily: 'Hind-Light',
  },
  ui_splash_input_form_control_focus: {
    width: '88%',
    height: 50,
    fontSize: 16,
    borderWidth: 1,
    left: 4,
    borderRadius: 4,
    marginBottom: 5,
    top: 3,
    borderColor: '#2196f3',
    color: '#2196f3',
    fontFamily: 'Hind-Light',
  },
  ui_splash_contain_title_form_control: {
    flexDirection: 'column',
    top: 10,
    backgroundColor: 'white',
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
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
    backgroundColor: 'white',
    height: 57,
    alignItems: 'center',
  },
  ui_splash_contain_saisi_form_logo_left: {
    left: 9,
    zIndex: 1,
  },
  ui_splash_contain_saisi_form_logo_right: {
    left: -5,
  },
  ui_splash_title_form_control_error: {
    fontSize: 12,
    color: '#f44336',
    fontFamily: 'Hind-Light',
    top: -2,
    alignSelf: 'flex-start',
    left: 23,
  },
});

export default InputGc;
