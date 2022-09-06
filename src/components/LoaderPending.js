import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

const LoaderPending = () => {
  return (
    <View style={styles.ui_splash_global_display_screen}>
      <ActivityIndicator animating={true} color="#57f1d8" size={40} />
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_global_display_screen: {
    width: '100%',
    height: '100%',
    backgroundColor: '#00000052',
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default LoaderPending;
