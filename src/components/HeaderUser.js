import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faSearch} from '@fortawesome/free-solid-svg-icons';

const HeaderUser = props => {
  const {Gtitle, Depart, Arrive, onPress, Netstatus} = props;
  const StartWelcomeBrave = useRef(new Animated.Value(-20)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(StartWelcomeBrave, {
        toValue: 10,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [StartWelcomeBrave]);

  return (
    <View style={styles.ui_splash_contain_header_globe}>
      <View style={styles.ui_splash_contain_destination_items_globe_text2}>
        <Animated.View style={{transform: [{translateY: StartWelcomeBrave}]}}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            style={styles.ui_splash_contain_globe_cadre_tags}>
            <FontAwesomeIcon icon={faBars} size={27} color="white" />
          </TouchableOpacity>
        </Animated.View>
      </View>
      <View style={styles.ui_splash_contain_destination_items_contains_globe2}>
        {Netstatus == false ? (
          <View style={styles.ui_splash_contain_destination_globe}>
            <Text style={styles.ui_splash_contain_destination_items_text1}>
              connexion...
            </Text>
          </View>
        ) : (
          <View style={styles.ui_splash_contain_destination_globe}>
            <Text style={styles.ui_splash_contain_destination_items_text1}>
              {Gtitle}
            </Text>
            <Text style={styles.ui_splash_contain_destination_items_text2}>
              {Depart}-{Arrive}
            </Text>
          </View>
        )}
      </View>
      <View style={styles.ui_splash_contain_destination_items_globe_text2}>
        <Text style={styles.ui_splash_contain_destination_items_text3}>
          <FontAwesomeIcon icon={faSearch} size={20} color="white" />
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
    backgroundColor: '#00CDAC',
    flexDirection: 'row',
    height: 55,
    justifyContent: 'center',
  },
  ui_splash_contain_destination_globe: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  ui_splash_contain_globe_cadre_tags: {
    borderRadius: 100,
    width: 60,
    height: 65,
    backgroundColor: '#00CDAC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ui_splash_contain_destination_items_contains_globe2: {
    width: '70%',
    justifyContent: 'center',
    marginLeft: 5,
  },
  ui_splash_contain_destination_items_text1: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'NotoSans-Regular',
    padding: 2,
  },
  ui_splash_contain_destination_items_globe_text2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ui_splash_contain_destination_items_text2: {
    marginLeft: 1,
    marginRight: 10,
    color: 'white',
    borderRadius: 100,
    backgroundColor: '#ffc107',
    width: 106,
    paddingLeft: 5,
    fontFamily: 'PontanoSans-Regular',
    position: 'relative',
    top: -1,
  },
  ui_splash_contain_destination_items_text3: {
    marginLeft: 1,
    marginRight: 10,
  },
});

export default HeaderUser;
