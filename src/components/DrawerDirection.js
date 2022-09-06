import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBookmark,
  faSignOutAlt,
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
  }

  return (
    <DrawerContentScrollView style={styles.ui_splash_contain_header_globe}>
      <PersonalProfil
        Titleimage={require('../../assets/Logo4.jpg')}
        Titlename="Otello"
        Titlesubname="Parfait Simb Coig"
        Titlepost="Chef d'agence"
        Titlenumber="673845359"
        onOpen={() => setSigout(false)}
        onClose={() => setSigout(true)}
      />
      <View
        style={styles.ui_splash_contain_header_administration_contains_block}>
        {sigout ? (
          <View style={styles.ui_splash_contain_header_deconnexion_contains}>
            <View
              style={
                styles.ui_splash_contain_header_deconnexion_contains_block
              }>
              <TouchableOpacity style={
                styles.ui_splash_contain_header_deconnexion_contains_block
              }
                onPress={signOut}>
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  size={17}
                  color="white"
                  style={styles.ui_splash_contain_log_sign_configs1}
                />
                <Text style={styles.ui_splash_contain_text_configs1}>
                  Fermer la session
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
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
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
    width: '100%',
    height: Dimensions.get('window').height,
    backgroundColor: '#00CDAC',
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
    backgroundColor: '#03a9f478',
  },
  ui_splash_contain_log_sign_configs1: {
    left: 5,
  },
  ui_splash_contain_text_configs1: {
    left: 10,
    fontFamily: 'Hind-Light',
    color: 'white',
    fontSize: 16.2,
  },
});

export default DrawerDirection;
