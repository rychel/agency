import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TitleItemStat = props => {
  const {Titlesub} = props;

  return (
    <View
      style={styles.ui_splash_global_contain_registered_global_contain_title}>
      <View>
        <Text
          style={
            styles.ui_splash_global_contain_registered_global_config_font1
          }>
          {Titlesub}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_global_contain_registered_global_contain_title: {
    margin: 5,
    marginTop: 10,
  },
  ui_splash_global_contain_registered_global_config_font1: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15.7,
    color: '#00000094',
    left: 2,
    padding: 3,
    backgroundColor: '#00000009',
    borderRadius: 100,
  },
});

export default TitleItemStat;
