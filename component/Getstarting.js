import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  ScrollView,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSmile, faRightLong} from '@fortawesome/free-solid-svg-icons';

const Getstarting = () => {
  const Floating = useRef(new Animated.Value(-45)).current;

  setInterval(() => {
    Animated.timing(Floating, {
      toValue: 19,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, 1000);

  const spin = Floating.interpolate({
    inputRange: [0, 10],
    outputRange: ['-19deg', '2deg'],
  });

  return (
    <LinearGradient
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      locations={[0.05, 0.6]}
      colors={['#FEB692', '#EA5455']}
      style={styles.ui_splash_todo_contain}>
      <View style={styles.ui_splash_contain_widget_acxios}>
        <Animated.View
          style={{
            transform: [{rotate: spin}],
          }}>
          <FontAwesome5 name="robot" size={160} color="white" />
        </Animated.View>
      </View>
      <View style={styles.ui_splash_below_title_message}>
        <Text style={styles.ui_splash_below_text_message}>
          Faire de votre agence de voyage (par bus) une réalité.{' '}
        </Text>
      </View>
      <View style={styles.ui_splash_box_create_title_message}>
        <FontAwesomeIcon icon={faSmile} color="#FEB692" size={59} />
        <View style={styles.ui_splash_button_goto_starting}>
          <Text style={styles.ui_splash_button_goto_text_starting}>
            creer une agence
          </Text>
          <FontAwesomeIcon icon={faRightLong} color="#ffff" size={25} />
        </View>
        <Text style={styles.ui_splash_contain_other_button_goto}>
          creer un compte associé à une agence
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  ui_splash_todo_contain: {
    height: Dimensions.get('window').height,
  },
  ui_splash_contain_widget_acxios: {
    width: 190,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  body: {
    color: 'red',
    transform: [{rotate: '-45deg'}],
  },
  ui_splash_below_title_message: {
    width: '90%',
    height: 50,
    marginTop: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A3BDED',
    borderRadius: 5,
  },
  ui_splash_below_text_message: {
    fontSize: 16,
    fontWeight: '300',
    fontFamily: 'PatrickHandSC-Regular',
    color: 'white',
  },
  ui_splash_box_create_title_message: {
    width: '90%',
    height: 230,
    marginTop: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    position: 'absolute',
    bottom: 40,
  },
  ui_splash_button_goto_starting: {
    width: '70%',
    height: 50,
    textAlignVertical: 'center',
    marginTop: 30,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#F9D29D',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
  },
  ui_splash_button_goto_text_starting: {
    fontSize: 17,
    fontFamily: 'Snippet-Regular',
    marginRight: 5,
    top: -1,
    color: 'white',
  },
  ui_splash_contain_other_button_goto: {
    textDecorationLine: 'underline',
    marginBottom: 5,
  },
});

export default Getstarting;
