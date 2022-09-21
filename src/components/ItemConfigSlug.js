import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import ToggleSelection from './ToggleSelection';

const ItemConfigSlug = props => {
  const {Titlechoice, Titlemessage, isActived} = props;
  const [swipe, setSwipe] = useState(false);

  const ToggleSwitch = (value) => {
    setSwipe(value);
  }
  return (
    <View style={styles.ui_splash_contain_header_globe_slug_config}>
      <View style={styles.ui_splash_contain_header_globe_config}>
        <Text style={styles.ui_splash_contain_header_globe_config_fonts}>
          {Titlechoice}
        </Text>
        <ToggleSelection SwitchCursor={ToggleSwitch} SwitchValue={swipe} />
      </View>
      <View style={styles.ui_splash_contain_header_globe_config_zone_message}>
        <Text style={styles.ui_splash_contain_header_globe_config_fonts2}>
          {Titlemessage}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe_slug_config: {
    width: '98%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 5,
    borderWidth: 1,
    borderColor: '#54545461',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  ui_splash_contain_header_globe: {
    width: '100%',
    height: 570,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
    flexDirection: 'column',
  },
  ui_splash_contain_header_globe_config: {
    width: '98%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 4,
    marginRight: 4,
    overflow: 'hidden',
  },
  ui_splash_contain_header_globe_config_fonts: {
    fontSize: 18,
    fontFamily: 'FontAwesome',
  },
  ui_splash_contain_header_globe_config_zone_message: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5454540f',
    paddingTop: 2,
    paddingBottom: 2,
  },
  ui_splash_contain_header_globe_config_fonts2: {
    fontSize: 14,
    fontFamily: 'NotoSans-Regular',
  },
});

export default ItemConfigSlug;
