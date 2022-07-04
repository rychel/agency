import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ChooseCaissier = props => {
  const {Titleimage, Titlename, Titlesubname} = props;


  return (
    <View style={styles.ui_splash_contain_header_globe}>
      
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
    position: 'absolute',
    bottom: 120,
    backgroundColor: 'grey',
  },
});

export default ChooseCaissier;
