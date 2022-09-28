import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faExternalLink} from '@fortawesome/free-solid-svg-icons';

const NotificationExplain = props => {
  const {Titlemessage} = props;

  const FlipLeft = useRef(new Animated.Value(35)).current;
  const FlipRight = useRef(new Animated.Value(-15)).current;

  useEffect(() => {
    Animated.timing(FlipLeft, {
      toValue: -1,
      duration: 500,
      useNativeDriver: true,
    }).start(),
      Animated.timing(FlipRight, {
        toValue: -1,
        duration: 500,
        useNativeDriver: true,
      }).start();
  }, []);

  return (
    <View style={styles.ui_splash_contain_header_globe}>
      <View style={styles.ui_splash_contain_header_globe_message_delevry}>
        <Animated.View style={{transform: [{translateX: FlipRight}]}}>
          <FontAwesomeIcon
            icon={faExternalLink}
            size={19}
            color="#00000087"
            style={styles.ui_splash_contain_header_globe_ico}
          />
        </Animated.View>
        <Animated.Text
          style={[
            styles.ui_splash_contain_header_globe_message_configs_font,
            {
              transform: [{translateX: FlipLeft}],
            },
          ]}>
          {Titlemessage}
        </Animated.Text>
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
    overflow: 'hidden',
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
    paddingRight: 25,
  },
});

export default NotificationExplain;
