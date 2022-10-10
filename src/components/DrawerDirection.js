import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  Animated,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBookmark,
  faKiwiBird,
  faSun,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {useDispatch} from 'react-redux';
import {LogOut} from '../store/Log/actions';
import PersonalProfil from './PersonalProfil';
import ItemDrawerMenu from './ItemDrawerMenu';

const DrawerDirection = props => {
  const [sigout, setSigout] = useState(false);

  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(LogOut());
  };

  const overflow = useRef(new Animated.Value(0)).current;
  const gotoRight = useRef(new Animated.Value(-180)).current;

  const openSession = () => {
    Animated.timing(overflow, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
    Animated.timing(gotoRight, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const closeSession = () => {
    Animated.timing(overflow, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(gotoRight, {
      toValue: -50,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <DrawerContentScrollView style={styles.ui_splash_contain_header_globe}>
      <PersonalProfil
        Titlename="Otello"
        Titlesubname="Parfait Simb Coig"
        Titlepost="Chef d'agence"
        Titlenumber="+237 673845359"
        onOpen={() => {
          setSigout(false), closeSession();
        }}
        onClose={() => {
          setSigout(true), openSession();
        }}
      />
      <View
        style={styles.ui_splash_contain_header_administration_contains_block}>
        <Animated.View
          style={[
            styles.ui_splash_contain_header_deconnexion_contains,
            {opacity: overflow, transform: [{translateX: gotoRight}]},
          ]}>
          <View
            style={styles.ui_splash_contain_header_deconnexion_contains_block}>
            <TouchableOpacity
              style={styles.ui_splash_contain_header_deconnexion_contains_block}
              onPress={signOut}>
              <FontAwesomeIcon
                icon={faKiwiBird}
                size={17}
                color="white"
                style={styles.ui_splash_contain_log_sign_configs1}
              />
              <Text style={styles.ui_splash_contain_text_configs1}>
                Fermer la session
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
        <View
          style={
            sigout
              ? styles.ui_splash_before_deconnexion_action
              : styles.ui_splash_after_deconnexion_action
          }>
          <ItemDrawerMenu
            Titleico={faUserFriends}
            Titlename="Créer un poste"
            Titlenotif="1"
          />
          <ItemDrawerMenu
            Titleico={faBookmark}
            Titlename="Voir les archives"
            Titlenotif="0"
          />
          <ItemDrawerMenu
            Titleico={faSun}
            Titlename="Paramètres"
            Titlenotif="0"
            onPress={() => {
              props.navigation.navigate('Setting');
            }}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  ui_splash_contain_header_params_fonts4: {
    fontWeight: '800',
    fontSize: 17,
    color: '#f44336',
  },
  ui_splash_contain_header_params_fonts5: {
    fontSize: 11,
  },
  ui_splash_contain_header_administration_contains_block: {
    width: '100%',
    height: 310,
    backgroundColor: 'white',
  },
  ui_splash_contain_header_deconnexion_contains_block: {
    width: 140,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  ui_splash_contain_header_deconnexion_contains: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ff9800',
    top: -4,
    borderWidth: 3,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderColor: '#f9a01f',
  },
  ui_splash_contain_log_sign_configs1: {
    left: 5,
  },
  ui_splash_contain_text_configs1: {
    left: 18,
    fontFamily: 'Nunito-Light',
    color: 'white',
    fontSize: 16.2,
    top: -2,
  },
  ui_splash_before_deconnexion_action: {
    width: '100%',
    overflow: 'hidden',
  },
  ui_splash_after_deconnexion_action: {
    width: '100%',
    overflow: 'hidden',
    top: -40,
  },
});

export default DrawerDirection;
