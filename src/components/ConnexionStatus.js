import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faSearch, faWifi} from '@fortawesome/free-solid-svg-icons';

const ConnexionStatus = props => {
  
  return (
    <View style={styles.ui_splash_contain_header_globe}>
      <View style={styles.ui_splash_contain_destination_items_globe_text2}>
        <Text>Vous n'etes pas connecté ! </Text>
        <FontAwesomeIcon icon={faWifi} size={20} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
    backgroundColor: '#00CDAC',
    flexDirection: 'row',
    height: 55,
    justifyContent: 'center',
  },

});

export default ConnexionStatus;
