import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';

const CadreTravelDay = props => {
  const {
    Titleheure,
    Titledepart,
    Titledestination,
    Titlemodevalidation,
    Titlebusico,
    Titleprice,
    Titleidbus,
    Titlebus,
    Titlereste,
    Titleplace,
  } = props;

  return (
    <View style={styles.ui_splash_global_contain_global}>
      <View style={styles.ui_splash_global_contain_first_info_travel}>
        <View style={styles.ui_splash_global_contain_logo_bus}>
          <FontAwesomeIcon icon={Titlebusico} color="white" size={20} />
        </View>
        <View style={styles.ui_splash_global_contain_letter_title}>
          <Text style={styles.ui_splash_global_contain_letter_title_bus}>
            c
          </Text>
          <Text style={styles.ui_splash_global_contain_letter_title_bus}>
            o
          </Text>
          <Text style={styles.ui_splash_global_contain_letter_title_bus}>
            a
          </Text>
          <Text style={styles.ui_splash_global_contain_letter_title_bus}>
            s
          </Text>
          <Text style={styles.ui_splash_global_contain_letter_title_bus}>
            t
          </Text>
          <Text style={styles.ui_splash_global_contain_letter_title_bus}>
            e
          </Text>
          <Text style={styles.ui_splash_global_contain_letter_title_bus}>
            r
          </Text>
        </View>
      </View>
      <View style={styles.ui_splash_global_contain_second_info_travel}>
        <Text style={styles.ui_splash_global_contain_config_fonts2}>
          Trajet:
        </Text>
        <Text style={styles.ui_splash_global_contain_config_fonts3}>
          {Titledepart}-{Titledestination}
        </Text>
      </View>
      <View style={styles.ui_splash_global_contain_second_info_travel}>
        <Text style={styles.ui_splash_global_contain_config_fonts2}>
          Ticket:
        </Text>
        <Text style={styles.ui_splash_global_contain_config_fonts3}>
          {Titleprice}
        </Text>
      </View>
      <View style={styles.ui_splash_global_contain_second_info_travel}>
        <Text style={styles.ui_splash_global_contain_config_fonts2}>
          Validation:
        </Text>
        <Text style={styles.ui_splash_global_contain_config_fonts3}>
          {Titlemodevalidation}
        </Text>
      </View>
      <View style={styles.ui_splash_global_contain_second_info_travel}>
        <Text style={styles.ui_splash_global_contain_config_fonts1}>
          Statut:
        </Text>
        <View style={styles.ui_splash_global_contain_second_info_item}>
          <Text style={styles.ui_splash_global_contain_config_fonts6}>
            {Titlereste}(occupée)
          </Text>
          <Text style={styles.ui_splash_global_contain_config_fonts7}>/</Text>
          <Text style={styles.ui_splash_global_contain_config_fonts8}>
            {Titleplace}(reste)
          </Text>
        </View>
      </View>
      <Text style={styles.ui_splash_global_contain_config_fonts4}>
        Départ:{Titlereste}H
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_global_contain_global: {
    margin: 5,
    width: 380,
    height: 210,
    flexDirection: 'column',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#0000007a',
    backgroundColor: '#8bc34a',
  },
  ui_splash_global_contain_first_info_travel: {
    width: 380,
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#cddc392b',
  },
  ui_splash_global_contain_letter_title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: -5,
  },
  ui_splash_global_contain_letter_title_bus: {
    width: 25,
    height: 23,
    justifyContent: 'space-between',
    backgroundColor: '#ff9007',
    borderRadius: 100,
    fontSize: 18,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: 'white',
  },
  ui_splash_global_contain_logo_bus: {
    width: 40,
    height: 30,
    justifyContent: 'center',
    backgroundColor: '#8bc34a',
    borderRadius: 100,
    alignItems: 'center',
    left: 5,
  },
  ui_splash_global_contain_five_info_travel: {
    width: 200,
    height: 160,
    justifyContent: 'space-between',
  },
  ui_splash_global_contain_config_fonts6: {
    color: 'white',
    padding: 3,
    borderRadius: 100,
    backgroundColor: '#f44336',
    height: 23,
    textAlignVertical: 'center',
    fontSize: 10,
    fontFamily: '',
  },
  ui_splash_global_contain_config_fonts7: {
    color: 'white',
    fontSize: 12,
  },
  ui_splash_global_contain_config_fonts8: {
    color: 'white',
    padding: 3,
    borderRadius: 100,
    backgroundColor: '#cddc39',
    height: 23,
    textAlignVertical: 'center',
    fontSize: 10,
  },
  ui_splash_global_contain_second_info_travel: {
    width: 380,
    height: 32,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ffeb3b1f',
  },
  ui_splash_global_contain_second_info_item: {
    height: 90,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ui_splash_global_contain_config_fonts1: {
    fontFamily: 'Nunito-ExtraLight',
    fontSize: 17,
    textTransform: 'uppercase',
    color: 'white',
  },
  ui_splash_global_contain_config_fonts2: {
    fontFamily: 'Nunito-ExtraLight',
    fontSize: 15,
    textTransform: 'uppercase',
    color: 'white',
  },
  ui_splash_global_contain_config_fonts3: {
    fontFamily: 'SairaCondensed-Thin',
    fontSize: 14,
    textTransform: 'uppercase',
    color: 'white',
  },
  ui_splash_global_contain_config_fonts4: {
    fontFamily: 'PontanoSans-Regular',
    fontSize: 14,
    color: 'white',
    top: 20,
    left: 2,
    fontWeight: '800'
  },
});

export default CadreTravelDay;
