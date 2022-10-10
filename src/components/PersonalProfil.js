import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAngleUp,
  faAngleDown,
  faPen,
} from '@fortawesome/free-solid-svg-icons';

const PersonalProfil = props => {
  const {Titlename, Titlesubname, Titlepost, Titlenumber, onOpen, onClose} =
    props;

  const [replaceicon, setReplaceicon] = useState(false);

  return (
    <View style={styles.ui_splash_contain_header_cadre_logo_profil}>
      <View style={styles.ui_splash_contain_header_cadre_cadre_logo_profil}>
        <View
          style={styles.ui_splash_contain_header_cadre_cadre_logo_profil_ext}>
          <View style={styles.ui_splash_contain_header_globe_logo_profil}>
            <Text style={styles.ui_splash_contain_header_params_fonts6}>
              OP
            </Text>
          </View>
        </View>
        <View
          style={styles.ui_splash_contain_header_cadre_cadre_logo_profil_lxt}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.ui_splash_contain_header_params_modif_profil}>
            <FontAwesomeIcon icon={faPen} size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.ui_splash_contain_header_cadre_ifo_id_profil}>
        <View style={styles.ui_splash_contain_header_cadre_ifo_id_conf}>
          <View style={styles.ui_splash_contain_header_cadre_ifo_id_conf2}>
            <Text style={styles.ui_splash_contain_header_params_fonts1}>
              {Titlename} {Titlesubname}
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
    backgroundColor: '#ff9800',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
    top: -4,
  },
  ui_splash_contain_header_cadre_cadre_logo_profil: {
    width: '100%',
    height: 155,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  ui_splash_contain_header_cadre_cadre_logo_profil_ext: {
    width: '50%',
    height: 155,
    overflow: 'hidden',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ui_splash_contain_header_cadre_cadre_logo_profil_lxt: {
    width: '50%',
    height: 155,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ui_splash_contain_header_globe_logo_profil: {
    width: 70,
    height: 70,
    top: 20,
    left: 5,
    backgroundColor: '#00bcd4',
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#0000000f',
    alignItems: 'center',
    justifyContent: 'center',
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
    fontFamily: 'Roboto-Regular',
  },
  ui_splash_contain_header_params_fonts2: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Snippet-Regular',
    left: 4,
  },
  ui_splash_contain_header_params_modif_profil: {
    alignSelf: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#efcb9638',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  ui_splash_contain_header_params_fonts3: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'PingFang SC Regular',
    borderRadius: 5,
    fontWeight: '100',
    color: 'white',
    position: 'relative',
    marginTop: 5,
    width: 115,
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
    color: '#efefefe0',
    fontFamily: 'PingFang SC Regular',
    borderRadius: 5,
    height: 25,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  ui_splash_contain_header_params_fonts6: {
    fontSize: 25,
    color: 'white',
    fontFamily: 'PingFang SC Regular',
    height: 25,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default PersonalProfil;
