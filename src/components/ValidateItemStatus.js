import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const ValidateItemStatus = props => {
  const {Titleico, Titlestatus} = props;

  const FlipLeft = useRef(new Animated.Value(35)).current;
  const FlipRight = useRef(new Animated.Value(-15)).current;

  useEffect(() => {
    Animated.timing(FlipLeft, {
      toValue: -1,
      duration: 500,
      useNativeDriver: true,
    }).start(),
      Animated.timing(FlipRight, {
        toValue: -1,
        duration: 500,
        useNativeDriver: true,
      }).start();
  }, []);

  return (
    <View style={styles.ui_splash_contain_header_administration_item_config}>
      <Animated.View
        style={[
          styles.ui_splash_contain_header_administration_awesome_baps,
          {transform: [{translateX: FlipRight}]},
        ]}>
        <FontAwesomeIcon icon={Titleico} size={20} color="white" />
      </Animated.View>
      <Animated.Text
        style={[
          styles.ui_splash_contain_header_administration_awesome_config,
          {
            transform: [{translateX: FlipLeft}],
          },
        ]}>
        {Titlestatus}
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_administration_item_config: {
    width: '100%',
    height: 48,
    margin: 10,
    flexDirection: 'row',
    margin: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    alignItems: 'center',
    zIndex: 1,
  },
  ui_splash_contain_header_administration_awesome_config: {
    margin: 0,
    fontSize: 20,
    height: 40,
    color: '#706e6e',
    fontFamily: 'Roboto-Thin',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  ui_splash_contain_header_administration_awesome_caps: {
    width: 25,
    height: 25,
    borderRadius: 100,
    backgroundColor: '#03a9f4ad',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
    marginLeft: 50,
  },
  ui_splash_contain_header_administration_awesome_baps: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '11%',
    marginTop: 2,
    marginLeft: 5,
    borderRadius: 100,
    backgroundColor: '#8bc34a',
    height: 35,
    marginRight: 10,
  },
  ui_splash_global_bus_soup_contain_registered_global_contain_title: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: 1,
    flexDirection: 'row',
    paddingRight: 20,
  },
});

export default ValidateItemStatus;
