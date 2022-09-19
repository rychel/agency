import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';

const ConnexionStatus = props => {
  const {Isreached, Isconnected} = props;

  return (
    <View style={styles.ui_splash_contain_header_globe}>
      {Isconnected ? null : (
        <View style={styles.ui_splash_contain_destination_globe}>
          <AnimatedLottieView //../../assets/97651-loading.json
            source={require('../../assets/99109-loading.json')}
            style={styles.ui_splash_global_activity_icon}
            autoPlay
          />
          <Text style={styles.ui_splash_contain_destination_label}>
            Tentative de connexion
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
    backgroundColor: '#00CDAC',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ui_splash_contain_destination_globe: {
    height: 28,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
    justifyContent: 'space-around',
  },
  ui_splash_contain_destination_label: {
    fontFamily: 'Quicksand-VariableFont_wght',
    left: -4,
    marginRight: 5,
    marginLeft: 7,
  },
  ui_splash_global_activity_icon: {
    width: 33,
  },
});

export default ConnexionStatus;
