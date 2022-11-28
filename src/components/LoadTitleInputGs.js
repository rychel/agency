import React from 'react';
import {View, StyleSheet} from 'react-native';

const LoadTitleInputGs = () => {
  return (
    <View style={styles.ui_splash_global_control}>
      <View style={styles.ui_splash_global_control_gloup1}></View>
      <View style={styles.ui_splash_global_control_gloup2}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_global_control: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ui_splash_global_control_gloup1: {
    width: '85%',
    height: 10,
    backgroundColor: '#d1d0d03d',
    borderRadius: 10,
    margin: 5,
  },
  ui_splash_global_control_gloup2: {
    width: '55%',
    height: 10,
    backgroundColor: '#d1d0d03d',
    borderRadius: 10,
    margin: 5,
  },
});

export default LoadTitleInputGs;
