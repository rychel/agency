import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ProfilUser = props => {
  const {Utitle, Username, Ustatut} = props;

  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.ui_splash_contain_profil_globe}>
        <View style={styles.ui_splash_contain_profil_cadre_globe}>
          <Text style={styles.ui_splash_config_fonts1}>{Username}</Text>
        </View>
        <Text
          style={[
            styles.ui_splash_contain_profil_cadre_title_icon_connexion,
            {backgroundColor: Ustatut},
          ]}></Text>
        <Text style={styles.ui_splash_config_fonts2}>{Utitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_profil_globe: {
    width: 85,
    height: 92,
    borderWidth: 1.6,
    borderColor: '#f7f5f5cc',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    borderTopWidth: 0,
    borderBottomColor: 0,
    borderLeftWidth: 0,
  },
  ui_splash_contain_profil_cadre_globe: {
    width: 50,
    height: 50,
    borderRadius: 100,
    margin: 2,
    overflow: 'hidden',
    backgroundColor: '#03a9f49e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ui_splash_contain_profil_cadre_title_icon_connexion: {
    position: 'relative',
    top: -10,
    fontSize: 19,
    width: 12,
    height: 12,
    borderRadius: 100,
  },
  ui_splash_contain_profil_cadre_photo: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  ui_splash_config_fonts1: {
    fontSize: 18,
    fontFamily: 'Fontisto',
    color: 'white',
  },
  ui_splash_config_fonts2: {
    fontSize: 13,
    fontFamily: 'PontanoSans-Regular',
  },
});

export default ProfilUser;
