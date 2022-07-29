import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const ItemForfaitTips = props => {
  const {Titleico, Titlesub, Titlecl} = props;

  return (
    <View
      style={styles.ui_splash_global_contain_registered_global_contain_title}>
      <FontAwesomeIcon icon={Titleico} size={20} color={Titlecl} />
      <Text
        style={styles.ui_splash_global_contain_registered_global_config_font3}>
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
  ui_splash_global_contain_registered_global_config_font3: {
    margin: 2,
    left: 5,
    top: -4,
    fontSize: 18,
    fontFamily: 'OpenSansCondensed-Light'
  },
});

export default ItemForfaitTips;
