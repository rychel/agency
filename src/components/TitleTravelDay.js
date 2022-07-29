import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const TitleTravelDay = props => {
  const {Titleico, Titlesub, Titlebg} = props;

  return (
    <View style={styles.ui_splash_global_contain_global}>
      <View
        style={[
          styles.ui_splash_global_contain_registered_global_contain_title,
          {backgroundColor: Titlebg},
        ]}>
        <Text
          style={
            styles.ui_splash_global_contain_registered_global_config_font1
          }>
          {Titlesub}
        </Text>
      </View>
      {Titleico ? (
        <FontAwesomeIcon
          icon={Titleico}
          size={20}
          color="#0061ab73"
          style={styles.ui_splash_global_contain_registered_logo_config}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_global_contain_global: {
    margin: 5,
    flexDirection: 'row',
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ui_splash_global_contain_registered_global_contain_title: {
    margin: 5,
    flexDirection: 'row',
    height: 30,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  ui_splash_global_contain_registered_global_config_font1: {
    fontFamily: 'PingFang SC Regular',
    fontSize: 14.4,
    color: '#000000b8',
  },
  ui_splash_global_contain_registered_logo_config: {
    transform: [{rotateZ: '40deg'}],
    marginRight: 5,
  },
});

export default TitleTravelDay;
