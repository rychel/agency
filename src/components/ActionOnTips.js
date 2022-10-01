import React, {useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faClose, faEyeDropperEmpty} from '@fortawesome/free-solid-svg-icons';

const ActionOnTips = props => {
  const {onClose, onUpdate, onDelete} = props;

  const StartWelcomeBrave = useRef(new Animated.Value(40)).current;
  const FlickedLogo = useRef(new Animated.Value(-40)).current;

  useEffect(() => {
    Animated.timing(StartWelcomeBrave, {
      toValue: -2,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(FlickedLogo, {
      toValue: 2,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [StartWelcomeBrave, FlickedLogo]);
  return (
    <TouchableOpacity
      onPress={onClose}
      style={styles.ui_splash_contain_header_globe}>
      <View style={styles.ui_splash_contain_table_param}>
        <TouchableOpacity
          style={styles.ui_splash_contain_item_config_param}
          activeOpacity={0.8}
          onPress={onUpdate}>
          <Animated.View style={{transform: [{translateX: FlickedLogo}]}}>
            <FontAwesomeIcon
              icon={faEyeDropperEmpty}
              color="#00bcd4"
              size={23}
            />
          </Animated.View>
          <Animated.Text
            style={[
              styles.ui_splash_contain_config_fonts1,
              {transform: [{translateX: StartWelcomeBrave}]},
            ]}>
            Modifier
          </Animated.Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ui_splash_contain_item_config_param}
          activeOpacity={0.8}
          onPress={onDelete}>
          <Animated.View style={{transform: [{translateX: FlickedLogo}]}}>
            <FontAwesomeIcon icon={faClose} color="red" size={23} />
          </Animated.View>
          <Animated.Text
            style={[
              styles.ui_splash_contain_config_fonts1,
              {transform: [{translateX: StartWelcomeBrave}]},
            ]}>
            Supprimer
          </Animated.Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
    zIndex: 3,
    alignItems: 'center',
  },
  ui_splash_contain_table_param: {
    height: 105,
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    marginBottom: 80,
    borderRadius: 5,
    backgroundColor: 'white',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  ui_splash_contain_item_config_param: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 10,
    overflow: 'hidden',
  },
  ui_splash_contain_config_fonts1: {
    fontSize: 16,
    color: 'black',
    left: 20,
    fontFamily: 'Quicksand-VariableFont_wght',
    top: -2,
  },
});

export default ActionOnTips;
