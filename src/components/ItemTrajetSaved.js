import React, {useEffect, useRef} from 'react';
import {Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowsSplitUpAndLeft,
  faRegistered,
} from '@fortawesome/free-solid-svg-icons';

const ItemTrajetSaved = props => {
  const {Depart, Destination, onAction} = props;

  const Opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(Opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onAction}
      style={styles.ui_splash_contain_header_administration_item_config}>
      <Animated.View
        style={[
          styles.ui_splash_contain_header_animate_administration_awesome_baps,
          {opacity: Opacity},
        ]}>
        <FontAwesomeIcon icon={faRegistered} size={20} color="#e91e63" />
        <Text
          style={styles.ui_splash_contain_header_administration_awesome_config}>
          {Depart}
        </Text>
      </Animated.View>
      <FontAwesomeIcon
        icon={faArrowsSplitUpAndLeft}
        size={20}
        color="#673ab7ad"
        style={styles.ui_splash_contain_header_separate_awesome_config}
      />
      <Animated.View
        style={[
          styles.ui_splash_contain_header_flow_config2,
          {opacity: Opacity},
        ]}>
        <Text
          style={styles.ui_splash_contain_header_administration_awesome_config2}
          numberOfLines={1}>
          {Destination}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_administration_item_config: {
    width: '99%',
    height: 48,
    flexDirection: 'row',
    margin: 2,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  ui_splash_contain_header_administration_awesome_config: {
    fontSize: 18,
    color: '#000000c9',
    fontFamily: 'Roboto-Thin',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    padding: 4,
    backgroundColor: '#74747417',
  },
  ui_splash_contain_header_separate_awesome_config: {
    left: 12,
  },
  ui_splash_contain_header_flow_config2: {
    flexDirection: 'row',
    width: '48%',
    justifyContent: 'center',
  },
  ui_splash_contain_header_administration_awesome_config2: {
    fontSize: 16,
    height: 28,
    color: 'white',
    fontFamily: 'Roboto-Light',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    backgroundColor: '#00bcd4',
    borderRadius: 5,
  },
  ui_splash_contain_header_animate_administration_awesome_baps: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 4,
    marginRight: 5,
    height: 40,
    borderRadius: 100,
    flexDirection: 'row',
  },
  ui_splash_global_bus_soup_contain_registered_global_contain_title: {
    width: '83%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 1,
    flexDirection: 'row',
    marginLeft: 15,
  },
  ui_splash_global_animated_soup_contain_registered_global_contain_title: {
    width: '65%',
    height: 40,
    justifyContent: 'center',
  },
});

export default ItemTrajetSaved;
