import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
  Image,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTheaterMasks, faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import {useDispatch} from 'react-redux';
import {Login} from '../../store/Log/actions';
import * as yup from 'yup';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import InputGc from '../../components/InputGc';
import LoaderPending from '../../components/LoaderPending';

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
    {label: 'Directeur/Chef agence', value: 'directeur'},
    {label: 'Sécrétaire', value: 'secretaire'},
    {label: 'Caissier', value: 'caissier'},
    {label: 'Composteur', value: 'composteur'},
    {label: 'Chauffeur', value: 'chauffeur'},
  ]);
  const [valid, setValid] = useState(true);
  const [pending, setPending] = useState(false);

  const dispatch = useDispatch();

  const gotoGetstarting = () => {
    navigation.goBack('Get starting');
  };

  const loginAccount = async () => {
    setPending(true);
    if (value == 'directeur') {
      try {
        const log_once = await {
          motdepasse: getValues().motdepasse,
          numero: getValues().numero,
        };
        const request = await fetch(
          'http://192.168.43.45:5000/api/reach_logged_account',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(log_once),
          },
        );
        const success = await request.json();
        if (success.response == true) {
          setValid(true);
          setTimeout(() => {
            setPending(false);
          }, 1000);
          dispatch(Login(JSON.stringify(success.user), "direction"));
        } else {
          setPending(false);
          setValid(false);
        }
      } catch (err) {
        console.log('it wrong: ' + err);
      }
    }
  };

  const schemeValidate = yup.object().shape({
    numero: yup.string().required('ce champ est obligatoire.'),
    motdepasse: yup.string().required('ce champ est obligatoire.'),
  });
  const {control, handleSubmit, getValues} = useForm({
    mode: 'onChange',
    resolver: yupResolver(schemeValidate),
  });

  return (
    <View style={styles.ui_splash_global_app_contain}>
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
        <Controller
          control={control}
          render={({field: {onChange, value}, fieldState: {error}}) => (
            <InputGc
              value={value}
              keyboard="numeric"
              Placeholder="Numéro de téléphone"
              onFocus={() => {
                setSyncput(true);
              }}
              onBlur={() => {
                setSyncput(false);
              }}
              onChangeText={onChange}
              errors={error?.message}
              syncInput={syncput}
              placeholder="Numéro de tél."
            />
          )}
          name="numero"
        />
        <Controller
          control={control}
          render={({field: {onChange, value}, fieldState: {error}}) => (
            <InputGc
              value={value}
              keyboard="default"
              Placeholder="Mot de passe"
              onFocus={() => {
                setSyncput2(true);
              }}
              onBlur={() => {
                setSyncput2(false);
              }}
              onChangeText={onChange}
              errors={error?.message}
              syncInput={syncput2}
              placeholder="Mot de passe."
              secureTextEntry
            />
          )}
          name="motdepasse"
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
        {value === null ? (
          <Text style={styles.ui_splash_picker_control_error}>
            Sélectionner votre poste avant de continuer
          </Text>
        ) : null}
        {valid === true ? null : (
          <Text style={styles.ui_splash_valid_control_error}>
            Le numéro ou le mot de passe ne correspondent pas à votre compte.
          </Text>
        )}
        <TouchableOpacity
          style={styles.ui_splash_contain_go_sucess_button}
          activeOpacity={0.6}
          onPress={handleSubmit(loginAccount)}>
          <Text style={styles.ui_splash_contain_go_sucess_text}>connexion</Text>
          <FontAwesomeIcon
            icon={faTheaterMasks}
            size={16}
            color="#f3f2f2"
            style={styles.ui_splash_contain_logo_sucess_button}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ui_splash_contain_go_return_button}
          activeOpacity={0.6}
          onPress={gotoGetstarting}>
          <FontAwesomeIcon
            icon={faAngleLeft}
            size={16}
            color="#f44336b8"
            style={styles.ui_splash_contain_logo_return_button}
          />
          <Text style={styles.ui_splash_contain_go_return_text}>retour</Text>
        </TouchableOpacity>
      </Animated.View>
      {pending == true ? <LoaderPending Message="connexion" /> : null}
    </View>
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
    width: 120,
    height: 40,
    position: 'relative',
    left: 22,
    flexDirection: 'row',
    backgroundColor: '#45dcef',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 5,
  },
  ui_splash_contain_logo_sucess_button: {
    position: 'relative',
    left: -2,
    top: 1.1,
  },
  ui_splash_contain_go_return_button: {
    width: 88,
    height: 40,
    position: 'relative',
    left: 22,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#f44336b8',
  },
  ui_splash_contain_logo_return_button: {
    position: 'relative',
    left: -10,
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
    color: 'white',
    fontFamily: 'Hind-Medium',
    left: -8,
    fontWeight: '100',
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
  ui_splash_contain_go_return_text: {
    color: '#f44336',
  },
  ui_splash_picker_control_error: {
    fontSize: 12,
    color: '#ffc107',
    fontFamily: 'Hind-Light',
    alignSelf: 'flex-start',
    left: 23,
  },
  ui_splash_valid_control_error: {
    fontSize: 12,
    color: '#f44336',
    fontFamily: 'Hind-Light',
    alignSelf: 'flex-start',
    left: 23,
    marginRight: 20,
  },
});

export default Getconnecting;
