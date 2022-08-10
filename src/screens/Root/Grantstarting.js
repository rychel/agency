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
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAngleRight,
  faPaperPlane,
  faBoxOpen,
  faAngleDoubleLeft,
} from '@fortawesome/free-solid-svg-icons';
import InputGs from '../../components/InputGs';
import TitleInputGs from '../../components/TitleInputGs';
import Space from '../../components/Space';
import LoaderAllScreen from '../../components/LoaderAllScreen';
import {validEmail, validChiffre, validLettre} from '../../utils/regex';

const Grantstarting = ({navigation}) => {
  const gotoGetstarting = () => {
    navigation.goBack('Get starting');
  };

  const [countstep, setCountstep] = useState(0);

  const [nomagence, setNomagence] = useState('');
  const [nomorganisation, setNomorganisation] = useState('');
  const [codesecurite, setCodesecurite] = useState('');
  const [nomchefagence, setNomchefagence] = useState('');
  const [prenomchefagence, setPrenomchefagence] = useState('');
  const [numero, setNumero] = useState('');
  const [password, setPassword] = useState('');

  const [success, setSuccess] = useState({
    sNomchefagence: false,
    sPrenomchefagence: false,
    sNumero: false,
    sPassword: false,
    sNomagence: false,
    sNomorganisation: false,
    sCodesecurite: false,
  });

  const [errors, setErrors] = useState({
    eNomchefagence: '',
    ePrenomchefagence: '',
    eNumero: '',
    ePassword: '',
    eNomagence: '',
    eNomorganisation: '',
    eCodesecurite: '',
  });

  const [footus, setFootus] = useState({
    fNomchefagence: false,
    fPrenomchefagence: false,
    fNomagence: false,
    fNomorganisation: false,
    fCodesecurite: false,
    fPassword: false,
    fNumero: false,
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
        handleSuccessField('sNomagence', true);
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
          handleSuccessField('sNomorganisation', true);
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
            handleSuccessField('sCodesecurite', true);
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
        handleSuccessField('sNomchefagence', true);
      }
    }
    if (fieldname == 'Prenomchefagence') {
      if (prenomchefagence == '') {
        handleErrorOnBlur('ePrenomchefagence', 'ce champ est obligatoire.');
      } else {
        handleErrorOnBlur('ePrenomchefagence', '');
        handleSuccessField('sPrenomchefagence', true);
      }
    }
    if (fieldname == 'Password') {
      if (password == '') {
        handleErrorOnBlur('ePassword', 'ce champ est obligatoire.');
      } else {
        if (password.length < 5) {
          handleErrorOnBlur(
            'ePassword',
            'Votre mot de passe doit etre fiable.',
          );
        } else {
          if (validChiffre.test(password)) {
            handleErrorOnBlur('ePassword', '');
            handleSuccessField('sPassword', true);
          } else {
            handleErrorOnBlur(
              'ePassword',
              'Votre mot de passe doit contenir des nombres',
            );
          }
        }
      }
    }
    if (fieldname == 'Numero') {
      if (numero == '') {
        handleErrorOnBlur('eNumero', 'ce champ est obligatoire.');
      } else {
        if (numero.length == 9 && !Number.isNaN(password)) {
          handleErrorOnBlur('eNumero', '');
          handleSuccessField('sNumero', true);
        } else {
          handleErrorOnBlur('eNumero', 'Numéro de téléphone invalide');
        }
      }
    }
  };

  const handleErrorOnBlur = (label, value) => {
    setErrors({...errors, [label]: value});
  };

  const handleStyleField = (label, value) => {
    setFootus({...footus, [label]: value});
  };

  const handleSuccessField = (label, value) => {
    setSuccess({...success, [label]: value});
  };

  const handleSubmit = () => {
    if (
      success.sNomagence &&
      success.sNomorganisation &&
      success.sCodesecurite
    ) {
      setCountstep(1);
    }
    if (success.sNomchefagence && success.sPrenomchefagence) {
      setCountstep(2);
    }
  };

  const handleForward = () => {
    if (countstep > 0) {
      setCountstep(countstep - 1);
    }
  };

  console.log(countstep);

  return (
    <ScrollView style={styles.ui_splash_global_todo_contain}>
      <StatusBar
        animated={true}
        backgroundColor="#7cc3bc"
        barStyle="default"
        showHideTransition="fade"
        hidden={false}
      />
      <View style={styles.ui_splash_todo_contain}>
        <View style={styles.ui_splash_contain_form_control}>
          <View style={styles.ui_splash_below_title_message}>
            <Text style={styles.ui_splash_below_text_message}>
              Utiliser les informations d'une piece officielle pour creer votre
              agence, nous aurons besoin de ces informations
            </Text>
          </View>
          <View style={styles.ui_splash_contain_second_form_control}>
            {countstep > 0 ? (
              <TitleInputGs
                Title="Et puis parlons un peu de vous"
                Subtitle="Que pouvez-vous nous dire sur vous ?"
              />
            ) : (
              <TitleInputGs
                Title="Parlant de votre nouvelle agence"
                Subtitle="Que pouvez-vous nous dire dessus ?"
              />
            )}
            <Space Hwidth={30} />
            {countstep === 0 ? (
              <View style={styles.ui_splash_contain_second_globe_form_control}>
                <InputGs
                  value={nomagence}
                  keyboard="default"
                  onBlur={() => {
                    handleOnBlurText('Nomagence');
                    handleStyleField('fNomagence', false);
                  }}
                  onChangeText={value => {
                    setNomagence(value);
                  }}
                  errors={errors.eNomagence}
                  onFocus={() => {
                    handleErrorOnBlur('eNomagence', null);
                    handleStyleField('fNomagence', true);
                  }}
                  placeholder="Nom de l'agence"
                  Footus={footus.fNomagence}
                />
                <InputGs
                  value={nomorganisation}
                  keyboard="alphabetic"
                  onChange={() => handleOnBlurText('Nomorganisation')}
                  onBlur={() => {
                    handleOnBlurText('Nomorganisation');
                    handleStyleField('fNomorganisation', false);
                  }}
                  onChangeText={value => setNomorganisation(value)}
                  errors={errors.eNomorganisation}
                  onFocus={() => {
                    handleErrorOnBlur('eNomorganisation', null);
                    handleStyleField('fNomorganisation', true);
                  }}
                  placeholder="Nom de l'organisation"
                  Footus={footus.fNomorganisation}
                />
                <InputGs
                  value={codesecurite}
                  keyboard="alphabetic"
                  onChange={() => handleOnBlurText('Codesecurite')}
                  onBlur={() => {
                    handleOnBlurText('Codesecurite');
                    handleStyleField('fCodesecurite', false);
                  }}
                  onChangeText={value => {
                    setCodesecurite(value);
                  }}
                  errors={errors.eCodesecurite}
                  onFocus={() => {
                    handleErrorOnBlur('eCodesecurite', null);
                    handleStyleField('fCodesecurite', true);
                  }}
                  placeholder="Code de sécurité"
                  Footus={footus.fCodesecurite}
                />
              </View>
            ) : null}
            {countstep === 1 ? (
              <View style={styles.ui_splash_contain_second_globe_form_control}>
                <InputGs
                  value={nomchefagence}
                  keyboard="alphabetic"
                  onChange={() => handleOnBlurText('Nomchefagence')}
                  onBlur={() => {
                    handleOnBlurText('Nomchefagence');
                    handleStyleField('fNomchefagence', false);
                  }}
                  onChangeText={value => {
                    setNomchefagence(value);
                  }}
                  errors={errors.eNomchefagence}
                  onFocus={() => {
                    handleErrorOnBlur('eNomchefagence', null);
                    handleStyleField('fNomchefagence', true);
                  }}
                  placeholder="Nom chef d'agence"
                  Footus={footus.fNomchefagence}
                />
                <InputGs
                  value={prenomchefagence}
                  keyboard="alphabetic"
                  onChange={() => handleOnBlurText('Prenomchefagence')}
                  onBlur={() => {
                    handleOnBlurText('Prenomchefagence');
                    handleStyleField('fPrenomchefagence', false);
                  }}
                  onChangeText={value => {
                    setPrenomchefagence(value);
                  }}
                  errors={errors.ePrenomchefagence}
                  onFocus={() => {
                    handleErrorOnBlur('ePrenomchefagence', null);
                    handleStyleField('fPrenomchefagence', true);
                  }}
                  placeholder="Prenom chef d'agence"
                  Footus={footus.fPrenomchefagence}
                />
              </View>
            ) : null}
            {countstep === 2 ? (
              <View style={styles.ui_splash_contain_second_globe_form_control}>
                <InputGs
                  value={password}
                  keyboard="alphabetic"
                  onChange={() => handleOnBlurText('Password')}
                  onBlur={() => {
                    handleOnBlurText('Password');
                    handleStyleField('fPassword', false);
                  }}
                  onChangeText={value => {
                    setPassword(value);
                  }}
                  errors={errors.ePassword}
                  onFocus={() => {
                    handleErrorOnBlur('ePassword', null);
                    handleStyleField('fPassword', true);
                  }}
                  placeholder="Mot de passe"
                  Footus={footus.fPassword}
                />
                <InputGs
                  value={numero}
                  keyboard="numeric"
                  onChange={() => handleOnBlurText('Numero')}
                  onBlur={() => {
                    handleOnBlurText('Numero');
                    handleStyleField('fNumero', false);
                  }}
                  onChangeText={value => {
                    setNumero(value);
                  }}
                  errors={errors.eNumero}
                  onFocus={() => {
                    handleErrorOnBlur('eNumero', null);
                    handleStyleField('eNumero', true);
                  }}
                  placeholder="Numéro MTN/ORANGE"
                  Footus={footus.fNumero}
                />
              </View>
            ) : null}
          </View>
        </View>
        <View
          style={styles.ui_splash_contain_grant_button_create_cancel_option}>
          <TouchableOpacity
            style={styles.ui_splash_contain_go_back_button}
            activeOpacity={0.9}
            onPress={gotoGetstarting}>
            <Text style={styles.ui_splash_contain_go_back_text}>
              non, merci
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ui_splash_contain_go_back_button_forward}
            activeOpacity={0.6}
            onPress={handleForward}>
            <FontAwesomeIcon
              icon={faAngleDoubleLeft}
              size={18}
              color="#9c27b0"
              style={styles.ui_splash_contain_go_logo_back_button}
            />
            <Text style={styles.ui_splash_contain_go_back_text_reward}>
              precedent
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ui_splash_contain_go_sucess_button}
            activeOpacity={0.6}
            onPress={handleSubmit}>
            <Text style={styles.ui_splash_contain_go_sucess_text}>
              création
            </Text>
            <FontAwesomeIcon icon={faBoxOpen} size={16} color="white" />
          </TouchableOpacity>
        </View>
        <Space Hwidth={30} />
      </View>
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
    height: 134,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7cc3bc1f',
    flexDirection: 'row',
    alignSelf: 'center',
    /* #7cc3bc */
  },
  ui_splash_below_text_message: {
    fontSize: 14,
    fontWeight: '100',
    fontFamily: 'Montserrat-Italic-VariableFont_wght',
    color: '#000000a6',
  },
  ui_splash_contain_form_control: {
    width: '100%',
    alignSelf: 'center',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 5,
    backgroundColor: 'white',
  },
  ui_splash_contain_second_form_control: {
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    height: 300,
  },
  ui_splash_contain_second_globe_form_control: {
    width: '99%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ui_splash_title_form_error_control: {
    left: 26,
    fontSize: 17,
    color: 'red',
  },
  ui_splash_contain_go_back_button: {
    width: 80,
    height: 35,
    position: 'relative',
    left: -5,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ui_splash_contain_go_logo_back_button: {
    top: 1,
    left: -2,
  },
  ui_splash_contain_go_back_button_forward: {
    width: 105,
    height: 40,
    position: 'relative',
    left: -5,
    flexDirection: 'row',
    paddingLeft: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9c27b01f',
    borderRadius: 4,
  },
  ui_splash_contain_go_logo_back_button_reward: {
    color: 'blue',
  },
  ui_splash_contain_go_back_text_reward: {
    position: 'relative',
    left: 1,
    fontSize: 15,
    color: '#9c27b0',
    fontFamily: 'PingFang SC Regular',
  },
  ui_splash_contain_go_sucess_button: {
    width: 105,
    height: 40,
    position: 'relative',
    left: -1,
    textDecorationLine: 'underline',
    flexDirection: 'row',
    backgroundColor: '#00bcd4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  ui_splash_contain_go_back_text: {
    position: 'relative',
    left: -2,
    fontSize: 15,
    top: -1,
    color: '#14100bab',
    fontFamily: 'Nunito-Light',
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
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default Grantstarting;
