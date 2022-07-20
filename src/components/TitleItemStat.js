import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TitleItemStat = props => {
  const {Titlesub} = props;

  return (
    <View
      style={styles.ui_splash_global_contain_registered_global_contain_title}>
      <Text
        style={styles.ui_splash_global_contain_registered_global_config_font1}>
        {Titlesub}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_global_contain_registered_global_contain_title: {
    margin: 5,
    flexDirection: 'row',
  },
  ui_splash_global_contain_registered_global_config_font1: {
    fontFamily: 'PingFang SC Regular',
  },
});

export default TitleItemStat;
