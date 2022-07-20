import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const TitleTravelDay = (props) => {
  const {Titleico, Titlesub} = props;

  return (
    <View
      style={styles.ui_splash_global_contain_registered_global_contain_title}>
      <Text
        style={styles.ui_splash_global_contain_registered_global_config_font1}>
        {Titlesub}
      </Text>
      <FontAwesome5 name={Titleico} size='20' color='blue' />
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_global_contain_registered_global_contain_title: {
    margin: 5,
    flexDirection: 'row',
    width: 200,
    backgroundColor: 'blue',
  },
  ui_splash_global_contain_registered_global_config_font1: {
    fontFamily: 'PingFang SC Regular',
  },
});

export default TitleTravelDay;
