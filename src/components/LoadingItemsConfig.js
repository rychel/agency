import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

const LoadingItemsConfig = props => {
  return (
    <View style={styles.ui_splash_contain_header_administration_item_config}>
      <View style={styles.ui_splash_contain_header_administration_awesome_config}>
        <ActivityIndicator color="#ababab" size={35}  />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_administration_item_config: {
    width: '99%',
    height: 60,
    flexDirection: 'row',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 150,
    zIndex: 2,
  },
  ui_splash_contain_header_administration_awesome_config: {
    width: 50,
    height: 50,
    backgroundColor: '#c1c1c11f',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoadingItemsConfig;
