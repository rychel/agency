import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HeaderUser = (props) => {
  const {Gtitle, Depart, Arrive, onPress} = props;
  
  return (
    <View style={styles.ui_splash_contain_header_globe}>
      <View style={styles.ui_splash_contain_destination_items_globe_text2}>
        <TouchableOpacity 
              activeOpacity={0.7}
              onPress={onPress}>
            <View style={styles.ui_splash_contain_globe_cadre_tags}>
                <FontAwesome5 name="align-justify" size={30} color='white' />
            </View>
        </TouchableOpacity>
      </View>
      <View style={styles.ui_splash_contain_destination_items_contains_globe2}>
        <View style={styles.ui_splash_contain_destination_items_globe2}>
            <Text style={styles.ui_splash_contain_destination_items_text1}>{Gtitle}</Text>
        </View>
        <View style={styles.ui_splash_contain_destination_globe}>
          <View style={styles.ui_splash_contain_destination_items_globe1}>
              <Text style={styles.ui_splash_contain_destination_items_text2}>agence</Text>
              <Text style={styles.ui_splash_contain_destination_items_text2}>{Depart}-{Arrive}</Text>
          </View>
        </View>
      </View>
      <View style={styles.ui_splash_contain_destination_items_globe_text2}>
        <Text style={styles.ui_splash_contain_destination_items_text2}><FontAwesome5 name="search" size={24} /></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
      backgroundColor: '#f44336',
      flexDirection: 'row',
      height: 70,
      justifyContent: 'center',
  },
  ui_splash_contain_destination_globe: {
    flexDirection: 'row',
    backgroundColor: '#f4433642',
    justifyContent: 'space-between',
  },
  ui_splash_contain_globe_cadre_tags: {
    borderRadius: 100,
    width: 60,
    height: 65,
    backgroundColor: '#f44336',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ui_splash_contain_destination_items_globe1: {
    flexDirection: 'row',
  },
  ui_splash_contain_destination_items_contains_globe2: {
    width: '80%',
    justifyContent: 'center',
    marginLeft: 5,
  },
  ui_splash_contain_destination_items_globe2: {
    flexDirection: 'row',
  },
  ui_splash_contain_destination_items_text1: {
    marginLeft: 1,
    color: 'white',
    fontSize: 19,
  },
  ui_splash_contain_destination_items_globe_text2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ui_splash_contain_destination_items_text2: {
    marginLeft: 1,
    marginRight: 10,
    color: '#e1e1e1',
  },
});

export default HeaderUser;
