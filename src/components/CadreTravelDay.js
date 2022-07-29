import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

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
  const StartWelcomeBrave = useRef(new Animated.Value(64)).current;

  const ShowTitleidbus = () => {
    Animated.sequence([
      Animated.timing(StartWelcomeBrave, {
        toValue: 25,
        duration: 230,
        useNativeDriver: true,
      }),
    ]).start();

    setTimeout(() => {
      HideTitleidbus();
    }, 2000);
  }

  const HideTitleidbus = () => {
    Animated.sequence([
      Animated.timing(StartWelcomeBrave, {
        toValue: 64,
        duration: 230,
        useNativeDriver: true,
      }),
    ]).start();
  }


  return (
    <TouchableOpacity
      style={styles.ui_splash_global_contain_global}
      onPressIn={ShowTitleidbus}
      onPressOut={ShowTitleidbus}>
      <View style={styles.ui_splash_global_contain_second_info_cadre_logo}>
        <View style={styles.ui_splash_global_contain_first_info_ticket}>
          <Animated.View
            style={[
              styles.ui_splash_global_contain_fouth_info_ticket,
              {translateY: StartWelcomeBrave},
            ]}>
            <Text style={styles.ui_splash_global_contain_config_fonts9}>
              {Titleidbus}
            </Text>
          </Animated.View>
          <View style={styles.ui_splash_global_contain_first_info_cadre_logo}>
            <FontAwesomeIcon icon={Titlebusico} size={55} color="#000000b3" />
            <Text style={styles.ui_splash_global_contain_config_fonts4}>
              {Titlebus}
            </Text>
          </View>
        </View>
        <View style={styles.ui_splash_global_contain_first_info_travel}>
          <View style={styles.ui_splash_global_contain_wrapped_info_ticket}>
            <View style={styles.ui_splash_global_contain_first_info_item}>
              <Text style={styles.ui_splash_global_contain_config_fonts3}>
                Départ:
              </Text>
              <Text style={styles.ui_splash_global_contain_config_fonts2}>
                {Titledepart}-{Titledestination}
              </Text>
            </View>
            <View style={styles.ui_splash_global_contain_first_info_item}>
              <Text style={styles.ui_splash_global_contain_config_fonts3}>
                Validation:
              </Text>
              <Text style={styles.ui_splash_global_contain_config_fonts2}>
                {Titlemodevalidation}
              </Text>
            </View>
            <View style={styles.ui_splash_global_contain_first_info_item}>
              <Text style={styles.ui_splash_global_contain_config_fonts3}>
                Statut:
              </Text>
              <View style={styles.ui_splash_global_contain_second_info_item}>
                <Text style={styles.ui_splash_global_contain_config_fonts6}>
                  {Titlereste}(occupée)
                </Text>
                <Text style={styles.ui_splash_global_contain_config_fonts7}>
                  /
                </Text>
                <Text style={styles.ui_splash_global_contain_config_fonts8}>
                  {Titleplace}(reste)
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.ui_splash_global_contain_wrapped_info_ticket}>
            <View style={styles.ui_splash_global_contain_first_info_item}>
              <Text style={styles.ui_splash_global_contain_config_fonts3}>
                Ticket:
              </Text>
              <Text style={styles.ui_splash_global_contain_config_fonts2}>
                {Titleprice}
              </Text>
            </View>
            <View style={styles.ui_splash_global_contain_first_info_item}>
              <Text style={styles.ui_splash_global_contain_config_fonts3}>
                Heure:
              </Text>
              <Text style={styles.ui_splash_global_contain_config_fonts2}>
                {Titleheure}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.ui_splash_global_contain_third_info_cadre_logo}
        activeOpacity={0.5}>
        <FontAwesomeIcon icon={faEllipsisH} size={30} color="white" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ui_splash_global_contain_global: {
    margin: 5,
    width: 320,
    height: 210,
    flexDirection: 'column',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0061aba6',
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
    color: 'white',
    padding: 3,
    borderRadius: 100,
    backgroundColor: '#ffc107',
    height: 23,
    textAlignVertical: 'center',
    fontSize: 13,
  },
  ui_splash_global_contain_config_fonts3: {
    color: 'white',
    padding: 3,
    borderRadius: 5,
    height: 23,
    textAlignVertical: 'center',
    fontSize: 12,
    textTransform: 'uppercase',
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
  ui_splash_global_contain_config_fonts6: {
    color: 'white',
    padding: 3,
    borderRadius: 100,
    backgroundColor: '#f44336',
    height: 23,
    textAlignVertical: 'center',
    fontSize: 10,
  },
  ui_splash_global_contain_config_fonts7: {
    color: 'white',
    fontSize: 12,
  },
  ui_splash_global_contain_config_fonts8: {
    color: 'white',
    padding: 3,
    borderRadius: 100,
    backgroundColor: '#8bc34a',
    height: 23,
    textAlignVertical: 'center',
    fontSize: 10,
  },
  ui_splash_global_contain_config_fonts9: {
    color: '#000000d1',
    padding: 5,
    borderRadius: 2,
    backgroundColor: 'white',
    height: 23,
    textAlignVertical: 'center',
    fontSize: 13,
    width: 80,
    textAlign: 'center',
    borderRadius: 5,
  },
  ui_splash_global_contain_first_info_ticket: {
    margin: 3,
    width: 110,
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
    backgroundColor: 'white',
  },
  ui_splash_global_contain_second_info_cadre_logo: {
    margin: 3,
    alignItems: 'center',
    flexDirection: 'row',
  },
  ui_splash_global_contain_third_info_cadre_logo: {
    alignItems: 'center',
    flexDirection: 'row',
    width: 50,
    height: 50,
    backgroundColor: '#ffeb3b',
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
  ui_splash_global_contain_second_info_item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 2,
    marginLeft: 2,
    marginRight: 5,
  },
  ui_splash_global_contain_fouth_info_ticket: {
    margin: 3,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    transform: [{translateY: 68}],
  },
});

export default CadreTravelDay;
