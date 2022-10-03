import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ItemGuichetSaved = props => {
  const {Numero, TypeGuichet, Depart, Destination} = props;
  const [icoGuichet, setIcoGuichet] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setIcoGuichet(TypeGuichet[0]);
    }, 4000);
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.ui_splash_contain_header_administration_item_config}>
      <View
        style={
          TypeGuichet == 'Classique'
            ? styles.ui_splash_contain_header_animate_administration_classique_baps
            : styles.ui_splash_contain_header_animate_administration_vip_baps
        }>
        <View
          style={
            icoGuichet == ''
              ? styles.ui_splash_contain_header_administration_awesome_baps
              : styles.ui_splash_contain_header_animated_ico_board
          }>
          <Text
            style={
              icoGuichet == ''
                ? styles.ui_splash_contain_header_ticket_fonts1
                : styles.ui_splash_contain_animated_ico_board
            }>
            {icoGuichet == '' ? TypeGuichet : icoGuichet}
          </Text>
        </View>
      </View>
      <View
        style={
          icoGuichet == ''
            ? styles.ui_splash_global_animated_soup_contain_registered_global_contain_title
            : styles.ui_splash_global_animated_ico_guichet_board
        }>
        <View
          style={
            styles.ui_splash_global_bus_soup_contain_registered_global_contain_title
          }>
          <View style={styles.ui_splash_contain_header_administration_numero}>
            <Text
              style={
                styles.ui_splash_contain_header_administration_awesome_config
              }>
              Guichet {Numero}
            </Text>
          </View>
          <View style={styles.ui_splash_contain_header_administration_trajet}>
            <Text
              style={
                styles.ui_splash_contain_header_administration_awesome_config2
              }
              numberOfLines={1}>
              {Depart}-{Destination}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_administration_item_config: {
    width: '99%',
    height: 50,
    flexDirection: 'row',
    margin: 2,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 30,
  },
  ui_splash_contain_header_administration_awesome_config: {
    fontSize: 16,
    color: '#706e6e',
    fontFamily: 'PingFang SC Regular',
  },
  ui_splash_contain_header_separate_awesome_config: {
    margin: 0,
    fontSize: 20,
    height: 40,
    color: '#706e6e',
    fontFamily: 'Roboto-Thin',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    left: 20,
  },
  ui_splash_contain_header_administration_numero: {
    flexDirection: 'row',
    width: 110,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ui_splash_contain_header_administration_trajet: {
    flexDirection: 'row',
    width: 110,
    backgroundColor: '#ffc10726',
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ui_splash_contain_header_administration_awesome_config2: {
    fontSize: 18,
    color: '#545252',
    fontFamily: 'Roboto-Thin',
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
  },
  ui_splash_contain_header_animate_administration_vip_baps: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 4,
    marginRight: 5,
    backgroundColor: 'green',
    borderRadius: 100,
  },
  ui_splash_contain_header_animate_administration_classique_baps: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 4,
    marginRight: 5,
    backgroundColor: '#03a9f4',
    borderRadius: 100,
  },
  ui_splash_contain_header_administration_awesome_baps: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
    margin: 8,
  },
  ui_splash_contain_header_animated_ico_board: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
    margin: 8,
  },
  ui_splash_contain_header_ticket_fonts1: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'Quicksand-VariableFont_wght',
    fontWeight: '700',
  },
  ui_splash_contain_animated_ico_board: {
    fontSize: 23,
    color: 'white',
    fontFamily: 'Quicksand-VariableFont_wght',
    fontWeight: '700',
  },
  ui_splash_global_bus_soup_contain_registered_global_contain_title: {
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 1,
    flexDirection: 'row',
  },
  ui_splash_global_animated_soup_contain_registered_global_contain_title: {
    overflow: 'hidden',
    width: '70%',
  },
  ui_splash_global_animated_ico_guichet_board: {
    overflow: 'hidden',
    width: '80%',
  },
});

export default ItemGuichetSaved;
