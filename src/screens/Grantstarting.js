import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Dimensions,
  ToastAndroid,
  Animated,
  ScrollView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import InputGs from '../components/InputGs';
import Space from '../components/Space';
import LoaderAllScreen from '../components/LoaderAllScreen';

import {validEmail, validChiffre, validSpecials} from '../utils/regex';

const Grantstarting = ({navigation}) => {
  const gotoGetstarting = () => {
    navigation.goBack('Get starting');
  };

  /** spell of codesecure agency */
  const checkCodesecure = async () => {
    fetch(
      'https://c83a-129-0-99-19.eu.ngrok.io/api/createAgency/Codesecurite',
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title: Codesecurite}),
      },
    )
      .then(json => json.json())
      .then(json => setGrant({gCodesecurite: json}))
      .catch(e => {
        ToastAndroid.show(
          'connexion pertubée, reconnexion ...',
          ToastAndroid.LONG,
        );
      });
  };

  /** spell password's chief */
  const checkPassword = async () => {
    fetch('https://c83a-129-0-99-19.eu.ngrok.io/api/createAgency/Password', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({title: Password}),
    })
      .then(json => json.json())
      .then(json => setGrant({gPassword: json}))
      .catch(e => {
        ToastAndroid.show(
          'connexion pertubée, reconnexion ...',
          ToastAndroid.LONG,
        );
      });
  };

  /** create a thief */
  const createAgency = async () => {
    const data = {
      nom: Nomchefagence,
      prenom: Prenomchefagence,
      numerocni: Numerocnichef,
      password: Password,
      nomagence: Nomagence,
      nomorganisation: Nomorganisation,
      codesecurite: Codesecurite,
    };

    fetch(
      'https://c83a-129-0-99-19.eu.ngrok.io/api/createAgency/Create_Thief',
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title: data}),
      },
    )
      .then(json => json.json())
      .then(json => setGrant({gId: json.handle}))
      .then(json => console.log('La valeur : ' + json))
      .catch(e => {
        console.log(e);
      });
  };

  /** save id of thief */
  const storeIdconnexion = async value => {
    try {
      await AsyncStorage.setItem('Idconnexion', value);
    } catch (e) {
      ToastAndroid.show(
        'connexion pertubée, reconnexion ...',
        ToastAndroid.LONG,
      );
    }
  };

  const [params, setParams] = useState({
    Nomagence: '',
    Nomorganisation: '',
    Codesecurite: '',
    Nomchefagence: '',
    Prenomchefagence: '',
    Numerocnichef: '',
    Password: '',
  });

  /** All required errors input form */
  const [errors, setErrors] = useState({});

  /** All check errors in BD values */
  const [grant, setGrant] = useState({
    gCodesecurite: false,
    gPassword: false,
    gId: 0,
  });

  /** Data object used for create agency */
  const {
    Nomagence,
    Nomorganisation,
    Codesecurite,
    Nomchefagence,
    Prenomchefagence,
    Numerocnichef,
    Password,
  } = params;

  /** grant for codesecure and password  */
  const {gCodesecurite, gPassword, gId} = grant;

  /** Boolean validation */
  const [validate, setValidate] = useState(false);

  /** Message granted */
  const [yup, setYup] = useState(null);

  const handleOnBlurText = fieldname => {
    /* Handling error Nomagence message */
    if (fieldname == 'Nomagence') {
      if (Nomagence == '') {
        handleErrorOnBlur('eNomagence', 'ce champ est obligatoire.');
      } else {
        if (Nomagence.length < 3) {
          handleErrorOnBlur(
            'eNomagence',
            'Le nom de votre agence doit etre explicite.',
          );
        } else {
          handleErrorOnBlur('eNomagence', '');
        }
      }
    }
    /* Handling error Nomorganisation message */
    if (fieldname == 'Nomorganisation') {
      if (Nomorganisation == '') {
        handleErrorOnBlur('eNomorganisation', 'ce champ est obligatoire.');
      } else {
        if (Nomorganisation.length < 3) {
          handleErrorOnBlur(
            'eNomorganisation',
            'Le nom de votre organisation doit etre explicite.',
          );
        } else {
          handleErrorOnBlur('eNomorganisation', '');
        }
      }
    }
    /* Handling error Codesecurite message */
    if (fieldname == 'Codesecurite') {
      if (Codesecurite == '') {
        handleErrorOnBlur('eCodesecurite', 'ce champ est obligatoire.');
      } else {
        if (Codesecurite.length < 7) {
          handleErrorOnBlur(
            'eCodesecurite',
            'Le code de sécurité de votre agence doit etre fiable.',
          );
        } else {
          if (
            validChiffre.test(Codesecurite) == false ||
            validSpecials.test(Codesecurite) == false
          ) {
            handleErrorOnBlur(
              'eCodesecurite',
              "Votre code de sécurité doit contenir des chiffres ou [?,;.:/!§ù%*µ¨$..|()=+-_}]{[`@°&^.'",
            );
          } else {
            checkCodesecure();
            if (gCodesecurite == true) {
              handleErrorOnBlur(
                'eCodesecurite',
                'Ce code de sécurité nous paraît familer! Essayez un autre',
              );
            } else {
              handleErrorOnBlur('eCodesecurite', '');
            }
          }
        }
      }
    }
    /* Handling error Password message */
    if (fieldname == 'Password') {
      if (Password == '') {
        handleErrorOnBlur('ePassword', 'ce champ est obligatoire.');
      } else {
        if (Password.length < 4) {
          handleErrorOnBlur(
            'ePassword',
            'Votre mot de passe doit etre fiable.',
          );
        } else {
          if (validChiffre.test(Password) == false) {
            handleErrorOnBlur(
              'ePassword',
              'Votre mot de passe doit contenir des chiffres aussi',
            );
          } else {
            checkPassword();
            if (gPassword == true) {
              handleErrorOnBlur(
                'ePassword',
                "Conseil d'amis ! Essayez un autre",
              );
            } else {
              handleErrorOnBlur('ePassword', '');
            }
          }
        }
      }
    }
    /* Handling error Nomchefagence message */
    if (fieldname == 'Nomchefagence') {
      if (Nomchefagence == '') {
        handleErrorOnBlur('eNomchefagence', 'ce champ est obligatoire.');
      } else {
        handleErrorOnBlur('eNomchefagence', '');
      }
    }
    /* Handling error Prenomchefagence message */
    if (fieldname == 'Prenomchefagence') {
      if (Prenomchefagence == '') {
        handleErrorOnBlur('ePrenomchefagence', 'ce champ est obligatoire.');
      } else {
        handleErrorOnBlur('ePrenomchefagence', '');
      }
    }
    /* Handling error Numerocnichef message */
    if (fieldname == 'Numerocnichef') {
      if (Numerocnichef == '') {
        handleErrorOnBlur('eNumerocnichef', 'ce champ est obligatoire.');
      } else {
        if (Numerocnichef.length < 5) {
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

  /** Handle function of Grantstarting */
  const handleOnChangeText = (value, fieldname) => {
    setParams({...params, [fieldname]: value});
  };

  const handleErrorOnBlur = (fieldname, value) => {
    setErrors({...errors, [fieldname]: value});
  };

  const handleSubmit = () => {
    if (errors) {
      // && errors.eNomorganisation == '' && errors.eCodesecurite == '' && errors.eNomchefagence == '' && errors.ePrenomchefagence == '' && errors.eNumerocnichef == '' && errors.ePassword == ''
      /*if(errors.eNomagence == '' && errors.eNomorganisation == '' && errors.eCodesecurite == '' && errors.eNomchefagence == '' && errors.ePrenomchefagence == '' && errors.eNumerocnichef == '' && errors.ePassword == ''){
        // Display success message screen
        setValidate(true);
        // Remove global error message
        setYup(null);
        setTimeout(() => {
          createAgency(); // agency created
          console.log("To send : " + gId);
          storeIdconnexion(JSON.stringify(gId)); // store Idconnexion
          navigation.navigate('Direction'); // goto success
        }, 5000);
      }
      else{
        // Display global error message 
        setYup('Vérifier tous vos champs avant de valider');
      }*/
    }
    storeIdconnexion(JSON.stringify(10));
    navigation.navigate('Direction');
  };

  console.log(validate);

  return (
    <ScrollView>
      <LinearGradient
        start={{x: 0.30, y: 0.5}}
        end={{x: 0.35, y: 1.0}}
        locations={[0.5, 0.6]}
        colors={['#A3BDED', '#A3BDED']}
        style={styles.ui_splash_todo_contain}>
        <Animated.View style={styles.ui_splash_contain_form_control}>
          <View style={styles.ui_splash_below_title_message}>
            <Text style={styles.ui_splash_below_text_message}>
              utiliser les informations d'une piece officielle pour creer votre
              agence, pour que celle-ci soit légale
            </Text>
          </View>
          <View style={styles.ui_splash_contain_second_form_control}>
            <InputGs
              title="Nom de l'agence"
              keyboard="alphabetic"
              onChange={() => handleOnBlurText('Nomagence')}
              onBlur={() => handleOnBlurText('Nomagence')}
              onChangeText={value => handleOnChangeText(value, 'Nomagence')}
              errors={errors.eNomagence}
              onFocus={() => {
                handleErrorOnBlur('eNomagence', null);
              }}
              Icon='tags'
            />
            <InputGs
              title="Nom de l'organisation"
              value={Nomorganisation}
              keyboard="alphabetic"
              onChange={() => handleOnBlurText('Nomorganisation')}
              onBlur={() => handleOnBlurText('Nomorganisation')}
              onChangeText={value =>
                handleOnChangeText(value, 'Nomorganisation')
              }
              errors={errors.eNomorganisation}
              onFocus={() => {
                handleErrorOnBlur('eNomorganisation', null);
              }}
            />
            <InputGs
              title="Code de sécurité de l'agence"
              value={Codesecurite}
              keyboard="alphabetic"
              onChange={() => handleOnBlurText('Codesecurite')}
              onBlur={() => handleOnBlurText('Codesecurite')}
              onChangeText={value => handleOnChangeText(value, 'Codesecurite')}
              errors={errors.eCodesecurite}
              onFocus={() => {
                handleErrorOnBlur('eCodesecurite', null);
              }}
            />
            <InputGs
              title="Nom du chef d'agence"
              value={Nomchefagence}
              keyboard="alphabetic"
              onChange={() => handleOnBlurText('Nomchefagence')}
              onBlur={() => handleOnBlurText('Nomchefagence')}
              onChangeText={value => handleOnChangeText(value, 'Nomchefagence')}
              errors={errors.eNomchefagence}
              onFocus={() => {
                handleErrorOnBlur('eNomchefagence', null);
              }}
            />
            <InputGs
              title="Prenom du chef d'agence"
              value={Prenomchefagence}
              keyboard="alphabetic"
              onChange={() => handleOnBlurText('Prenomchefagence')}
              onBlur={() => handleOnBlurText('Prenomchefagence')}
              onChangeText={value =>
                handleOnChangeText(value, 'Prenomchefagence')
              }
              errors={errors.ePrenomchefagence}
              onFocus={() => {
                handleErrorOnBlur('ePrenomchefagence', null);
              }}
            />
            <InputGs
              title="Numero CNI ou Recepice"
              value={Numerocnichef}
              keyboard="alphabetic"
              onChange={() => handleOnBlurText('Numerocnichef')}
              onBlur={() => handleOnBlurText('Numerocnichef')}
              onChangeText={value => handleOnChangeText(value, 'Numerocnichef')}
              errors={errors.eNumerocnichef}
              onFocus={() => {
                handleErrorOnBlur('eNumerocnichef', null);
              }}
            />
            <InputGs
              title="Mot de passe du chef d'agence"
              value={Password}
              keyboard="alphabetic"
              onChange={() => handleOnBlurText('Password')}
              onBlur={() => handleOnBlurText('Password')}
              onChangeText={value => handleOnChangeText(value, 'Password')}
              errors={errors.ePassword}
              onFocus={() => {
                handleErrorOnBlur('ePassword', null);
              }}
            />
          </View>
          <Text style={styles.ui_splash_contain_grant_error_text}>{yup}</Text>
        </Animated.View>

        <View style={styles.ui_splash_contain_grant_button_create_cancel_option}>
          <TouchableOpacity
            style={styles.ui_splash_contain_go_sucess_button}
            activeOpacity={0.6}
            onPress={handleSubmit}>
            <Text style={styles.ui_splash_contain_go_sucess_text}>Créer</Text>
            <FontAwesome5 name='plus' size={16} color='white' />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ui_splash_contain_go_back_button}
            activeOpacity={0.9}
            onPress={gotoGetstarting}>
            <FontAwesome5 name='times-circle' size={25} color='white' />
          </TouchableOpacity>
        </View>
        
        <Space Hwidth={10} />
      </LinearGradient>
      {validate == true ? <LoaderAllScreen /> : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ui_splash_todo_contain: {
    
  },
  ui_splash_below_title_message: {
    width: '90%',
    height: 65,
    marginTop: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffc107',
    borderRadius: 5,
  },
  ui_splash_below_text_message: {
    fontSize: 17,
    fontWeight: '300',
    fontFamily: 'PatrickHandSC-Regular',
    color: 'white',
  },
  ui_splash_contain_form_control: {
    width: '100%',
    alignSelf: 'center',
    borderWidth: 2,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  ui_splash_title_form_error_control: {
    left: 26,
    fontSize: 17,
    color: 'red',
  },
  ui_splash_contain_go_back_button: {
    width: 35,
    height: 35,
    position: 'relative',
    left: -5,
    textDecorationLine: 'underline',
    flexDirection: 'row',
    backgroundColor: '#46434a30',
    borderRadius: 100,
    paddingLeft: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ui_splash_contain_go_sucess_button: {
    width: 80,
    height: 35,
    position: 'relative',
    left: 2,
    textDecorationLine: 'underline',
    flexDirection: 'row',
    backgroundColor: '#46434a30',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  ui_splash_contain_go_back_text: {
    position: 'relative',
    left: 5,
    fontSize: 15,
    top: -3,
    color: 'white',
  },
  ui_splash_contain_go_sucess_text: {
    position: 'relative',
    fontSize: 15,
    color: 'white',
    fontFamily: 'PatrickHandSC-Regular',
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
    marginBottom: 10,
  },
});

export default Grantstarting;
