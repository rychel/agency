import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus, faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const PersonalProfil = props => {
  const {Titleimage, Titlename, Titlesubname, Titlepost, Titlenumber, onOpen, onClose} =
    props;

  const [replaceicon, setReplaceicon] = useState(false);

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
          <FontAwesomeIcon icon={faPlus} size={20} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.ui_splash_contain_header_cadre_ifo_id_profil}>
        <View style={styles.ui_splash_contain_header_cadre_ifo_id_conf}>
          <View style={styles.ui_splash_contain_header_cadre_ifo_id_conf2}>
            <Text style={styles.ui_splash_contain_header_params_fonts1}>
              {Titlename}
            </Text>
            <Text style={styles.ui_splash_contain_header_params_fonts2}>
              {Titlesubname}
            </Text>
          </View>
          <Text style={styles.ui_splash_contain_header_params_fonts3}>
            {Titlepost}
          </Text>
        </View>
        <View style={styles.ui_splash_contain_header_button_show_option}>
          <Text style={styles.ui_splash_contain_header_params_fonts4}>
            {Titlenumber}
          </Text>
          {replaceicon ? (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                setReplaceicon(false);
              }}
              onPressIn={onOpen}>
              <FontAwesomeIcon icon={faAngleUp} size={20} color="white" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                setReplaceicon(true);
              }}
              onPressIn={onClose}>
              <FontAwesomeIcon icon={faAngleDown} size={20} color="white" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_cadre_logo_profil: {
    width: '100%',
    height: 260,
    backgroundColor: '#00CDAC',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  ui_splash_contain_header_cadre_cadre_logo_profil: {
    width: '100%',
    height: 155,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  ui_splash_contain_header_englobe_modify_profil: {
    width: 40,
    height: 30,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f44336d6',
    left: 30,
    top: -5,
    borderRadius: 100,
  },
  ui_splash_contain_header_globe_logo_profil: {
    width: 130,
    height: 130,
    borderRadius: 100,
    top: 20,
  },
  ui_splash_contain_header_cadre_ifo_id_profil: {
    width: '100%',
    height: 90,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  ui_splash_contain_header_cadre_ifo_id_conf: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  ui_splash_contain_header_cadre_ifo_id_conf2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ui_splash_contain_header_params_fonts1: {
    fontSize: 17,
    color: 'white',
    fontFamily: 'AntDesign',
  },
  ui_splash_contain_header_params_fonts2: {
    fontSize: 16.5,
    left: 2,
    color: 'white',
    fontFamily: 'AntDesign',
  },
  ui_splash_contain_header_params_fonts3: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'PingFang SC Regular',
    borderRadius: 5,
    fontWeight: '100',
    backgroundColor: '#03a9f4a6',
    color: 'white',
    position: 'relative',
    marginTop: 10,
    width: 115,
    height: 30,
    textAlignVertical: 'center',
    left: 15,
  },
  ui_splash_contain_header_button_show_option: {
    width: 230,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ui_splash_contain_header_params_fonts4: {
    fontSize: 15,
    left: 10,
    color: 'white',
    fontFamily: 'PingFang SC Regular',
    borderRadius: 5,
    height: 25,
    textAlignVertical: 'center',
    textAlign: 'center',
    backgroundColor: '#08dfd5b8',
  },
});

export default PersonalProfil;
