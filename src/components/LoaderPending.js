import React from 'react';
import {View, StyleSheet, ActivityIndicator, Text} from 'react-native';

const LoaderPending = props => {
  const {Message} = props;
  
  return (
    <View style={styles.ui_splash_global_display_screen}>
      <ActivityIndicator
        animating={true}
        color="#57f1d8"
        size={40}
        style={{left: -10}}
      />
      <Text style={styles.ui_splash_global_display_unhandled_text1}>
        {Message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_global_display_screen: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fbfbfb',
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ui_splash_global_display_unhandled_text1: {
    position: 'relative',
    fontFamily: 'Hind-Light',
    fontSize: 20,
    height: 50,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: '#57f1d8',
  },
});

export default LoaderPending;
