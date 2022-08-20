import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

const LoaderGs = props => {
  const {Titleindiq} = props;

  return (
    <View style={styles.ui_splash_global_display_screen}>
      <ActivityIndicator
        size="large"
        color="#2ed1c2"
        style={styles.ui_splash_global_activity_icon}
      />
      <Text style={styles.ui_splash_global_display_unhandled_text1}>
        {Titleindiq}
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
    fontFamily: 'Quicksand-VariableFont_wght'
  },
  ui_splash_global_activity_icon: {
    left: -10,
  },
});

export default LoaderGs;
