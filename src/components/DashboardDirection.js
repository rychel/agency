import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const MiniMenuDirection = (props) => {
  const {Titleico, Titleparam, onClose} = props;

  return (
    <View style={styles.ui_splash_contain_header_globe}>
      <TouchableOpacity
        style={styles.ui_splash_contain_item_config_button_back}
        onPress={onClose}>
        <FontAwesome5 name="times" color="#ffffff9c" size={20} />
      </TouchableOpacity>
      <View style={styles.ui_splash_contain_table_param}>
        <TouchableOpacity
          style={styles.ui_splash_contain_item_config_param}
          activeOpacity={0.6}>
          <FontAwesome5 name="calendar-check" color="#ffc107" size={20} />
          <Text style={styles.ui_splash_contain_config_fonts1}>
            Tableau de bord du jour
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  ui_splash_contain_table_param: {
    height: 200,
    width: 230,
    position: 'absolute',
    alignItems: 'center',
    right: 5,
    bottom: 0,
    marginBottom: 80,
    borderWidth: 0.5,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  ui_splash_contain_item_config_button_back: {
    width: 35,
    height: 40,
    justifyContent: 'center',
    marginBottom: 74,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ui_splash_contain_item_config_param: {
    width: 195,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  ui_splash_contain_config_fonts1: {
    fontSize: 16,
    color: '#0a0a0aba',
  },
});

export default MiniMenuDirection;
