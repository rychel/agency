import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

/* utils imports */
import PersonalProfil from './PersonalProfil';
import ItemDrawerMenu from './ItemDrawerMenu';

const DrawerDirection = props => {
  return (
    <DrawerContentScrollView style={styles.ui_splash_contain_header_globe}>
      <PersonalProfil
        Titleimage={require('../../assets/Logo4.jpg')}
        Titlename="Otello"
        Titlesubname="Parfait Simb Coig"
        Titlepost="Chef d'agence"
        Titlenumber="673845359"
      />

      {/*administration session*/}
      <View
        style={styles.ui_splash_contain_header_administration_contains_block}>
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
});

export default DrawerDirection;
