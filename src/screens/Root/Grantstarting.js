import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ToastAndroid,
  ScrollView,
  StatusBar,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleRight, faPaperPlane, faBoxOpen} from '@fortawesome/free-solid-svg-icons';
import InputGs from '../../components/InputGs';
import Space from '../../components/Space';
import LoaderAllScreen from '../../components/LoaderAllScreen';

import {validEmail, validChiffre, validLettre} from '../../utils/regex';

const Grantstarting = ({navigation}) => {
  const gotoGetstarting = () => {
    navigation.goBack('Get starting');
  };

  const [nomagence, setNomagence] = useState('');
  const [nomorganisation, setNomorganisation] = useState('');
  const [codesecurite, setCodesecurite] = useState('');
  const [nomchefagence, setNomchefagence] = useState('');
  const [prenomchefagence, setPrenomchefagence] = useState('');
  const [numerocnichef, setNumerocnichef] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({
    eNom: '',
    ePrenom: '',
    eNumerocnichef: '',
    ePassword: '',
    eNomagence: '',
    eNomorganisation: '',
    eCodesecurite: '',
  });

  const [bypass, setBypass] = useState({
    gCodesecurite: false,
    gPassword: false,
    gId: 0,
  });

  const handleOnBlurText = fieldname => {
    if (fieldname == 'Nomagence') {
      if (nomagence == '') {
        handleErrorOnBlur('eNomagence', 'ce champ est obligatoire.');
      } else {
        handleErrorOnBlur('eNomagence', '');
      }
    }
    if (fieldname == 'Nomorganisation') {
      if (nomorganisation == '') {
        handleErrorOnBlur('eNomorganisation', 'ce champ est obligatoire.');
      } else {
        if (nomorganisation.length < 3) {
          handleErrorOnBlur(
            'eNomorganisation',
            'Le nom de votre organisation doit etre explicite.',
          );
        } else {
          handleErrorOnBlur('eNomorganisation', '');
        }
      }
    }
    if (fieldname == 'Codesecurite') {
      if (codesecurite == '') {
        handleErrorOnBlur('eCodesecurite', 'ce champ est obligatoire.');
      } else {
        if (codesecurite.length < 5) {
          handleErrorOnBlur(
            'eCodesecurite',
            'Le code de sécurité de votre agence doit etre fiable.',
          );
        } else {
          if (validChiffre.test(codesecurite)) {
            if (validLettre.test(codesecurite)) {
              console.log('good');
            } else {
              handleErrorOnBlur(
                'eCodesecurite',
                'Votre code de sécurité doit contenir des majuscules',
              );
            }
            handleErrorOnBlur('eCodesecurite', '');
          } else {
            handleErrorOnBlur(
              'eCodesecurite',
              'Votre code de sécurité doit contenir des nombres',
            );
          }
        }
      }
    }
    if (fieldname == 'Nomchefagence') {
      if (nomchefagence == '') {
        handleErrorOnBlur('eNomchefagence', 'ce champ est obligatoire.');
      } else {
        handleErrorOnBlur('eNomchefagence', '');
      }
    }
    if (fieldname == 'Prenomchefagence') {
      if (prenomchefagence == '') {
        handleErrorOnBlur('ePrenomchefagence', 'ce champ est obligatoire.');
      } else {
        handleErrorOnBlur('ePrenomchefagence', '');
      }
    }
    if (fieldname == 'Numerocnichef') {
      if (numerocnichef == '') {
        handleErrorOnBlur('eNumerocnichef', 'ce champ est obligatoire.');
      } else {
        if (numerocnichef.length < 5) {
          handleErrorOnBlur(
            'eNumerocnichef',
            'Le numéro de votre cni doit supérieur à 5 caractères',
          );
        } else {
          handleErrorOnBlur('eNumerocnichef', '');
        }
      }
    }
  };

  const handleErrorOnBlur = (label, value) => {
    setErrors({...errors, [label]: value});
  };

  const handleSubmit = () => {
    const API = 'https://localhost:5000/api/create_agency/hello';
    fetch(API, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
      .then(json => json.json())
      .then(value => console.log(value))
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <ScrollView style={styles.ui_splash_global_todo_contain}>
      <StatusBar
        animated={true}
        backgroundColor="#7cc3bc"
        barStyle="default"
        showHideTransition="fade"
        hidden={false}
      />
      <LinearGradient
        start={{x: 0.3, y: 0.5}}
        end={{x: 3.65, y: 1.0}}
        locations={[1.2, 0.6]}
        colors={['white', 'white']}
        style={styles.ui_splash_todo_contain}>
        <View style={styles.ui_splash_contain_form_control}>
          <View style={styles.ui_splash_below_title_message}>
            <Text style={styles.ui_splash_below_text_message}>
              Utiliser les informations d'une piece officielle pour creer votre
              agence, nous aurons besoin de ces informations
            </Text>
          </View>
          <View style={styles.ui_splash_contain_second_form_control}>
            <InputGs
              title="Nom de l'agence"
              value={nomagence}
              keyboard="alphabetic"
              onBlur={() => handleOnBlurText('Nomagence')}
              onChangeText={value => {
                setNomagence(value);
              }}
              errors={errors.eNomagence}
              onFocus={() => {
                handleErrorOnBlur('eNomagence', null);
              }}
              Icon="tags"
            />
            <InputGs
              title="Nom de l'organisation"
              value={nomorganisation}
              keyboard="alphabetic"
              onChange={() => handleOnBlurText('Nomorganisation')}
              onBlur={() => handleOnBlurText('Nomorganisation')}
              onChangeText={value => setNomorganisation(value)}
              errors={errors.eNomorganisation}
              onFocus={() => {
                handleErrorOnBlur('eNomorganisation', null);
              }}
            />
            <InputGs
              title="Code de sécurité de l'agence"
              value={codesecurite}
              keyboard="alphabetic"
              onChange={() => handleOnBlurText('Codesecurite')}
              onBlur={() => handleOnBlurText('Codesecurite')}
              onChangeText={value => {
                setCodesecurite(value);
              }}
              errors={errors.eCodesecurite}
              onFocus={() => {
                handleErrorOnBlur('eCodesecurite', null);
              }}
            />
            <InputGs
              title="Nom du chef d'agence"
              value={nomchefagence}
              keyboard="alphabetic"
              onChange={() => handleOnBlurText('Nomchefagence')}
              onBlur={() => handleOnBlurText('Nomchefagence')}
              onChangeText={value => {
                setNomchefagence(value);
              }}
              errors={errors.eNomchefagence}
              onFocus={() => {
                handleErrorOnBlur('eNomchefagence', null);
              }}
            />
            <InputGs
              title="Prenom du chef d'agence"
              value={prenomchefagence}
              keyboard="alphabetic"
              onChange={() => handleOnBlurText('Prenomchefagence')}
              onBlur={() => handleOnBlurText('Prenomchefagence')}
              onChangeText={value => {
                setPrenomchefagence(value);
              }}
              errors={errors.ePrenomchefagence}
              onFocus={() => {
                handleErrorOnBlur('ePrenomchefagence', null);
              }}
            />
            <InputGs
              title="Numero CNI ou Recepice"
              value={numerocnichef}
              keyboard="alphabetic"
              onChange={() => handleOnBlurText('Numerocnichef')}
              onBlur={() => handleOnBlurText('Numerocnichef')}
              onChangeText={value => {
                setNumerocnichef(value);
              }}
              errors={errors.eNumerocnichef}
              onFocus={() => {
                handleErrorOnBlur('eNumerocnichef', null);
              }}
            />
            <InputGs
              title="Mot de passe du chef d'agence"
              value={password}
              keyboard="alphabetic"
              onChange={() => handleOnBlurText('Password')}
              onBlur={() => handleOnBlurText('Password')}
              onChangeText={value => {
                setPassword(value);
              }}
              errors={errors.ePassword}
              onFocus={() => {
                handleErrorOnBlur('ePassword', null);
              }}
            />
          </View>
        </View>
        <View
          style={styles.ui_splash_contain_grant_button_create_cancel_option}>
          <TouchableOpacity
            style={styles.ui_splash_contain_go_sucess_button}
            activeOpacity={0.6}
            onPress={handleSubmit}>
            <Text style={styles.ui_splash_contain_go_sucess_text}>
              création
            </Text>
            <FontAwesomeIcon icon={faBoxOpen} size={16} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ui_splash_contain_go_back_button}
            activeOpacity={0.9}
            onPress={gotoGetstarting}>
            <Text style={styles.ui_splash_contain_go_back_text}>
              après, merci
            </Text>
            <FontAwesomeIcon
              icon={faAngleRight}
              size={18}
              color="#f44336"
              style={styles.ui_splash_contain_go_logo_back_button}
            />
          </TouchableOpacity>
        </View>

        <Space Hwidth={30} />
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ui_splash_global_todo_contain: {
    width: '100%',
    backgroundColor: 'white',
  },
  ui_splash_todo_contain: {
    width: '100%',
  },
  ui_splash_below_title_message: {
    width: '100%',
    height: 94,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7cc3bc',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  ui_splash_below_text_message: {
    fontSize: 14,
    fontWeight: '100',
    fontFamily: 'Nunito-Light',
    color: 'white',
  },
  ui_splash_contain_form_control: {
    width: '100%',
    alignSelf: 'center',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 5,
    backgroundColor: 'white',
  },
  ui_splash_title_form_error_control: {
    left: 26,
    fontSize: 17,
    color: 'red',
  },
  ui_splash_contain_go_back_button: {
    width: 100,
    height: 35,
    position: 'relative',
    left: -5,
    textDecorationLine: 'underline',
    flexDirection: 'row',
    paddingLeft: 2,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  ui_splash_contain_go_logo_back_button: {
    top: -2,
    color: 'blue',
  },
  ui_splash_contain_go_sucess_button: {
    width: 105,
    height: 38,
    position: 'relative',
    left: 10,
    textDecorationLine: 'underline',
    flexDirection: 'row',
    backgroundColor: '#00bcd4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  ui_splash_contain_go_back_text: {
    position: 'relative',
    left: -2,
    fontSize: 15,
    top: -1,
    color: '#f44336',
    fontFamily: 'PontanoSans-Regular',
  },
  ui_splash_contain_go_sucess_text: {
    position: 'relative',
    fontSize: 15,
    color: 'white',
    fontFamily: 'PontanoSans-Regular',
    left: -7,
  },
  ui_splash_contain_grant_error_text: {
    alignItems: 'center',
    fontSize: 17,
    color: 'red',
    left: 27,
    marginTop: 5,
  },
  ui_splash_contain_grant_button_create_cancel_option: {
    width: '100%',
    top: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 100,
  },
});

export default Grantstarting;
