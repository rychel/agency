import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faExternalLink} from '@fortawesome/free-solid-svg-icons';

const NotificationExplain = props => {
  const {Titlemessage} = props;

  return (
    <View style={styles.ui_splash_contain_header_globe}>
      <View style={styles.ui_splash_contain_header_globe_message_delevry}>
        <FontAwesomeIcon
          icon={faExternalLink}
          size={19}
          color="#00000087"
          style={styles.ui_splash_contain_header_globe_ico}
        />
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
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffeb3b7a',
    borderRadius: 5,
  },
  ui_splash_contain_header_globe_message_configs_font: {
    fontSize: 14,
    fontFamily: 'Roboto-Light',
    textAlign: 'left',
    color: '#00000087',
    paddingTop: 5,
    paddingBottom: 5,
  },
  ui_splash_contain_header_globe_ico: {
    padding: 2,
    color: '#00000087',
    paddingTop: 5,
    paddingRight: 25,
  },
});

export default NotificationExplain;
