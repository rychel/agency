import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';

const ConnexionStatus = () => {
  return (
    <View style={styles.ui_splash_contain_header_globe}>
      <View style={styles.ui_splash_contain_contain_destination_globe}>
        <View style={styles.ui_splash_contain_destination_globe}>
          <AnimatedLottieView
            source={require('../../assets/99109-loading.json')}
            style={styles.ui_splash_global_activity_icon}
            autoPlay
          />
          <Text style={styles.ui_splash_contain_destination_label}>
            Tentative de connexion
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
    backgroundColor: '#00bcd4',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ui_splash_contain_contain_destination_globe: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
    justifyContent: 'center',
  },
  ui_splash_contain_destination_globe: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00bcd4',
    borderRadius: 100,
    justifyContent: 'center',
    height: 25,
  },
  ui_splash_contain_destination_label: {
    fontFamily: 'Quicksand-VariableFont_wght',
    fontSize: 13,
    marginRight: 5,
    color: '#fff1dc',
  },
  ui_splash_global_activity_icon: {
    width: 33,
  },
});

export default ConnexionStatus;
