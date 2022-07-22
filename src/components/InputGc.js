import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Animated} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const InputGc = props => {
  const {title, keyboard, onChange, onChangeText, Icon, Placeholder} = props;

  const opaque = useRef(new Animated.Value(1)).current;

  const overflow = () => {
    Animated.sequence([
      Animated.timing(opaque, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
    setTimeout(() => {
      setIconcolor(true);
    }, 200);
  };

  const overshow = () => {
    Animated.sequence([
      Animated.timing(opaque, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
    setTimeout(() => {
      setIconcolor(false);
    }, 200);
  };

  const [iconcolor, setIconcolor] = useState(false);

  return (
    <View>
      <Animated.Text
        style={[styles.ui_splash_title_form_control, {opacity: opaque}]}>
        {title}
      </Animated.Text>
      <View
        style={
          iconcolor
            ? styles.ui_splash_global_control_focus
            : styles.ui_splash_global_control
        }>
        {iconcolor ? (
          <FontAwesome5
            name={Icon}
            size={20}
            color="#009688d1"
            style={styles.ui_splash_title_logo_control}
          />
        ) : (
          <FontAwesome5
            name={Icon}
            size={20}
            color="#00000073"
            style={styles.ui_splash_title_logo_control}
          />
        )}
        <TextInput
          style={styles.ui_splash_input_form_control}
          keyboardType={keyboard}
          onChange={onChange}
          onBlur={() => {
            overshow();
          }}
          onChangeText={onChangeText}
          onFocus={() => {
            overflow();
          }}
          placeholder={Placeholder}
          {...props}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_global_control: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 1,
    left: -7,
    flexDirection: 'row',
    borderWidth: 0.4,
    top: 4,
    borderColor: '#0000003b',
    borderRadius: 3,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  ui_splash_global_control_focus: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 1,
    left: -7,
    flexDirection: 'row',
    borderWidth: 0.7,
    top: 4,
    borderColor: '#009688d1',
    borderRadius: 3,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
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
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginBottom: 1,
    left: 20,
    alignItems: 'flex-start',
  },
  ui_splash_title_form_control: {
    left: 20,
    fontSize: 16,
    top: 5,
    color: '#000000a6',
    fontFamily: 'Feather',
    height: 15,
  },
  ui_splash_title_logo_control: {
    left: 10,
    fontSize: 15,
    top: 10,
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
