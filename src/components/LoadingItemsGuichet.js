import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ItemGuichetSaved = props => {
  const {Numero} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.ui_splash_contain_header_administration_item_config}>
      <View
        style={
          styles.ui_splash_contain_header_animate_administration_classique_baps
        }>
        <View
          style={
            styles.ui_splash_contain_header_administration_spin_awesome_baps
          }>
          <View
            style={
              styles.ui_splash_contain_header_administration_awesome_baps
            }></View>
        </View>
      </View>
      <View style={styles.ui_splash_global_animated_ico_guichet_board}>
        <View
          style={
            styles.ui_splash_global_bus_soup_contain_registered_global_contain_title
          }>
          <View style={styles.ui_splash_contain_header_administration_numero}>
            <Text style={styles.ui_splash_contain_header_transition_numero}>
              Guichet {Numero}
            </Text>
          </View>
          <View
            style={
              styles.ui_splash_contain_header_administration_trajet
            }></View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_administration_item_config: {
    width: '99%',
    height: 52,
    flexDirection: 'row',
    margin: 2,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    marginBottom: 30,
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
    backgroundColor: '#b7b7b71c',
  },
  ui_splash_contain_header_transition_numero: {
    fontSize: 18,
    color: '#706e6e',
    fontFamily: 'PingFang SC Regular',
    opacity: 0,
  },
  ui_splash_contain_header_administration_trajet: {
    flexDirection: 'row',
    width: '58%',
    backgroundColor: '#b7b7b71c',
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    left: -1,
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
    marginRight: 2,
    width: 60,
    height: 50,
  },
  ui_splash_contain_header_administration_spin_awesome_baps: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: 45,
    backgroundColor: '#b7b7b71c',
    borderRadius: 100,
  },
  ui_splash_contain_header_administration_awesome_baps: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
    margin: 8,
  },
  ui_splash_global_bus_soup_contain_registered_global_contain_title: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 1,
    flexDirection: 'row',
  },
  ui_splash_global_animated_ico_guichet_board: {
    width: '77%',
  },
});

export default ItemGuichetSaved;
