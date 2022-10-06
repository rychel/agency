import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ItemGuichetSaved = props => {
  const {Numero, TypeGuichet, Depart, Destination} = props;

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
          style={styles.ui_splash_contain_header_administration_awesome_baps}>
          <Text style={styles.ui_splash_contain_header_ticket_fonts1}>
            {TypeGuichet[0]}
          </Text>
        </View>
      </View>
      <View style={styles.ui_splash_global_animated_ico_guichet_board}>
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
    fontSize: 18,
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
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    left: 10,
  },
  ui_splash_contain_header_administration_trajet: {
    flexDirection: 'row',
    width: '50%',
    backgroundColor: '#ffc10726',
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    top: -2,
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
    height: 30,
    width: 30,
    margin: 8,
  },
  ui_splash_contain_header_ticket_fonts1: {
    fontSize: 23,
    color: 'white',
    fontFamily: 'Quicksand-VariableFont_wght',
    fontWeight: '700',
  },
  ui_splash_global_bus_soup_contain_registered_global_contain_title: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 1,
    flexDirection: 'row',
  },
  ui_splash_global_animated_ico_guichet_board: {
    width: '80%',
  },
});

export default ItemGuichetSaved;
