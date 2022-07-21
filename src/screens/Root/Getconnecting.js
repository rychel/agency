import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  StatusBar,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Getconnecting = ({navigation}) => {
  const StartWelcomeBrave = useRef(new Animated.Value(0)).current;
  const EndWelcomeBrave = useRef(new Animated.Value(200)).current;
  const FlickedLogo = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(StartWelcomeBrave, {
        toValue: -78,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(FlickedLogo, {
        toValue: 90,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(EndWelcomeBrave, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
      }),
    ]).start();
  }, [EndWelcomeBrave, FlickedLogo, StartWelcomeBrave]);

  const goWelcomeBrave = () => {
    navigation.navigate('Get starting');
  };

  return (
    <View style={styles.ui_splash_global_app_contain}>
      <StatusBar
        animated={true}
        backgroundColor="#7cc3bc"
        barStyle="default"
        showHideTransition="fade"
        hidden={false}
      />
      <View style={styles.ui_splash_global_app_header_contain}>
        <View style={styles.ui_splash_contain_header_logo_started}>
          <Animated.Text style={[styles.ui_splash_logo_started]}>
            Bienvenue
          </Animated.Text>
          <Animated.Text
            style={[
              styles.ui_splash_logo_started,
              {transform: [{rotateZ: '150deg'}]},
            ]}>
            :)
          </Animated.Text>
        </View>
        <Animated.View
          style={[
            styles.ui_splash_started_title_welcome,
            {transform: [{translateY: StartWelcomeBrave}]},
          ]}>
          <Text style={styles.ui_splash_started_font_config1}>
            Connecte toi à ton agence.
          </Text>
        </Animated.View>
      </View>
      <Animated.View
        style={[
          styles.ui_splash_started_title_contracts,
          {transform: [{translateY: EndWelcomeBrave}]},
        ]}>
        <TouchableOpacity activeOpacity={0.7} onPress={goWelcomeBrave}>
          <View style={styles.ui_splash_started_container_button_welcome}>
            <View style={styles.ui_splash_started_button_welcome}>
              <Text style={styles.ui_splash_started_button_text}>
                Commencer
              </Text>
              <FontAwesome5 name="arrow-right" size={19} color="white" />
            </View>
          </View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_global_app_contain: {
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
  },
  ui_splash_global_app_header_contain: {
    height: 230,
    width: Dimensions.get('window').width,
    marginBottom: 20,
    backgroundColor: '#7cc3bc',
    justifyContent: 'center',
    position: 'relative',
  },
  ui_splash_contain_header_logo_started: {
    alignSelf: 'center',
    height: 90,
    backgroundColor: 'transparent',
    overflow: 'hidden',
    top: -20,
    left: -40,
    flexDirection: 'row',
  },
  ui_splash_logo_started: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 35,
    fontFamily: 'materialcommunityIcons',
  },
  ui_splash_started_title_welcome: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    alignSelf: 'center',
    height: 30,
    backgroundColor: '#7addd3c9',
    marginTop: 10,
    marginBottom: 10,
    position: 'relative',
    fontFamily: 'cursive',
    fontSize: 20,
    borderRadius: 100,
    top: 100,
    padding: 5,
  },
  ui_splash_started_font_config1: {
    fontSize: 14,
    color: 'white',
  },
  ui_splash_started_title_contracts: {
    width: '100%',
    height: 153,
    marginTop: -58,
    position: 'relative',
    backgroundColor: 'white',
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
  },
  ui_splash_started_text_contracts1: {
    color: '#000000c4',
    fontSize: 16,
    fontFamily: 'Foundation',
    textAlign: 'left',
    position: 'relative',
    top: 5,
    marginTop: 18,
    left: 12,
    height: 20,
  },
  ui_splash_started_contain_text_contracts2: {
    left: 10,
    fontSize: 13,
    width: 160,
    padding: 3,
    borderRadius: 100,
  },
  ui_splash_started_text_contracts2: {
    color: '#f44336bd',
    textDecorationLine: 'underline',
    fontSize: 15,
    width: '88%',
    fontFamily: 'Foundation',
    marginTop: 5,
  },
  ui_splash_started_container_button_welcome: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    position: 'relative',
    left: 10,
    fontFamily: 'cursive',
    fontSize: 20,
    borderRadius: 5,
    top: -5,
  },
  ui_splash_started_button_welcome: {
    width: 120,
    height: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#009688d1',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    left: 80,
    top: 10,
  },
  ui_splash_started_button_text: {
    fontSize: 15,
    marginRight: 5,
    fontFamily: 'Feather',
    position: 'relative',
    top: -1,
    color: 'white',
  },
});

export default Getconnecting;
