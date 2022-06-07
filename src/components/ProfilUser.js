import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ProfilUser = (props) => {
  const {Utitle, Username, Uphoto, Ustatut} = props;
  
  return (
    <TouchableOpacity
            style={styles.ui_splash_started_button_welcome}
            activeOpacity={0.7}>
    <View style={styles.ui_splash_contain_profil_globe}>
      
      <View style={styles.ui_splash_contain_profil_cadre_globe}>
        <Image
            source={Uphoto}
            resizeMode="cover"
            style={styles.ui_splash_contain_profil_cadre_photo}
        />
      </View>
      <Text style={[styles.ui_splash_contain_profil_cadre_title_icon_connexion, {backgroundColor: Ustatut}]}></Text>
      <Text>{Utitle} : {Username}</Text>
    </View>      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    ui_splash_contain_profil_globe: {
        width: 160,
        height: 172,
        borderWidth: 1.6,
        borderColor: '#83838321',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
        borderTopWidth: 0,
        borderBottomColor: 0,
        borderLeftWidth: 0,
    },
    ui_splash_contain_profil_cadre_globe: {
        width: 120,
        height: 120,
        borderRadius: 100,
        margin: 2,
        overflow: 'hidden',
    },
    ui_splash_contain_profil_cadre_title_icon_connexion: {
      position: 'relative',
      top: -10,
      fontSize: 19,
      width: 20,
      height: 20,
      borderRadius: 100,
    },
    ui_splash_contain_profil_cadre_photo: {
      alignSelf: 'center',
      width: 120,
      height: 120,
      borderRadius: 100,
    }
});

export default ProfilUser;
