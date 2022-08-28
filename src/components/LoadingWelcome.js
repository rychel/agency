import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';

const LoadingWelcome = props => {
  const {Messagewaiting} = props;

  return (
    <View style={styles.ui_splash_global_display_screen}>
      <AnimatedLottieView
        source={require("../../assets/98556-loader.json")}
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
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ui_splash_global_display_unhandled_text1: {
    position: 'relative',
    fontFamily: 'Quicksand-VariableFont_wght',
    fontSize: 14,
    width: "65%",
  },
  ui_splash_global_activity_icon: {
    left: -10,
    width: 100,
    height: 90,
  },
});

export default LoadingWelcome;
