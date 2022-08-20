import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, ScrollView, StatusBar} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAngleLeft,
  faBoxOpen,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import {validEmail, validChiffre, validLettre} from '../../utils/regex';
import * as yup from 'yup';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import InputGs from '../../components/InputGs';
import TitleInputGs from '../../components/TitleInputGs';
import Space from '../../components/Space';
import LoaderAllScreen from '../../components/LoaderAllScreen';
import LoaderGs from '../../components/LoaderGs';

const Grantstarting = ({navigation}) => {
  const [countstep, setCountstep] = useState(0);
  const [activity, setActivity] = useState(false);

  const [numero, setNumero] = useState('');
  const [password, setPassword] = useState('');

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

  const handleStyleField = (label, value) => {
    setFootus({...footus, [label]: value});
  };

  const handleForward = () => {
    setCountstep(countstep - 1);
    if (countstep == -1) {
      navigation.goBack('Get starting');
    }
  };

  const schemeValidate = yup.object().shape({
    nomagence: yup.string().required('ce champ est obligatoire.'),
    nomorganisation: yup
      .string()
      .required('ce champ est obligatoire.')
      .min(3, 'Le nom de votre organisation doit etre explicite.'),
    codesecurite: yup
      .string()
      .required('ce champ est obligatoire.')
      .min(6, 'Le code sécurité doit avoir au-moins 6 caractères.'),
  });
  const schemeValidate1 = yup.object().shape({
    nomchefagence: yup.string().required('ce champ est obligatoire.'),
    prenomchefagence: yup.string().required('ce champ est obligatoire.'),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schemeValidate),
  });

  const {
    control: control1,
    handleSubmit: handleSubmit1,
    formState: {errors: errors1},
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schemeValidate1),
  });

  const {
    control: control2,
    handleSubmit: handleSubmit2,
    formState: {errors: errors2},
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schemeValidate),
  });

  const SignStep = () => {
    setActivity(true);
    setTimeout(() => {
      setActivity(false);
    }, 1000);
    setTimeout(() => {
      setCountstep(1);
    }, 500);
  };

  const SignStep1 = () => {
    setActivity(true);
    setTimeout(() => {
      setActivity(false);
    }, 1000);
    setTimeout(() => {
      setCountstep(2);
    }, 500);
  };

  console.log(errors);
  console.log('------------------------');
  console.log(errors1);
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
              agence, nous aurons besoin de ces informations en temps voulu.
            </Text>
          </View>
          <View style={styles.ui_splash_contain_second_form_control}>
            {activity ? (
              <LoaderGs Titleindiq="Juste un effort, encore un peu" />
            ) : null}
            <Space Hwidth={30} />
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
            {countstep == 0 ? (
              <View style={styles.ui_splash_contain_second_globe_form_control}>
                <Controller
                  control={control}
                  render={({field: {onChange, value}, fieldState: {error}}) => (
                    <InputGs
                      value={value}
                      keyboard="default"
                      onBlur={() => {
                        handleStyleField('fNomagence', false);
                      }}
                      onChangeText={onChange}
                      errors={error?.message}
                      onFocus={() => {
                        handleStyleField('fNomagence', true);
                      }}
                      placeholder="Nom de l'agence"
                      Footus={footus.fNomagence}
                    />
                  )}
                  name="nomagence"
                />
                <Controller
                  control={control}
                  render={({field: {onChange, value}, fieldState: {error}}) => (
                    <InputGs
                      value={value}
                      keyboard="default"
                      onBlur={() => {
                        handleStyleField('fNomorganisation', false);
                      }}
                      onChangeText={onChange}
                      errors={error?.message}
                      onFocus={() => {
                        handleStyleField('fNomorganisation', true);
                      }}
                      placeholder="Nom de l'organisation"
                      Footus={footus.fNomorganisation}
                    />
                  )}
                  name="nomorganisation"
                />
                <Controller
                  control={control}
                  render={({field: {onChange, value}, fieldState: {error}}) => (
                    <InputGs
                      value={value}
                      keyboard="default"
                      onBlur={() => {
                        handleStyleField('fCodesecurite', false);
                      }}
                      onChangeText={onChange}
                      errors={error?.message}
                      onFocus={() => {
                        handleStyleField('fCodesecurite', true);
                      }}
                      placeholder="Code de sécurité"
                      Footus={footus.fCodesecurite}
                    />
                  )}
                  name="codesecurite"
                />
              </View>
            ) : null}
            {countstep == 1 ? (
              <View style={styles.ui_splash_contain_second_globe_form_control}>
                <Controller
                  control={control1}
                  render={({field: {onChange, value}, fieldState: {error}}) => (
                    <InputGs
                      value={value}
                      keyboard="default"
                      onBlur={() => {
                        handleStyleField('fNomchefagence', false);
                      }}
                      onChangeText={onChange}
                      errors={error?.message}
                      onFocus={() => {
                        handleStyleField('fNomchefagence', true);
                      }}
                      placeholder="Nom chef d'agence"
                      Footus={footus.fNomchefagence}
                    />
                  )}
                  name="nomchefagence"
                />
                <Controller
                  control={control1}
                  render={({field: {onChange, value}, fieldState: {error}}) => (
                    <InputGs
                      value={value}
                      keyboard="default"
                      onBlur={() => {
                        handleStyleField('fPrenomchefagence', false);
                      }}
                      onChangeText={onChange}
                      errors={error?.message}
                      onFocus={() => {
                        handleStyleField('fPrenomchefagence', true);
                      }}
                      placeholder="Prenom chef d'agence"
                      Footus={footus.fPrenomchefagence}
                    />
                  )}
                  name="prenomchefagence"
                />
              </View>
            ) : null}
            {countstep == 2 ? (
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
                  onChange={() => {
                    handleOnBlurText('Numero');
                  }}
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
            style={styles.ui_splash_contain_go_back_button_forward}
            activeOpacity={0.6}
            onPress={handleForward}>
            <FontAwesomeIcon
              icon={faAngleLeft}
              size={18}
              color="#f44336b5"
              style={styles.ui_splash_contain_go_logo_back_button}
            />
            <Text style={styles.ui_splash_contain_go_back_text_reward}>
              precedent
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ui_splash_contain_go_sucess_button}
            activeOpacity={0.6}
            onPress={
              countstep == 0 ? handleSubmit(SignStep) : handleSubmit1(SignStep1)
            }>
            <Text style={styles.ui_splash_contain_go_before_sucess_text}>
              suivant
            </Text>
            {countstep == 5 ? (
              <>
                <Text style={styles.ui_splash_contain_go_sucess_text}>
                  création
                </Text>
                <FontAwesomeIcon icon={faBoxOpen} size={16} color="white" />
              </>
            ) : (
              <FontAwesomeIcon icon={faAngleRight} size={16} color="white" style={{left: 5}} />
            )}
          </TouchableOpacity>
        </View>
        <Space Hwidth={18} />
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
    height: 104,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7cc3bc',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  ui_splash_below_text_message: {
    fontSize: 15,
    fontFamily: 'WorkSans-VariableFont_wght',
    color: 'white',
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
    height: 320,
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
  ui_splash_contain_go_logo_back_button: {
    top: 1,
    left: -6,
  },
  ui_splash_contain_go_back_button_forward: {
    width: 115,
    height: 40,
    position: 'relative',
    left: -3,
    flexDirection: 'row',
    paddingLeft: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#f44336b5',
  },
  ui_splash_contain_go_logo_back_button_reward: {
    color: 'blue',
  },
  ui_splash_contain_go_back_text_reward: {
    position: 'relative',
    left: -2,
    fontSize: 15,
    color: '#f44336b5',
    fontFamily: 'PingFang SC Regular',
  },
  ui_splash_contain_go_sucess_button: {
    width: 105,
    height: 40,
    position: 'relative',
    textDecorationLine: 'underline',
    flexDirection: 'row',
    backgroundColor: '#00bcd4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  ui_splash_contain_go_before_sucess_text: {
    position: 'relative',
    fontSize: 15,
    color: 'white',
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
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 70,
  },
});

export default Grantstarting;
