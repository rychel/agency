import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CadreTravelDay = props => {
  const {
    Titleheure,
    Titledepart,
    Titledestination,
    Titlemodevalidation,
    Titlebusico,
    Titleprice,
    Titleidbus,
  } = props;

  return (
    <View style={styles.ui_splash_global_contain_global}>
      <View style={styles.ui_splash_global_contain_second_info_cadre_logo}>
        <View style={styles.ui_splash_global_contain_first_info_ticket}>
          <View style={styles.ui_splash_global_contain_first_info_cadre_logo}>
            <Text style={styles.ui_splash_global_contain_config_fonts4}>
              {Titleidbus}
            </Text>
            <FontAwesome5 name={Titlebusico} size={55} color="#000000b3" />
            <Text style={styles.ui_splash_global_contain_config_fonts4}>
              Porteur
            </Text>
          </View>
        </View>
        <View style={styles.ui_splash_global_contain_first_info_travel}>
          <View style={styles.ui_splash_global_contain_wrapped_info_ticket}>
            <View style={styles.ui_splash_global_contain_first_info_item}>
              <Text style={styles.ui_splash_global_contain_config_fonts2}>
                Départ: {Titledepart}-{Titledestination}
              </Text>
            </View>
            <View style={styles.ui_splash_global_contain_first_info_item}>
              <Text style={styles.ui_splash_global_contain_config_fonts2}>
                Validation: {Titlemodevalidation}
              </Text>
            </View>
          </View>
          <View style={styles.ui_splash_global_contain_wrapped_info_ticket}>
            <View style={styles.ui_splash_global_contain_first_info_item}>
              <Text style={styles.ui_splash_global_contain_config_fonts2}>
                Ticket: {Titleprice}
              </Text>
            </View>
            <View style={styles.ui_splash_global_contain_first_info_item}>
              <Text style={styles.ui_splash_global_contain_config_fonts2}>
                Heure: {Titleheure}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.ui_splash_global_contain_third_info_cadre_logo}
        activeOpacity={0.5}>
        <Text style={styles.ui_splash_global_contain_config_fonts5}>
          Modifier
        </Text>
        <FontAwesome5 name="ellipsis-h" size={30} color="#000000b3" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_global_contain_global: {
    margin: 5,
    width: 320,
    height: 210,
    flexDirection: 'column',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.2,
  },
  ui_splash_global_contain_first_info_travel: {
    width: 200,
    height: 160,
    justifyContent: 'space-between',
  },
  ui_splash_global_contain_first_info_item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 2,
    marginLeft: 2,
    marginRight: 5,
  },
  ui_splash_global_contain_config_fonts1: {
    width: 100,
    fontFamily: 'Foundation',
    color: '#00000094',
    paddingBottom: 2,
  },
  ui_splash_global_contain_config_fonts2: {
    fontFamily: 'Feather',
    color: '#f44336',
    padding: 3,
    borderRadius: 5,
    backgroundColor: '#ddd7d730',
    height: 23,
    textAlignVertical: 'center',
    fontSize: 13,
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
    left: -4,
  },
  ui_splash_global_contain_first_info_ticket: {
    margin: 3,
    width: 140,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: '#ffeb3b61',
  },
  ui_splash_global_contain_second_info_cadre_logo: {
    margin: 3,
    alignItems: 'center',
    flexDirection: 'row',
  },
  ui_splash_global_contain_third_info_cadre_logo: {
    alignItems: 'center',
    flexDirection: 'row',
    width: 100,
    height: 50,
    backgroundColor: 'yellow',
    borderRadius: 100,
    top: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ui_splash_global_contain_wrapped_info_ticket: {
    margin: 3,
    flexDirection: 'column',
    width: '90%',
  },
});

export default CadreTravelDay;
