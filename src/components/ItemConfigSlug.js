import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {update_config_transport} from '../store/Log/Dir/DirActions';
import ToggleSelection from './ToggleSelection';

const ItemConfigSlug = props => {
  const {Titlechoice, Titlemessage, isActived} = props;
  const [swipe, setSwipe] = useState(false);
  const [stack, setStack] = useState(0);

  const ActiveItemSwitch = value => {
    try {
      AsyncStorage.getItem('token').then(id => {
        if (Titlechoice == 'Ticket physique') {
          dispatch(update_config_transport(id, value == true ? 0 : null));
        } else if (Titlechoice == 'Code QR') {
          dispatch(update_config_transport(id, value == true ? 1 : null));
        } else {
          dispatch(update_config_transport(id, value == true ? 2 : null));
        }
      });
    } catch (e) {
      console.log(e);
    }
    // Fake swipe
    setSwipe(value);
    setStack(1);
    setTimeout(() => {
      setStack(0);
    }, 3000);
  };
  const dispatch = useDispatch();

  return (
    <View style={styles.ui_splash_contain_header_globe_slug_config}>
      <View style={styles.ui_splash_contain_header_globe_config}>
        <Text style={styles.ui_splash_contain_header_globe_config_fonts}>
          {Titlechoice}
        </Text>
        <ToggleSelection
          SwitchCursor={ActiveItemSwitch}
          SwitchValue={stack === 0 ? isActived : swipe}
        />
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
    borderColor: '#e1e1e1',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
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
    paddingTop: 2,
    paddingBottom: 2,
    alignItems: 'flex-start',
  },
  ui_splash_contain_header_globe_config_fonts2: {
    fontSize: 15,
    fontFamily: 'Roboto-Light',
    textAlign: 'justify',
  },
});

export default ItemConfigSlug;
