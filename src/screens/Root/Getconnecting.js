import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {useDispatch} from 'react-redux';
import {Login} from '../../store/Log/actions';

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

  const [selectedLanguage, setSelectedLanguage] = useState();

  const dispatch = useDispatch();
  const FakeLog = () => {
    dispatch(Login('rick', '123'));
  };

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
          <Text style={styles.ui_splash_logo_started2}>acxios</Text>
          <Text style={styles.ui_splash_logo_started}>connexion</Text>
        </View>
        <View style={styles.ui_splash_started_title_welcome}>
          <Text style={styles.ui_splash_started_font_config1}>
            Connecte toi à ton agence.
          </Text>
        </View>
      </View>
      <Animated.View
        style={[
          styles.ui_splash_started_title_contracts,
          {transform: [{translateY: EndWelcomeBrave}]},
        ]}>
        <Space Hwidth={0} />
        <InputGc
          title="Utilisateur"
          keyboard="alphabetic"
          Placeholder="ex. cafrey"
        />
        <InputGc
          title="Mot de passe"
          keyboard="alphabetic"
          Placeholder="xxx-xxx"
          secureTextEntry
        />
        <Text style={styles.ui_splash_contain_title_cle_connexion}>se connecter en tant que</Text>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
          themeVariant='light'
          mode='dropdown'
          style={styles.ui_splash_contain_globe_role_connexion}>
          <Picker.Item label="Directeur" value="dir" />
          <Picker.Item label="Caissier" value="cai" />
          <Picker.Item label="Composteur" value="com" />
          <Picker.Item label="Sécrétaire" value="sec" />
          <Picker.Item label="Chauffeur" value="cha" />
        </Picker>
        <TouchableOpacity
          style={styles.ui_splash_contain_go_sucess_button}
          activeOpacity={0.6}
          onPress={FakeLog}>
          <Text style={styles.ui_splash_contain_go_sucess_text}>
            je me connecte
          </Text>
          <FontAwesomeIcon
            icon={faArrowRight}
            size={16}
            color="#f44336"
            style={styles.ui_splash_contain_logo_sucess_button}
          />
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
    width: '100%',
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
    transform: [{rotateZ: '4deg'}],
  },
  ui_splash_logo_started2: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 35,
    fontFamily: 'SairaCondensed-Light',
  },
  ui_splash_started_title_welcome: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    alignSelf: 'center',
    height: 30,
    backgroundColor: '#7addd3c9',
    marginTop: 0,
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
    height: 293,
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
    borderRadius: 100,
  },
  ui_splash_started_text_contracts2: {
    width: '88%',
    height: 100,
    marginTop: 5,
    backgroundColor: 'red',
  },
  ui_splash_contain_go_sucess_button: {
    width: 135,
    height: 45,
    position: 'relative',
    left: 22,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  ui_splash_contain_logo_sucess_button: {
    position: 'relative',
    left: -5,
    top: 1.1,
  },
  ui_splash_contain_go_back_text: {
    position: 'relative',
    left: -2,
    fontSize: 13,
    top: -1,
  },
  ui_splash_contain_go_sucess_text: {
    position: 'relative',
    fontSize: 15,
    color: '#f44336',
    fontFamily: 'PontanoSans-Regular',
    left: -12,
  },
  ui_splash_contain_globe_role_connexion: {
    borderWidth: 1,
    borderColor: 'red',
    color: '#00bcd4',
    width: '98%',
    left: 5,
    fontFamily: 'PontanoSans-Regular',
  },
  ui_splash_contain_title_cle_connexion: {
    position: 'relative',
    fontSize: 14,
    color: '#00000094',
    fontFamily: 'PontanoSans-Regular',
    left: 20,
  },
});

export default Getconnecting;
