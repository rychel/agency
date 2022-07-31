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
  faDoorOpen,
  faSignOutAlt,
  faSun,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons';
import {DrawerContentScrollView} from '@react-navigation/drawer';

import PersonalProfil from './PersonalProfil';
import ItemDrawerMenu from './ItemDrawerMenu';

const DrawerDirection = props => {

  const [sigout, setSigout] = useState(false);

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
            <TouchableOpacity
              style={styles.ui_splash_contain_header_deconnexion_contains_block}
              activeOpacity={0.6}>
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size={17}
                color="#03a9f4"
                style={styles.ui_splash_contain_log_sign_configs1}
              />
              <Text style={styles.ui_splash_contain_text_configs1}>
                Se déconnecter
              </Text>
            </TouchableOpacity>
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
    backgroundColor: '#7cc3bc',
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
    backgroundColor: '#7cc3bc14',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  ui_splash_contain_log_sign_configs1: {
    left: 5,
  },
  ui_splash_contain_text_configs1: {
    left: 10,
    fontFamily: 'OpenSansCondensed-Light',
    color: '#03a9f4',
    fontSize: 18,
  },
});

export default DrawerDirection;
