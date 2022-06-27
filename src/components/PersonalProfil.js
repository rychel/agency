import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const PersonalProfil = props => {
  const {Titleimage, Titlename, Titlesubname, Titlepost} = props;

  return (
    <View style={styles.ui_splash_contain_header_cadre_logo_profil}>
      <View style={styles.ui_splash_contain_header_cadre_cadre_logo_profil}>
        <Image
          source={Titleimage}
          style={styles.ui_splash_contain_header_globe_logo_profil}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.ui_splash_contain_header_englobe_modify_profil}>
          <FontAwesome5 name="plus" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.ui_splash_contain_header_cadre_ifo_id_profil}>
        <View>
          <Text style={styles.ui_splash_contain_header_params_fonts1}>
            {Titlename}
          </Text>
          <Text style={styles.ui_splash_contain_header_params_fonts2}>
            {Titlesubname}
          </Text>
          <Text style={styles.ui_splash_contain_header_params_fonts3}>
            {Titlepost}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  ui_splash_contain_header_cadre_logo_profil: {
    width: '100%',
    height: 340,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  ui_splash_contain_header_cadre_cadre_logo_profil: {
    width: '100%',
    height: 180,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ui_splash_contain_header_englobe_modify_profil: {
    width: 40,
    height: 30,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#03a9f4',
    left: 30,
    top: -25,
    borderRadius: 100,
  },
  ui_splash_contain_header_globe_logo_profil: {
    width: 140,
    height: 140,
    borderRadius: 100,
  },
  ui_splash_contain_header_cadre_ifo_id_profil: {
    width: '100%',
    height: 40,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ui_splash_contain_header_params_fonts1: {
    fontWeight: '800',
    fontSize: 17,
    margin: 4,
  },
  ui_splash_contain_header_params_fonts2: {
    fontSize: 15,
    left: 2,
  },
  ui_splash_contain_header_params_fonts3: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'BonheurRoyale-Regular',
    padding: 4,
    borderRadius: 5,
    fontWeight: '100',
    backgroundColor: '#f44336',
    color: 'white',
  },
});

export default PersonalProfil;
