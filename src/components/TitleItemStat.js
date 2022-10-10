import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const TitleItemStat = props => {
  const {Titlesub} = props;

  return (
    <View
      style={styles.ui_splash_global_contain_registered_global_contain_title}>
      <Text
        style={styles.ui_splash_global_contain_registered_global_config_font1}>
        .{Titlesub}
      </Text>
      <View style={styles.ui_splash_global_cover_space}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_global_contain_registered_global_contain_title: {
    margin: 5,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  ui_splash_global_contain_registered_global_config_font1: {
    fontFamily: 'PingFang SC Regular',
    fontSize: 17,
    color: '#4c3836',
    left: 2,
    padding: 3,
    borderRadius: 100,
  },
  ui_splash_global_cover_space: {
    left: 2,
    backgroundColor: '#b5b4b41a',
    width: Dimensions.get('window').width,
    borderRadius: 100,
    height: 15,
  },
});

export default TitleItemStat;
