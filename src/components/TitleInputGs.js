import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TitleInputGs = props => {
  const {Title, Bittitle, Posttitle, Pretitle} = props;

  return (
    <View style={styles.ui_splash_global_control}>
      <Text
        style={styles.ui_splash_global_fantome_message_activity_label_part1}>
        {Title}{' '}
        <Text
          style={styles.ui_splash_global_fantome_message_activity_label_part2}>
          {Posttitle}
        </Text>{' '}
        {Bittitle}{' '}
        <Text
          style={styles.ui_splash_global_fantome_message_activity_label_part2}>
          {Pretitle}
        </Text>{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_global_control: {
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ui_splash_global_fantome_message_activity_label_part1: {
    fontSize: 16,
    fontFamily: 'Roboto-Thin',
    position: 'relative',
    color: '#000000ba',
    textAlign: 'center',
    top: 25,
  },
  ui_splash_global_fantome_message_activity_label_part2: {
    fontSize: 16.5,
    fontFamily: 'Nunito-Light',
    position: 'relative',
    color: '#707be5',
    textAlign: 'center',
    top: 25,
  },
});

export default TitleInputGs;
