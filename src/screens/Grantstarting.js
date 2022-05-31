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
  TextInput,
  ScrollView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLeftLong} from '@fortawesome/free-solid-svg-icons';
/* personalised form input */
import InputGs from '../components/InputGs';
/* import utils */
import {validEmail, validChiffre, validSpecials} from '../utils/regex';

const Grantstarting = ({navigation}) => {

  const gotoGetstarting = () => {
    navigation.goBack('Get starting');
  };

  /** spell of codesecure agency */
  const checkCodesecure = async () => {
    fetch('https://007c-102-244-221-54.eu.ngrok.io/api/createAgency',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({title: Codesecurite})
      })
      .then(json => json.json())
      .then(json => setGrant({gCodesecurite: json}))
      .then(json => console.log(json))
      .catch(e => {
        console.log(e);
      });
  }

  const [params, setParams] = useState({
    Nomagence: "",
    Nomorganisation: "",
    Codesecurite: "",
    Nomchefagence: "",
    Prenomchefagence: "",
    Numerocnichef: "",
    Password: "",
  });

  const [errors, setErrors] = useState({
    Nomagence: "",
    Nomorganisation: "",
    Codesecurite: "",
    Nomchefagence: "",
    Prenomchefagence: "",
    Numerocnichef: "",
    Password: "",
  });

  const [grant, setGrant] = useState({
    gCodesecurite: false,
    gPassword: false
  });

  const {Nomagence, Nomorganisation, Codesecurite, Nomchefagence, Prenomchefagence, Numerocnichef, Password} = params;
  const {gCodesecurite, gPassword} = grant;

  const handleOnBlurText = (fieldname) => {
    /* Handling error Nomagence message */
    if(fieldname == 'Nomagence'){
      if(Nomagence == ''){
        setErrors({Nomagence: "ce champ est obligatoire."});
      }
      else{
        if(Nomagence.length < 3){
          setErrors({Nomagence: "Le nom de votre agence doit etre explicite."});
        }
        else{
          setErrors({Nomagence: ""});
        }
      }
    }
    /* Handling error Nomorganisation message */
    if(fieldname == 'Nomorganisation'){
      if(Nomorganisation == ''){
        setErrors({Nomorganisation: "ce champ est obligatoire."});
      }
      else{
        if(Nomorganisation.length < 3){
          setErrors({Nomorganisation: "Le nom de votre organisation doit etre explicite."});
        }
        else{
          setErrors({Nomorganisation: ""});
        }
      }
    }
    /* Handling error Codesecurite message */
    if(fieldname == 'Codesecurite'){
      if(Codesecurite == ''){
        setErrors({Codesecurite: "ce champ est obligatoire."});
      }
      else{
        if(Codesecurite.length < 6){
          setErrors({Codesecurite: "Le code de sécurité de votre agence doit etre fiable."});
        }
        else{
          if(validChiffre.test(Codesecurite) == false || validSpecials.test(Codesecurite) == false){
            setErrors({Codesecurite: "Votre code de sécurité doit contenir des chiffres ou [?,;.:/!§ù%*µ¨$\.\.|()=+-_}\]{[`@°&\^.']"});
          }
          else{
            checkCodesecure();
            console.log(gCodesecurite);
            if(gCodesecurite == true){
              setErrors({Codesecurite: "Ce code de sécurité nous parait familer! Essayez un autre"});
            }
            else{
              setErrors({Codesecurite: ""});
            }
          }
        }
      }
    }
    /* Handling error Nomchefagence message */
    if(fieldname == 'Nomchefagence'){
      if(Nomchefagence == ''){
        setErrors({Nomchefagence: "ce champ est obligatoire."});
      }
      else{
        setErrors({Nomchefagence: ""});
      }
    }
    /* Handling error Prenomchefagence message */
    if(fieldname == 'Prenomchefagence'){
      if(Prenomchefagence == ''){
        setErrors({Prenomchefagence: "ce champ est obligatoire."});
      }
      else{
        setErrors({Prenomchefagence: ""});
      }
    }
    /* Handling error Numerocnichef message */
    if(fieldname == 'Numerocnichef'){
      if(Numerocnichef == ''){
        setErrors({Numerocnichef: "ce champ est obligatoire."});
      }
      else{
        if(Numerocnichef.length < 5){
          setErrors({Numerocnichef: "Le numéro de votre cni doit supérieur à 5 caractères"});
        }
        else{
          setErrors({Numerocnichef: ""});
        }
      }
    }
  }

  const handleOnChangeText = (value, fieldname) => {
    setParams({...params, [fieldname]: value});
  }

  console.log(params);
  
  const handleSubmit = () => {
    
    console.log("vous avez soumi le formulaire");
  }

  return (
    <ScrollView>
    <LinearGradient
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      locations={[0.05, 0.6]}
      colors={['#A3BDED', '#A3BDED']}
      style={styles.ui_splash_todo_contain}>
      <Animated.View
        style={styles.ui_splash_contain_form_control}>
        <View style={styles.ui_splash_below_title_message}>
          <Text style={styles.ui_splash_below_text_message}>
            utiliser les informations d'une piece officielle pour creer votre
            agence, pour que celle-ci soit légale
          </Text>
        </View>
        <View style={styles.ui_splash_contain_second_form_control}>
          <InputGs title="Nom de l'agence" 
                   value={Nomagence}
                   keyboard="alphabetic" 
                   onBlur={() => handleOnBlurText('Nomagence')}
                   onChangeText={(value) => handleOnChangeText(value, 'Nomagence')}
          />
          {errors.Nomagence ? <Text style={styles.ui_splash_title_form_error_control}>{errors.Nomagence}</Text> : null}
          <InputGs title="Nom de l'organisation" 
                   value={Nomorganisation}
                   keyboard="alphabetic"
                   onBlur={() => handleOnBlurText('Nomorganisation')}
                   onChangeText={(value) => handleOnChangeText(value, 'Nomorganisation')}
          />
          {errors.Nomorganisation ? <Text style={styles.ui_splash_title_form_error_control}>{errors.Nomorganisation}</Text> : null}
          <InputGs title="Code de sécurité de l'agence"
                   value={Codesecurite} 
                   keyboard="alphabetic"
                   onBlur={() => handleOnBlurText('Codesecurite')}
                   onChangeText={(value) => handleOnChangeText(value, 'Codesecurite')}
          />
          {errors.Codesecurite ? <Text style={styles.ui_splash_title_form_error_control}>{errors.Codesecurite}</Text> : null}
        </View>
        <View style={styles.ui_splash_contain_second_form_control}>
          <InputGs title="Nom du chef d'agence" 
                   keyboard="alphabetic"
                   onBlur={() => handleOnBlurText('Nomchefagence')}
                   onChangeText={(value) => handleOnChangeText(value, 'Nomchefagence')}
          />
          {errors.Nomchefagence ? <Text style={styles.ui_splash_title_form_error_control}>{errors.Nomchefagence}</Text> : null}
          <InputGs title="Prenom du chef d'agence" 
                   keyboard="alphabetic"
                   onBlur={() => handleOnBlurText('Prenomchefagence')}
                   onChangeText={(value) => handleOnChangeText(value, 'Prenomchefagence')}
          />
          {errors.Prenomchefagence ? <Text style={styles.ui_splash_title_form_error_control}>{errors.Prenomchefagence}</Text> : null}
          <InputGs title="Numero CNI ou Recepice" 
                   keyboard="alphabetic"
                   onBlur={() => handleOnBlurText('Numerocnichef')}
                   onChangeText={(value) => handleOnChangeText(value, 'Numerocnichef')}
          />
          {errors.Numerocnichef ? <Text style={styles.ui_splash_title_form_error_control}>{errors.Numerocnichef}</Text> : null}
          <InputGs title="Mot de passe du chef d'agence" 
                   keyboard="alphabetic"
                   onBlur={() => handleOnBlurText('Password')}
                   onChangeText={(value) => handleOnChangeText(value, 'Password')}
          />
        </View>
      </Animated.View>

      <TouchableOpacity
        style={styles.ui_splash_contain_go_back_button}
        activeOpacity={0.9}
        onPress={gotoGetstarting}>
        <FontAwesomeIcon icon={faLeftLong} size={25} color="white" />
        <Text style={styles.ui_splash_contain_go_back_text}>retour</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.ui_splash_contain_go_sucess_button}
        activeOpacity={0.9}
        onPress={handleSubmit}>
        <Text style={styles.ui_splash_contain_go_sucess_text}>validé</Text>
      </TouchableOpacity>
    </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ui_splash_todo_contain: {
    height: Dimensions.get('window').height,
  },
  ui_splash_below_title_message: {
    width: '90%',
    height: 60,
    marginTop: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A3BDED',
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
    height: 'auto',
    alignSelf: 'center',
    borderWidth: 2,
    backgroundColor: 'white',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderColor: 'white',
  },
  ui_splash_contain_second_form_control: {
    width: '95%',
    backgroundColor: 'white',
    justifyContent: 'center',
    marginTop: 10,
    left: 10,
    borderRadius: 10,
  },
  ui_splash_input_form_control: {
    width: '90%',
    marginTop: 8,
    marginBottom: 10,
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1.6,
    borderColor: '#A3BDED',
    fontSize: 17,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    color: 'orange',
  },
  ui_splash_title_form_control: {
    left: 26,
    fontSize: 17,
    top: 22,
    color: '#A3BDED',
  },
  ui_splash_title_form_error_control: {
    left: 26,
    fontSize: 17,
    color: 'red',
  },
  ui_splash_contain_go_back_button: {
    width: '50%',
    position: 'relative',
    left: 30,
    textDecorationLine: 'underline',
    marginTop: 20,
    flexDirection: 'row',
  },
  ui_splash_contain_go_sucess_button: {
    width: 115,
    position: 'relative',
    left: 30,
    textDecorationLine: 'underline',
    marginTop: 20,
    flexDirection: 'row',
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 13,
    borderRadius: 10,
  },
  ui_splash_contain_go_back_text: {
    position: 'relative',
    left: 10,
    fontSize: 19,
    top: -3,
    color: 'white',
  },
  ui_splash_contain_go_sucess_text: {
    position: 'relative',
    fontSize: 20,
    color: 'white',
  },
});

export default Grantstarting;
