import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';

const LoadingWelcome = props => {
  const {Messagewaiting} = props;

  return (
    <View style={styles.ui_splash_global_display_screen}>
      <AnimatedLottieView
        source={require('../../assets/98556-loader.json')}
        style={styles.ui_splash_global_activity_icon}
        autoPlay
      />
      <Text style={styles.ui_splash_global_display_unhandled_text1}>
        {Messagewaiting}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_global_display_screen: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  ui_splash_global_display_unhandled_text1: {
    position: 'relative',
    fontFamily: 'Hind-Light',
    fontSize: 15,
    width: 120,
    height: 50,
    textAlignVertical: 'center',
    textAlign: 'center',
    top: -36,
    color: '#5f6868',
  },
  ui_splash_global_activity_icon: {
    width: 96,
    height: 88,
    fontSize: 124,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingWelcome;
