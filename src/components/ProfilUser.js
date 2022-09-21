import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const ProfilUser = props => {
  const {Utitle, Username, Ustatut, Uphoto} = props;

  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.ui_splash_contain_profil_globe}>
        <Image
          source={Uphoto}
          style={styles.ui_splash_contain_profil_cadre_logo}
        />
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
    width: 115,
    height: 150,
    borderWidth: 1.6,
    borderColor: '#f7f5f5cc',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    borderTopWidth: 0,
    borderBottomColor: 0,
    borderLeftWidth: 0,
    flexDirection: 'column',
  },
  ui_splash_contain_profil_cadre_globe: {
    width: 50,
    height: 50,
    borderRadius: 100,
    overflow: 'hidden',
    backgroundColor: '#03a9f4',
    alignItems: 'center',
    justifyContent: 'center',
    top: -15,
    zIndex: 2,
  },
  ui_splash_contain_profil_cadre_title_icon_connexion: {
    position: 'relative',
    top: -22,
    fontSize: 19,
    width: 12,
    height: 12,
    borderRadius: 100,
    zIndex: 3,
  },
  ui_splash_contain_profil_cadre_photo: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  ui_splash_contain_profil_cadre_logo: {
    width: 90,
    height: 90,
    borderRadius: 100,
    zIndex: 1,
    top: 14,
  },
  ui_splash_config_fonts1: {
    fontSize: 18,
    fontFamily: 'Fontisto',
    color: 'white',
  },
  ui_splash_config_fonts2: {
    fontSize: 15,
    fontFamily: 'PingFang SC Regular',
    top: -15,
    color: '#000000a3',
  },
});

export default ProfilUser;
