import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';

const ErrorItemStatus = props => {
  const {Titlestatus, TruthFor} = props;

  return (
    <>
      {TruthFor === null ? (
        <View
          style={styles.ui_splash_contain_header_administration_item_config}>
          <View
            style={styles.ui_splash_contain_header_administration_awesome_baps}>
            <AnimatedLottieView
              source={require('../../assets/98282-loading.json')}
              style={styles.ui_splash_global_activity_icon}
              autoPlay
            />
          </View>

          <Text
            style={
              styles.ui_splash_contain_header_administration_awesome_config
            }>
            {Titlestatus}
          </Text>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_administration_item_config: {
    width: '100%',
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 1,
    flexDirection: 'row',
    paddingRight: 20,
    position: 'absolute',
    top: 50,
  },
  ui_splash_contain_header_administration_awesome_config: {
    margin: 15,
    fontSize: 15,
    color: '#101010ad',
    fontFamily: 'Rajdhani-Light',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    backgroundColor: 'white',
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
    width: '13.33%',
    marginTop: 14,
    marginLeft: 18,
    backgroundColor: '#ffeb3b3b',
  },
  ui_splash_contain_header_administration_icon: {
    width: 100,
    height: 80,
  },
  ui_splash_global_activity_icon: {
    width: 33,
    height: 300,
    top: 25,
  },
});

export default ErrorItemStatus;
