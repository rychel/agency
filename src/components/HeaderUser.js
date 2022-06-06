import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HeaderUser = (props) => {
  const {Gtitle, Depart, Arrive} = props;
  
  return (
    <View style={styles.ui_splash_contain_header_globe}>
      <View style={styles.ui_splash_contain_destination_items_globe2}>
          <Text style={styles.ui_splash_contain_destination_items_text1}>{Gtitle}</Text>
      </View>
      <View style={styles.ui_splash_contain_destination_globe}>
        <View style={styles.ui_splash_contain_destination_items_globe1}>
            <Text style={styles.ui_splash_contain_destination_items_text2}>agence</Text>
            <Text style={styles.ui_splash_contain_destination_items_text2}>{Depart}-{Arrive}</Text>
        </View>
        <Text style={styles.ui_splash_contain_destination_items_text2}><FontAwesome5 name="search" size={24} /></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
      backgroundColor: '#f44336',
      flexDirection: 'column',
      height: 70,
      justifyContent: 'center',
  },
  ui_splash_contain_destination_globe: {
    flexDirection: 'row',
    backgroundColor: '#f4433642',
    justifyContent: 'space-between',
  },
  ui_splash_contain_destination_items_globe1: {
    flexDirection: 'row',
  },
  ui_splash_contain_destination_items_globe2: {
    flexDirection: 'row',
  },
  ui_splash_contain_destination_items_text1: {
    margin: 5,
    color: 'white',
    fontSize: 19,
  },
  ui_splash_contain_destination_items_text2: {
    margin: 5,
    color: '#e1e1e1',
  },
});

export default HeaderUser;
