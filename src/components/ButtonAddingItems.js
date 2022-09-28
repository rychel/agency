import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMinus} from '@fortawesome/free-solid-svg-icons';

const ButtonAddingItems = props => {
  const {titleico, titlebutton, onOpen} = props;

  const FlyLeft = useRef(new Animated.Value(50)).current;
  const FlyRight = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(FlyLeft, {
      toValue: -10,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(FlyRight, {
      toValue: 0,
      duration: 8000,
      useNativeDriver: true,
    }).start();
  }, [FlyLeft, FlyRight]);

  return (
    <View style={styles.ui_splash_contain_header_globe}>
      <Animated.View
        style={{
          transform: [{translateX: FlyLeft}],
          opacity: FlyRight,
        }}>
        <View style={styles.ui_splash_contain_poly_message_display}>
          <Text style={styles.ui_splash_contain_text_button_globe}>
            {titlebutton}
          </Text>
        </View>
        <FontAwesomeIcon icon={faMinus} color="#ffeb3b7a" size={20} />
      </Animated.View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onOpen}
        style={styles.ui_splash_contain_poly_button_globe}>
        <FontAwesomeIcon icon={titleico} color="white" size={25} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
    position: 'absolute',
    bottom: 120,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  ui_splash_contain_poly_message_display: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffeb3b7a',
    flexDirection: 'row',
    width: 60,
    borderTopEndRadius: 45,
    borderBottomEndRadius: 40,
    left: 2,
  },
  ui_splash_contain_poly_button_globe: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196f3',
    flexDirection: 'row',
    padding: 17,
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  ui_splash_contain_text_button_globe: {
    fontFamily: 'Dosis-VariableFont_wght',
    fontSize: 16,
    color: '#00000087',
  },
});

export default ButtonAddingItems;
