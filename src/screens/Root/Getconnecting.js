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
  Image,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import {useDispatch} from 'react-redux';
import {Login} from '../../store/Log/actions';

import InputGc from '../../components/InputGc';

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

  const [syncput, setSyncput] = useState(false);
  const [syncput2, setSyncput2] = useState(false);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Directeur', value: 'directeur'},
    {label: 'Sécrétaire', value: 'secretaire'},
    {label: 'Caissier', value: 'caissier'},
    {label: 'Composteur', value: 'composteur'},
    {label: 'Chauffeur', value: 'chauffeur'},
  ]);

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
          <Text style={styles.ui_splash_logo_started}>connexion</Text>
        </View>
        <View style={styles.ui_splash_started_title_welcome}>
          <Image
            source={require('../../../assets/Shown.png')}
            style={styles.ui_splash_started_pixart_welcome}
            resizeMode="contain"
          />
        </View>
      </View>
      <Animated.View
        style={[
          styles.ui_splash_started_title_contracts,
          {transform: [{translateY: EndWelcomeBrave}]},
        ]}>
        <InputGc
          title="Utilisateur"
          keyboard="numeric"
          Placeholder="Numéro de téléphone"
          onFocus={() => {
            setSyncput(true);
          }}
          onBlur={() => {
            setSyncput(false);
          }}
          syncInput={syncput}
        />
        <InputGc
          title="Mot de passe"
          keyboard="default"
          Placeholder="Mot de passe"
          onFocus={() => {
            setSyncput2(true);
          }}
          onBlur={() => {
            setSyncput2(false);
          }}
          syncInput={syncput2}
          secureTextEntry
        />
        <Text style={styles.ui_splash_contain_title_cle_connexion}>
          se connecter en tant que
        </Text>
        <DropDownPicker
          open={open}
          placeholder="votre poste"
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          textStyle={{
            fontSize: 15,
            fontFamily: 'Hind-Light',
          }}
          listMode="MODAL"
          style={styles.ui_splash_contain_dropdown_cadre}
        />
        <TouchableOpacity
          style={styles.ui_splash_contain_go_sucess_button}
          activeOpacity={0.6}
          onPress={() => {
            console.log(value);
          }}>
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
    height: 200,
    width: '100%',
    justifyContent: 'center',
    position: 'relative',
    flexDirection: 'row',
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: '#ffc10730',
    top: -5,
  },
  ui_splash_contain_header_logo_started: {
    alignSelf: 'center',
    height: 140,
    backgroundColor: '#03a9f47a',
    overflow: 'hidden',
    top: -60,
    left: 5,
    flexDirection: 'row',
    borderTopEndRadius: 80,
    borderBottomStartRadius: 2,
  },
  ui_splash_logo_started: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 34,
    fontFamily: 'Montserrat-VariableFont_wght',
    transform: [{rotateZ: '6deg'}],
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
    width: 160,
    alignSelf: 'center',
    height: 230,
    backgroundColor: '#7addd32e',
    position: 'relative',
    fontFamily: 'cursive',
    fontSize: 20,
    borderRadius: 100,
    top: 52,
    padding: 5,
    left: -30,
  },
  ui_splash_started_pixart_welcome: {
    width: 90,
    height: 180,
  },
  ui_splash_started_font_config1: {
    fontSize: 14,
    color: 'white',
  },
  ui_splash_started_title_contracts: {
    width: '100%',
    height: 323,
    position: 'relative',
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
  ui_splash_contain_title_cle_connexion: {
    position: 'relative',
    fontSize: 14,
    color: '#00000094',
    fontFamily: 'Rajdhani-Regular',
    left: 24,
  },
  ui_splash_contain_dropdown_cadre: {
    borderWidth: 0.4,
    borderColor: '#101010a6',
    color: '#f44336',
    width: '88%',
    left: 4,
    fontFamily: 'PontanoSans-Regular',
    alignSelf: 'center',
    borderRadius: 4,
  },
});

export default Getconnecting;
