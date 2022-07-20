import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CadreTravelDay = props => {
  const {
    Titleheure,
    Titledepart,
    Titledestination,
    Titlevillearret,
    Titlemodevalidation,
    Titlebusico,
    Titleticketico,
    Titleprice,
    Titleidbus,
    Titlechauffeur,
  } = props;

  return (
    <View style={styles.ui_splash_global_contain_global}>
      <ScrollView style={styles.ui_splash_global_contain_first_info_travel}>
        <View style={styles.ui_splash_global_contain_first_info_item}>
          <Text style={styles.ui_splash_global_contain_config_fonts2}>
            Départ:
          </Text>
          <Text style={styles.ui_splash_global_contain_config_fonts3}>
            {Titledepart}
          </Text>
        </View>
        <View style={styles.ui_splash_global_contain_first_info_item}>
          <Text style={styles.ui_splash_global_contain_config_fonts2}>
            Destination:
          </Text>
          <Text style={styles.ui_splash_global_contain_config_fonts3}>
            {Titledestination}
          </Text>
        </View>
        <View style={styles.ui_splash_global_contain_first_info_item}>
          <Text style={styles.ui_splash_global_contain_config_fonts2}>
            Trajet:
          </Text>
          <Text style={styles.ui_splash_global_contain_config_fonts3}>
            {Titledepart}-{Titledestination}
          </Text>
        </View>
        <View style={styles.ui_splash_global_contain_first_info_item}>
          <Text style={styles.ui_splash_global_contain_config_fonts2}>
            Ville d'arret:
          </Text>
          <Text style={styles.ui_splash_global_contain_config_fonts1}>
            Melon, Nkongsamba, Loum, Manjo, Bafang
          </Text>
        </View>
        <View style={styles.ui_splash_global_contain_first_info_item}>
          <Text style={styles.ui_splash_global_contain_config_fonts2}>
            Mode de validation:
          </Text>
          <Text style={styles.ui_splash_global_contain_config_fonts3}>
            {Titlemodevalidation}
          </Text>
        </View>
        <View style={styles.ui_splash_global_contain_first_info_item}>
          <Text style={styles.ui_splash_global_contain_config_fonts2}>
            Chauffeur:
          </Text>
          <Text style={styles.ui_splash_global_contain_config_fonts3}>
            {Titlechauffeur}
          </Text>
        </View>
      </ScrollView>
      <View style={styles.ui_splash_global_contain_first_info_ticket}>
        <View style={styles.ui_splash_global_contain_first_info_cadre_logo}>
          <FontAwesome5 name={Titlebusico} size={55} color="#080808a3" />
          <Text style={styles.ui_splash_global_contain_config_fonts4}>
            Porteur
          </Text>
        </View>
        <View style={styles.ui_splash_global_contain_third_info_cadre_logo}>
          <Text>Bus</Text>
          <Text style={styles.ui_splash_global_contain_config_fonts5}>
            {Titleidbus}
          </Text>
        </View>
        <View style={styles.ui_splash_global_contain_second_info_cadre_logo}>
          <FontAwesome5 name={Titleticketico} size={18} color="#080808a3" />
          <Text style={styles.ui_splash_global_contain_config_fonts5}>
            Ticket {Titleprice}
          </Text>
        </View>
        <View style={styles.ui_splash_global_contain_third_info_cadre_logo}>
          <Text>Départ</Text>
          <Text style={styles.ui_splash_global_contain_config_fonts5}>
            {Titleheure}h..
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_global_contain_global: {
    margin: 5,
    width: 400,
    height: 200,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#ffeb3b2e',
  },
  ui_splash_global_contain_first_info_travel: {
    margin: 3,
    width: 260,
    height: 190,
  },
  ui_splash_global_contain_first_info_item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 2,
    marginLeft: 5,
    marginRight: 5,
  },
  ui_splash_global_contain_config_fonts1: {
    width: 100,
    fontFamily: 'Foundation',
    color: '#00000094',
    paddingBottom: 2,
  },
  ui_splash_global_contain_config_fonts2: {
    fontFamily: 'Snippet-Regular',
    color: '#000000bf',
    padding: 3,
    borderRadius: 100,
    backgroundColor: '#00bcd41c',
    height: 27,
  },
  ui_splash_global_contain_config_fonts3: {
    fontFamily: 'Fontisto',
    color: '#00000094',
    height: 17,
  },
  ui_splash_global_contain_config_fonts4: {
    fontFamily: 'Fontisto',
    color: '#000000ad',
    fontSize: 12,
  },
  ui_splash_global_contain_config_fonts5: {
    fontFamily: 'Fontisto',
    color: '#000000ad',
    fontSize: 12,
    left: 10,
  },
  ui_splash_global_contain_first_info_ticket: {
    margin: 3,
    width: 140,
    height: 190,
    alignItems: 'center',
    borderColor: '#0808081a',
    borderWidth: 0.4,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  ui_splash_global_contain_first_info_cadre_logo: {
    margin: 3,
    width: 100,
    height: 98,
    borderRadius: 15,
    borderBottomEndRadius: 100,
    borderBottomStartRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f44336a3',
  },
  ui_splash_global_contain_second_info_cadre_logo: {
    margin: 3,
    alignItems: 'center',
    flexDirection: 'row',
    width: '95%',
  },
  ui_splash_global_contain_third_info_cadre_logo: {
    margin: 3,
    alignItems: 'center',
    flexDirection: 'row',
    width: '95%',
  },
});

export default CadreTravelDay;
