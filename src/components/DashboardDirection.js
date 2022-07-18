import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
  Animated,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const MiniMenuDirection = props => {
  const {Titleico, Titleparam, onClose} = props;

  const StartWelcomeBrave = useRef(new Animated.Value(40)).current;
  const FlickedLogo = useRef(new Animated.Value(-40)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(StartWelcomeBrave, {
        toValue: -2,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(FlickedLogo, {
        toValue: 2,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, [StartWelcomeBrave, FlickedLogo]);
  return (
    <View style={styles.ui_splash_contain_header_globe}>
      <TouchableOpacity
        style={styles.ui_splash_contain_item_config_button_back}
        onPress={onClose}>
        <FontAwesome5 name="times" color="#ffffff9c" size={20} />
      </TouchableOpacity>
      <View style={styles.ui_splash_contain_table_param}>
        <TouchableOpacity
          style={styles.ui_splash_contain_item_config_param}
          activeOpacity={0.6}>
          <Animated.View style={{transform: [{translateX: FlickedLogo}]}}>
            <FontAwesome5 name="calendar-alt" color="#ffc107" size={25} />
          </Animated.View>
          <Animated.Text
            style={[
              styles.ui_splash_contain_config_fonts1,
              {transform: [{translateX: StartWelcomeBrave}]},
            ]}>
            Tableau de bord du jour
          </Animated.Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  ui_splash_contain_table_param: {
    height: 200,
    width: 230,
    position: 'absolute',
    alignItems: 'center',
    right: 5,
    bottom: 0,
    marginBottom: 80,
    borderRadius: 5,
  },
  ui_splash_contain_item_config_button_back: {
    width: 35,
    height: 40,
    justifyContent: 'center',
    marginBottom: 74,
    top: -440,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ui_splash_contain_item_config_param: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    overflow: 'hidden',
  },
  ui_splash_contain_config_fonts1: {
    fontSize: 16,
    color: 'white',
    top: 4,
  },
});

export default MiniMenuDirection;
