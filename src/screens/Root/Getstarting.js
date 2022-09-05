import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  Image,
  ScrollView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faLeftLong,
  faBezierCurve,
  faMinus,
  faUserNurse,
} from '@fortawesome/free-solid-svg-icons';

const Getstarting = ({navigation}) => {
  const NouveauMoveMaker = useRef(new Animated.Value(-100)).current;
  const ContsMoveMaker = useRef(new Animated.Value(30)).current;
  const CCMoveMaker = useRef(new Animated.Value(0)).current;

  const gotoBackHome = () => {
    navigation.goBack('Launch Home');
  };

  const gotoGrantstarting = () => {
    navigation.navigate('admin');
  };

  const gotoGConnecting = () => {
    navigation.navigate('Connecting');
  };

  useEffect(() => {
    Animated.sequence([
      Animated.timing(NouveauMoveMaker, {
        toValue: 2,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(ContsMoveMaker, {
        toValue: 2,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(CCMoveMaker, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, [NouveauMoveMaker, ContsMoveMaker, CCMoveMaker]);

  return (
    <ScrollView style={styles.ui_splash_todo_contain}>
      <View style={styles.ui_splash_contain_welcome_header_message}>
        <View style={styles.ui_splash_contain_welcome_globe_conts}>
          <Animated.View
            style={[
              styles.ui_splash_contain_globe_logo_welcome_message,
              {transform: [{translateX: NouveauMoveMaker}]},
            ]}>
            <Text style={styles.ui_splash_contain_widget_acxios}>NOUVEAU</Text>
          </Animated.View>
          <View style={styles.ui_splash_contain_fuck_logo_welcome_message}>
            <Image
              source={require('../../../assets/Hi.jpg')}
              style={styles.ui_splash_contain_logo_welcome_message}
              resizeMode="contain"
            />
            <Animated.View
              style={[
                styles.ui_splash_contain_welcome_body_conts,
                {transform: [{translateY: ContsMoveMaker}]},
              ]}></Animated.View>
          </View>
        </View>
      </View>
      <View style={styles.ui_splash_below_title_message}>
        <Text style={styles.ui_splash_below_text_message}>
          Concernant l'agence, vous voulez peut être
        </Text>
      </View>
      <Animated.View
        style={[styles.ui_splash_below_title_message3, {opacity: CCMoveMaker}]}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.ui_splash_box_create_title_message}
          onPress={gotoGConnecting}>
          <FontAwesomeIcon icon={faUserNurse} color="#0000009c" />
          <Text style={styles.ui_splash_contain_other_button_goto}>
            me connecter.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ui_splash_contain_header_connect_button}
          activeOpacity={0.6}
          onPress={gotoGrantstarting}>
          <FontAwesomeIcon icon={faBezierCurve} color="white" />
          <Text style={styles.ui_splash_contain_connect_button}>
            créez une !
          </Text>
        </TouchableOpacity>
      </Animated.View>
      <View style={styles.ui_splash_below_title_message2}>
        <TouchableOpacity
          style={styles.ui_splash_contain_go_back_button}
          activeOpacity={0.6}
          onPress={gotoBackHome}>
          <FontAwesomeIcon icon={faLeftLong} size={24} color="#000000cc" />
        </TouchableOpacity>
        <FontAwesomeIcon
          icon={faMinus}
          size={22}
          color="#0000009c"
          style={styles.ui_splash_support_slips_temps}
        />
        <TouchableOpacity
          style={styles.ui_splash_button_goto_starting}
          activeOpacity={0.8}>
          <Text style={styles.ui_splash_button_goto_text_starting}>
            creer un compte associé à une agence
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ui_splash_todo_contain: {
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
  },
  ui_splash_contain_welcome_header_message: {
    width: '100%',
    height: 160,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#00000017',
  },
  ui_splash_contain_welcome_globe_conts: {
    width: 265,
    height: 160,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  ui_splash_contain_widget_acxios: {
    fontSize: 30,
    fontFamily: 'Roboto-Thin',
  },
  ui_splash_contain_globe_logo_welcome_message: {
    width: 160,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffeb3b42',
    transform: [{translateX: -100}],
  },
  ui_splash_contain_fuck_logo_welcome_message: {
    width: 105,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  ui_splash_contain_logo_welcome_message: {
    width: 95,
    height: 90,
    top: 50,
  },
  ui_splash_contain_welcome_body_conts: {
    width: 90,
    height: 90,
    borderWidth: 1,
    borderColor: '#1010102e',
    borderRadius: 100,
    top: 55,
  },
  body: {
    color: 'red',
    transform: [{rotate: '-45deg'}],
  },
  ui_splash_below_title_message: {
    width: '100%',
    height: 40,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  ui_splash_below_title_message2: {
    width: '100%',
    height: 40,
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  ui_splash_below_title_message3: {
    width: '100%',
    height: 50,
    marginTop: 14,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  ui_splash_below_text_message: {
    fontSize: 16,
    fontFamily: 'Hind-Light',
    color: '#000000b3',
  },
  ui_splash_box_create_title_message: {
    width: 125,
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    left: 5,
    backgroundColor: '#00bcd42b',
    flexDirection: 'row',
  },
  ui_splash_button_goto_starting: {
    height: 33,
    textAlignVertical: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ui_splash_support_slips_temps: {
    transform: [{rotate: '-90deg'}],
  },
  ui_splash_button_goto_text_starting: {
    fontSize: 13,
    fontFamily: 'Roboto-Light',
    marginRight: 5,
    top: -1,
    color: '#000000a1',
  },
  ui_splash_contain_other_button_goto: {
    color: '#0000009c',
    fontFamily: 'Roboto-Regular',
    left: 5,
    top: -1,
  },
  ui_splash_contain_go_back_button: {
    width: 40,
    height: 30,
    left: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ui_splash_contain_go_back_text: {
    position: 'relative',
    left: 5,
    fontSize: 16,
    top: -3,
    color: 'white',
  },
  ui_splash_contain_header_connect_button: {
    width: 120,
    height: 40,
    position: 'relative',
    flexDirection: 'row',
    backgroundColor: '#f44336',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f44336',
    left: -5,
  },
  ui_splash_contain_connect_button: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'PontanoSans-Regular',
    color: 'white',
    fontSize: 15,
    left: 5,
    top: -1,
  },
});

export default Getstarting;
