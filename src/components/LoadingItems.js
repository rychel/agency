import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';

const LoadingItems = props => {
  return (
    <View style={styles.ui_splash_global_display_screen}>
      <AnimatedLottieView
        source={require('../../assets/97934-loading-animation.json')}
        style={styles.ui_splash_global_activity_icon}
        autoPlay
      />
      <Text style={styles.ui_splash_global_display_unhandled_text1}>
        en attente d'affichage ...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_global_display_screen: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 40,
  },
  ui_splash_global_display_unhandled_text1: {
    position: 'relative',
    fontFamily: 'Hind-Light',
    fontSize: 15,
    height: 50,
    textAlignVertical: 'center',
    textAlign: 'center',
    top: -36,
    color: '#706e6ea3',
  },
  ui_splash_global_activity_icon: {
    width: 36,
    height: 38,
    fontSize: 124,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingItems;
