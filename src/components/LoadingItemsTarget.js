import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faRoute} from '@fortawesome/free-solid-svg-icons';

const LoadingItemsTarget = props => {
  return (
    <View style={styles.ui_splash_contain_header_administration_item_config}>
      <View
        style={
          styles.ui_splash_contain_header_animate_administration_awesome_baps
        }></View>
      <View
        style={
          styles.ui_splash_global_animated_soup_contain_registered_global_contain_title
        }>
        <View
          style={
            styles.ui_splash_global_bus_soup_contain_registered_global_contain_title
          }>
          <Text
            style={
              styles.ui_splash_contain_header_administration_awesome_config
            }>
            Depart
          </Text>
          <FontAwesomeIcon
            icon={faRoute}
            size={20}
            color="#b7b7b729"
            style={styles.ui_splash_contain_header_separate_awesome_config}
          />
          <Text
            style={
              styles.ui_splash_contain_header_administration_awesome_config2
            }>
            Destination
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_administration_item_config: {
    width: '99%',
    height: 48,
    flexDirection: 'row',
    margin: 2,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 30,
  },
  ui_splash_contain_header_administration_awesome_config: {
    margin: 0,
    fontSize: 20,
    height: 30,
    color: 'transparent',
    fontFamily: 'Roboto-Thin',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    left: 2,
    backgroundColor: '#b7b7b71c',
  },
  ui_splash_contain_globe_header_separate_awesome_config: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '11.43%',
    marginTop: 10,
    marginLeft: 5,
    borderRadius: 100,
    backgroundColor: '#673ab7d6',
    height: 35,
    marginRight: 10,
  },
  ui_splash_contain_header_administration_awesome_config2: {
    margin: 0,
    fontSize: 18,
    height: 28,
    color: 'transparent',
    fontFamily: 'Roboto-Thin',
    marginTop: 8,
    left: 35,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    backgroundColor: '#b7b7b71c',
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
  },
  ui_splash_contain_header_animate_administration_awesome_baps: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 4,
    marginRight: 5,
    height: 35,
    width: '11.43%',
    backgroundColor: '#b7b7b71c',
    transform: [{rotate: "-10deg"}],
  },
  ui_splash_global_bus_soup_contain_registered_global_contain_title: {
    width: '90%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 1,
    flexDirection: 'row',
  },
  ui_splash_global_animated_soup_contain_registered_global_contain_title: {
    width: '90%',
  },
  ui_splash_contain_header_separate_awesome_config: {
    margin: 0,
    fontSize: 20,
    height: 40,
    color: '#706e6e',
    fontFamily: 'Roboto-Thin',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    left: 20,
  },
});

export default LoadingItemsTarget;
