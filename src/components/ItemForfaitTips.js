import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ItemForfaitTips = props => {
  const {Titleico, Titlesub, Titlecl} = props;

  return (
    <View
      style={styles.ui_splash_global_contain_registered_global_contain_title}>
      <FontAwesome5 name={Titleico} size={20} color={Titlecl} />
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
  },
});

export default ItemForfaitTips;
