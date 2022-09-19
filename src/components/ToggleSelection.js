import React, {useState} from 'react';
import {View, Switch, StyleSheet} from 'react-native';

const ToggleSelection = props => {
  const {SwitchValue, SwitchCursor} = props;

  return (
    <View style={styles.ui_splash_content_wrapper_swap}>
      <Switch onValueChange={SwitchCursor} value={SwitchValue}  />
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_content_wrapper_swap: {
    alignItems: 'center',
  },
});

export default ToggleSelection;
