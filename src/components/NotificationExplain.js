import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const NotificationExplain = props => {
  const {Titlemessage} = props;

  return (
    <View style={styles.ui_splash_contain_header_globe}>
      <View style={styles.ui_splash_contain_header_globe_message_delevry}>
        <Text
          style={styles.ui_splash_contain_header_globe_message_configs_font}>
          {Titlemessage}
          <FontAwesome5 name="lock" color="white" size={18} />
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
    width: '92%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f44336bf',
    borderRadius: 5,
    padding: 2,
  },
  ui_splash_contain_header_globe_message_configs_font: {
    width: '95%',
    fontSize: 15,
    fontFamily: 'Entypo',
    textAlign: 'justify',
    padding: 2,
    color: 'white',
  },
});

export default NotificationExplain;
