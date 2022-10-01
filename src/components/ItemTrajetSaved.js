import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLevelUp} from '@fortawesome/free-solid-svg-icons';

const ItemTrajetSaved = props => {
  const {Titleico, Depart, Destination, onUpdate} = props;

  const TurnRight = useRef(new Animated.Value(-90)).current;
  const Opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(TurnRight, {
      toValue: 10,
      duration: 1000,
      useNativeDriver: true,
    }).start(),
      Animated.timing(Opacity, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start();
  }, []);

  const TurnTicks = TurnRight.interpolate({
    inputRange: [0, 100],
    outputRange: ['0deg', '-40deg'],
  });

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onUpdate}
      style={styles.ui_splash_contain_header_administration_item_config}>
      <Animated.View
        style={[
          styles.ui_splash_contain_header_animate_administration_awesome_baps,
          {transform: [{rotate: TurnTicks}]},
        ]}>
        <View
          style={styles.ui_splash_contain_header_administration_awesome_baps}>
          <FontAwesomeIcon icon={faLevelUp} size={20} color="#00968875" />
        </View>
      </Animated.View>
      <View
        style={
          styles.ui_splash_global_animated_soup_contain_registered_global_contain_title
        }>
        <Animated.View
          style={[
            styles.ui_splash_global_bus_soup_contain_registered_global_contain_title,
            {opacity: Opacity},
          ]}>
          <Text
            style={
              styles.ui_splash_contain_header_administration_awesome_config
            }>
            {Depart}
          </Text>
          <FontAwesomeIcon
            icon={Titleico}
            size={20}
            color="#673ab7ad"
            style={styles.ui_splash_contain_header_separate_awesome_config}
          />
          <Text
            style={
              styles.ui_splash_contain_header_administration_awesome_config2
            }>
            {Destination}
          </Text>
        </Animated.View>
      </View>
    </TouchableOpacity>
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
    color: '#706e6e',
    fontFamily: 'Roboto-Thin',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    left: 2,
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
  ui_splash_contain_header_administration_awesome_config2: {
    margin: 0,
    fontSize: 18,
    height: 28,
    color: '#706e6e',
    fontFamily: 'Roboto-Thin',
    marginTop: 8,
    left: 35,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    backgroundColor: '#ffc10726',
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
    backgroundColor: '#ffc10754',
  },
  ui_splash_contain_header_administration_awesome_baps: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '11.43%',
    marginTop: 15,
    marginLeft: 5,
    borderRadius: 100,
    height: 35,
    marginRight: 1,
    transform: [{rotate: '90deg'}],
  },
  ui_splash_global_bus_soup_contain_registered_global_contain_title: {
    width: '90%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 1,
    flexDirection: 'row',
    borderWidth: 0.4,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderColor: '#e3e3e3',
  },
  ui_splash_global_animated_soup_contain_registered_global_contain_title: {
    width: '90%',
  },
});

export default ItemTrajetSaved;
