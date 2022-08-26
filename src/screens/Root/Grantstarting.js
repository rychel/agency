import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  ToastAndroid,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAngleLeft,
  faBoxOpen,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import * as yup from 'yup';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import AnimatedLottieView from 'lottie-react-native';
import InputGs from '../../components/InputGs';
import TitleInputGs from '../../components/TitleInputGs';
import Space from '../../components/Space';
import LoaderGs from '../../components/LoaderGs';
import LoaderSuccessGs from '../../components/LoaderSuccessGs';

const Grantstarting = ({navigation}) => {
  const [countstep, setCountstep] = useState(0);
  const [activity, setActivity] = useState(false);

  const [footus, setFootus] = useState({
    fNomchefagence: false,
    fPrenomchefagence: false,
    fNomagence: false,
    fNomorganisation: false,
    fCodesecurite: false,
    fPassword: false,
    fNumero: false,
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
      .matches(
        /[A-Z]/,
        'Il doit aussi avoir des majuscules dans votre code de sécurité',
        {excludeEmptyString: true},
      )
      .min(8, 'Le code sécurité doit avoir au-moins 8 caractères.')
      .matches(/[0-9]/, 'Le code sécurité doit contenir des chiffres', {
        excludeEmptyString: true,
      })
      .test(
        'is-exists',
        "Votre code de sécurité n'est pas sure, essayez un autre",
        async value => {
          try{
            const request = await fetch(
              'http://192.168.43.45:5000/api/check_codesecure_agency',
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({title: value}),
              },
            );
            const success = await request.json();
            return success.response == false;
          }
          catch(err){
            console.log('it wrong: ' + err);
          }
        },
      ),
  });
  const schemeValidate1 = yup.object().shape({
    nomchefagence: yup.string().required('ce champ est obligatoire.'),
    prenomchefagence: yup.string().required('ce champ est obligatoire.'),
  });
  const schemeValidate2 = yup.object().shape({
    motdepasse: yup
      .string()
      .required('ce champ est obligatoire.')
      .min(6, 'Le mot de passe doit avoir au-moins 6 caractères.')
      .matches(/[0-9]/, 'Mot de passe faible, ajoutez quelques des chiffres', {
        excludeEmptyString: true,
      })
      .test(
        'is-exists',
        "Votre mot de passe n'est pas sure, essayez un autre",
        async value => {
          try{
            const request = await fetch(
              'http://192.168.43.45:5000/api/check_password_direction',
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({title: value}),
              },
            );
            const success = await request.json();
            return success.response == false;
          }
          catch(err){
            console.log('it wrong: ' + err);
          }
        },
      ),
    numero: yup
      .string()
      .required('ce champ est obligatoire.')
      .max(9, 'Le numéro de téléphone doit seulement avoir 9 chiffres')
      .matches(
        /[679]{1}[0-9]{4}[0-9]{4}/,
        'Assurez-vous que ce soit un numéro valide MTN/ORANGE',
        {
          excludeEmptyString: true,
        },
      ),
  });

  const {
    control,
    handleSubmit,
    getValues,
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
    resolver: yupResolver(schemeValidate2),
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

  const SignStep2 = () => {
    setActivity(true);
    setTimeout(() => {
      setActivity(false);
    }, 1000);
    setTimeout(() => {
      setCountstep(3);
    }, 500);
  };

  const SignStep3 = () => {
    setTimeout(() => {
      setCountstep(5);
    }, 500);
  };

  /*console.log(errors);
  console.log('------------------------');
  console.log(errors1);
  console.log('------------------------');
  console.log(errors2);
  console.log('------------------------');
  console.log(countstep);*/

  return (
    <>
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
                Utiliser les informations d'une piece officielle pour creer
                votre agence, nous aurons besoin de ces informations en temps
                voulu.
              </Text>
            </View>
            <View style={styles.ui_splash_contain_globe_icon_animated_cfs1}>
              <AnimatedLottieView
                source={require('../../../assets/93248-send-message.json')}
                autoPlay
                style={styles.ui_splash_icon_animated_cfs1}
              />
            </View>
            <Space Hwidth={35} />
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
            <View style={styles.ui_splash_contain_second_form_control}>
              {activity ? (
                <LoaderGs Titleindiq="Juste un effort, encore un peu" />
              ) : null}

              <Space Hwidth={30} />
              {countstep == 0 ? (
                <View
                  style={styles.ui_splash_contain_second_globe_form_control}>
                  <Controller
                    control={control}
                    render={({
                      field: {onChange, value},
                      fieldState: {error},
                    }) => (
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
                    render={({
                      field: {onChange, value},
                      fieldState: {error},
                    }) => (
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
                    render={({
                      field: {onChange, value},
                      fieldState: {error},
                    }) => (
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
                <View
                  style={styles.ui_splash_contain_second_globe_form_control}>
                  <Controller
                    control={control1}
                    render={({
                      field: {onChange, value},
                      fieldState: {error},
                    }) => (
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
                    render={({
                      field: {onChange, value},
                      fieldState: {error},
                    }) => (
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
                <View
                  style={styles.ui_splash_contain_second_globe_form_control}>
                  <Controller
                    control={control2}
                    render={({
                      field: {onChange, value},
                      fieldState: {error},
                    }) => (
                      <InputGs
                        value={value}
                        keyboard="default"
                        onBlur={() => {
                          handleStyleField('fPassword', false);
                        }}
                        onChangeText={onChange}
                        errors={error?.message}
                        onFocus={() => {
                          handleStyleField('fPassword', true);
                        }}
                        placeholder="Mot de passe"
                        Footus={footus.fPassword}
                      />
                    )}
                    name="motdepasse"
                  />
                  <Controller
                    control={control2}
                    render={({
                      field: {onChange, value},
                      fieldState: {error},
                    }) => (
                      <InputGs
                        keyboard="numeric"
                        value={value}
                        onBlur={() => {
                          handleStyleField('fNumero', false);
                        }}
                        onChangeText={onChange}
                        errors={error?.message}
                        onFocus={() => {
                          handleStyleField('fNumero', true);
                        }}
                        placeholder="Numéro MTN ou ORANGE money"
                        Footus={footus.fNumero}
                      />
                    )}
                    name="numero"
                  />
                </View>
              ) : null}
              {countstep == 3 ? (
                <Text style={styles.ui_splash_global_display_unhandled_text1}>
                  Nous y sommes presque !
                </Text>
              ) : null}
              {countstep == 4 ? (
                <TitleInputGs Title="Nous y sommes presque appuyez juste sur le bouton creation" />
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
                countstep == 0
                  ? handleSubmit(SignStep)
                  : countstep == 1
                  ? handleSubmit1(SignStep1)
                  : countstep == 2
                  ? handleSubmit2(SignStep2)
                  : countstep == 3
                  ? SignStep3
                  : null
              }>
              {countstep == 3 ? (
                <>
                  <Text style={styles.ui_splash_contain_go_sucess_text}>
                    création
                  </Text>
                  <FontAwesomeIcon icon={faBoxOpen} size={16} color="white" />
                </>
              ) : (
                <>
                  <Text style={styles.ui_splash_contain_go_before_sucess_text}>
                    suivant
                  </Text>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    size={16}
                    color="white"
                    style={{left: 5}}
                  />
                </>
              )}
            </TouchableOpacity>
          </View>
          <Space Hwidth={18} />
        </View>
      </ScrollView>
      {countstep == 5 ? (
        <LoaderSuccessGs
          Lottietitle={require('../../../assets/116406-carousel-swipe-animation.json')}
          Titlesuccess="acxios crée votre agence, merci de patienter quelques minutes. Après vous serez redirigé dans votre espace administration."
        />
      ) : null}
    </>
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
  ui_splash_contain_globe_icon_animated_cfs1: {
    width: 55,
    height: 57,
    overflow: 'hidden',
    backgroundColor: 'white',
    top: 74,
    alignSelf: 'center',
    position: 'absolute',
    left: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  ui_splash_icon_animated_cfs1: {
    width: 68,
    height: 68,
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
    alignItems: 'center',
    height: 280,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  ui_splash_contain_second_globe_form_control: {
    width: '99%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    top: -20,
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
    marginTop: 25,
  },
  ui_splash_global_display_unhandled_text1: {
    position: 'relative',
    fontFamily: 'Quicksand-VariableFont_wght',
    fontSize: 17,
  },
});

export default Grantstarting;
