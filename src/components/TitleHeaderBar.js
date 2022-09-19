import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const HeaderUser = props => {
  const {Title, onPress} = props;

  return (
    <View style={styles.ui_splash_contain_header_globe}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.4}>
        <View style={styles.ui_splash_contain_header_globe_zone_back_left}>
          <FontAwesomeIcon icon={faArrowLeft} size={22} color="white" />
        </View>
      </TouchableOpacity>
      <View style={styles.ui_splash_contain_header_globe_contain_title_text2}>
        <Text style={styles.ui_splash_contain_header_globe_zone_title_text2}>
          {Title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    backgroundColor: '#00bcd4',
  },
  ui_splash_contain_header_globe_zone_back_left: {
    width: 40,
    height: 44,
    backgroundColor: 'transparent',
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
    backgroundColor: 'white',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ui_splash_contain_header_globe_zone_title_text: {
    fontSize: 22,
    fontFamily: 'BonheurRoyale-Regular',
    color: '#00968869',
  },
  ui_splash_contain_header_globe_contain_title_text2: {
    left: -10,
  },
  ui_splash_contain_header_globe_zone_title_text2: {
    fontSize: 17,
    color: 'white',
    fontFamily: 'PingFang SC Regular',
    textShadowColor: '#a9a5a3',
    textShadowRadius: 10,
    elevation: 1,
  },
});

export default HeaderUser;
