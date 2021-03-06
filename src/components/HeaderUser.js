import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HeaderUser = (props) => {
  const {Gtitle, Depart, Arrive, onPress} = props;

  return (
    <View style={styles.ui_splash_contain_header_globe}>
      <View style={styles.ui_splash_contain_destination_items_globe_text2}>
        <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.ui_splash_contain_globe_cadre_tags}>
          <FontAwesome5 name="bars" size={27} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.ui_splash_contain_destination_items_contains_globe2}>
        <View style={styles.ui_splash_contain_destination_globe}>
          <Text style={styles.ui_splash_contain_destination_items_text1}>{Gtitle}</Text>
          <Text style={styles.ui_splash_contain_destination_items_text2}>{Depart}-{Arrive}</Text>
        </View>
      </View>
      <View style={styles.ui_splash_contain_destination_items_globe_text2}>
        <Text style={styles.ui_splash_contain_destination_items_text3}>
          <FontAwesome5 name="search" size={20} color="white" />
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
    backgroundColor: '#7cc3bc',
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
  },
  ui_splash_contain_destination_globe: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  ui_splash_contain_globe_cadre_tags: {
    borderRadius: 100,
    width: 60,
    height: 65,
    backgroundColor: '#7cc3bc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ui_splash_contain_destination_items_contains_globe2: {
    width: '70%',
    justifyContent: 'center',
    marginLeft: 5,
  },
  ui_splash_contain_destination_items_text1: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Foundation',
    padding: 2,
  },
  ui_splash_contain_destination_items_globe_text2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ui_splash_contain_destination_items_text2: {
    marginLeft: 1,
    marginRight: 10,
    color: 'white',
    borderRadius: 100,
    backgroundColor: '#ffc107',
    width: '50%',
    paddingLeft: 5,
  },
  ui_splash_contain_destination_items_text3: {
    marginLeft: 1,
    marginRight: 10,
  },
});

export default HeaderUser;
