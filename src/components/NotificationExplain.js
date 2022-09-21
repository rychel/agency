import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NotificationExplain = props => {
  const {Titlemessage} = props;

  return (
    <View style={styles.ui_splash_contain_header_globe}>
      <View style={styles.ui_splash_contain_header_globe_message_delevry}>
        <Text
          style={styles.ui_splash_contain_header_globe_message_configs_font}>
          {Titlemessage}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  ui_splash_contain_header_globe_message_delevry: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ed8b6c',
    borderRadius: 5,
  },
  ui_splash_contain_header_globe_message_configs_font: {
    fontSize: 15,
    fontFamily: 'Roboto-Light',
    textAlign: 'left',
    padding: 2,
    color: 'white',
    paddingTop: 5,
    paddingBottom: 5,
  },
});

export default NotificationExplain;
