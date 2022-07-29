import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Animated} from 'react-native';
import Space from '../components/Space';

const InputGc = props => {
  const {title, keyboard, onChange, onChangeText, Placeholder} = props;
  const opaque = useRef(new Animated.Value(1)).current;
  const [iconcolor, setIconcolor] = useState(false);

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

  return (
    <View>
      <View style={styles.ui_splash_contain_title_form_control}>
        <Animated.Text
          style={[styles.ui_splash_title_form_control, {opacity: opaque}]}>
          {title}
        </Animated.Text>
      </View>
      <TextInput
        style={styles.ui_splash_input_form_control}
        keyboardType={keyboard}
        onChange={onChange}
        onBlur={() => {
          overshow();
        }}
        onFocus={() => {
          overflow();
        }}
        placeholder={Placeholder}
        {...props}
      />
      <Space Hwidth={10} />
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_input_form_control: {
    width: '90%',
    height: 38,
    alignSelf: 'center',
    borderWidth: 10,
    fontSize: 15,
    color: '#009688d1',
    borderWidth: 0.4,
    left: 4,
    top: 10,
    borderRadius: 3,
    marginBottom: 5,
  },
  ui_splash_contain_title_form_control: {
    flexDirection: 'row',
    top: 10,
  },
  ui_splash_title_form_control: {
    left: 22,
    fontSize: 12,
    color: '#ff6a5f',
    fontFamily: 'MaterialIcons',
    height: 15,
    backgroundColor: 'white',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
});

export default InputGc;
