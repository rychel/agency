import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {DrawerContentScrollView} from '@react-navigation/drawer';

import PersonalProfil from './PersonalProfil';
import ItemDrawerMenu from './ItemDrawerMenu';

const DrawerDirection = props => {
  const [signout, setSignout] = useState(false);

  return (
    <DrawerContentScrollView style={styles.ui_splash_contain_header_globe}>
      <PersonalProfil
        Titleimage={require('../../assets/Logo4.jpg')}
        Titlename="Otello"
        Titlesubname="Parfait Simb Coig"
        Titlepost="Chef d'agence"
        Titlenumber="673845359"
        onOpen={() => setSignout(false)}
        onClose={() => setSignout(true)}
      />
      <View
        style={styles.ui_splash_contain_header_administration_contains_block}>
        {signout ? (
          <View style={styles.ui_splash_contain_header_deconnexion_contains}>
            <TouchableOpacity
              style={styles.ui_splash_contain_header_deconnexion_contains_block}
              activeOpacity={0.6}>
              <FontAwesome5
                name="door-open"
                size={17}
                color="white"
                style={styles.ui_splash_contain_log_sign_configs1}
              />
              <Text style={styles.ui_splash_contain_text_configs1}>
                Se déconnecter
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}
        <ItemDrawerMenu
          Titleico="user-friends"
          Titlename="Créer un poste"
          Titlenotif="1"
        />
        <ItemDrawerMenu
          Titleico="bookmark"
          Titlename="Voir les archives"
          Titlenotif="0"
        />
        <ItemDrawerMenu
          Titleico="sun"
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
    backgroundColor: '#00bcd4',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  ui_splash_contain_log_sign_configs1: {
    left: 5,
  },
  ui_splash_contain_text_configs1: {
    left: 10,
    fontFamily: 'materialcommunityIcons',
    color: 'white',
  },
});

export default DrawerDirection;
