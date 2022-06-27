import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HeaderUser = props => {
  const {Title, onPress} = props;

  return (
    <View style={styles.ui_splash_contain_header_globe}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.4}>
        <View style={styles.ui_splash_contain_header_globe_zone_back_left}>
          <FontAwesome5 name="angle-left" size={40} color="#00968869" />
          <View style={styles.ui_splash_contain_header_globe_zone_title_name}>
            <Text style={styles.ui_splash_contain_header_globe_zone_title_text}>
              N
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <View>
        <Text>{Title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    backgroundColor: '#7cc3bc',
  },
  ui_splash_contain_header_globe_zone_back_left: {
    width: 65,
    height: 44,
    backgroundColor: 'white',
    borderRadius: 100,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 15,
  },
  ui_splash_contain_header_globe_zone_title_name: {
    width: 40,
    height: 40,
    backgroundColor: '#00968869',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ui_splash_contain_header_globe_zone_title_text: {
    fontSize: 22,
    fontFamily: 'BonheurRoyale-Regular',
  },
});

export default HeaderUser;