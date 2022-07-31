import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  StatusBar,
  ScrollView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPaperPlane, faLock } from '@fortawesome/free-solid-svg-icons';
import {useDispatch} from 'react-redux';
import {Login} from '../../store/Log/actions'

import InputGc from '../../components/InputGc';
import Space from '../../components/Space';

const Getconnecting = ({navigation}) => {
  const EndWelcomeBrave = useRef(new Animated.Value(200)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(EndWelcomeBrave, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, [EndWelcomeBrave]);

  const goWelcomeBrave = () => {
    navigation.navigate('Get starting');
  };

  const dispatch = useDispatch();

  const FakeLog = () =>{
    dispatch(Login('rick', '123'));
  }
  return (
    <ScrollView style={styles.ui_splash_global_app_contain}>
      <StatusBar
        animated={true}
        backgroundColor="#7cc3bc"
        barStyle="default"
        showHideTransition="fade"
        hidden={false}
      />
      <View style={styles.ui_splash_global_app_header_contain}>
        <View style={styles.ui_splash_contain_header_logo_started}>
          <Text style={styles.ui_splash_logo_started}>Bienvenue</Text>
          <Text
            style={[
              styles.ui_splash_logo_started,
              {transform: [{rotateZ: '150deg'}]},
            ]}>
            :)
          </Text>
        </View>
        <Animated.View style={styles.ui_splash_started_title_welcome}>
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
        <Space Hwidth={10} />
        <InputGc
          title="Utilisateur"
          keyboard="alphabetic"
          Placeholder="ex. cafrey"
        />
        <InputGc
          title="Mot de passe"
          keyboard="alphabetic"
          Placeholder=""
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.ui_splash_contain_go_sucess_button}
          activeOpacity={0.6} onPress={FakeLog}>
          <Text style={styles.ui_splash_contain_go_sucess_text}>
            connexion 
          </Text>
          <FontAwesomeIcon icon={faLock} size={16} color="white" />
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
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
    top: 22,
    padding: 5,
  },
  ui_splash_started_font_config1: {
    fontSize: 14,
    color: 'white',
  },
  ui_splash_started_title_contracts: {
    width: '100%',
    height: 253,
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
  ui_splash_contain_go_sucess_button: {
    width: 115,
    height: 38,
    position: 'relative',
    left: 22,
    textDecorationLine: 'underline',
    flexDirection: 'row',
    backgroundColor: '#ff6a5f',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 500,
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  ui_splash_contain_go_back_text: {
    position: 'relative',
    left: -2,
    fontSize: 13,
    top: -1,
    color: 'white',
  },
  ui_splash_contain_go_sucess_text: {
    position: 'relative',
    fontSize: 15,
    color: 'white',
    fontFamily: 'EvilIcons',
    left: -7,
  },
});

export default Getconnecting;
