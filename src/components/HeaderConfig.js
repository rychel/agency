import React from 'react';
import {Text, StyleSheet} from 'react-native';

const HeaderConfig = props => {
  const {Head} = props;

  return (
    <Text style={styles.ui_splash_contain_label_configuration_name}>
      {Head}.
    </Text>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_label_configuration_name: {
    color: '#2196f3',
    fontFamily: 'Roboto-Light',
    margin: 3,
    fontSize: 17,
  },
});

export default HeaderConfig;
