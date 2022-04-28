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
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLeftLong} from '@fortawesome/free-solid-svg-icons';

const Grantstarting = ({navigation}) => {
  //const [agree, setAgree] = useState(false);

  const gotoGetstarting = () => {
    navigation.goBack('Get starting');
  };

  return (
    <LinearGradient
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      locations={[0.05, 0.6]}
      colors={['#A3BDED', '#A3BDED']}
      style={styles.ui_splash_todo_contain}>
      <View style={styles.ui_splash_contain_form_control}>
        <View style={styles.ui_splash_below_title_message}>
          <Text style={styles.ui_splash_below_text_message}>
            utiliser les informations d'une piece officielle pour creer votre
            agence, pour que celle-ci soit légale
          </Text>
        </View>
        <View style={styles.ui_splash_contain_second_form_control}>
          <Text style={styles.ui_splash_title_form_control}>
            Nom de l'agence
          </Text>
          <TextInput
            style={styles.ui_splash_input_form_control}
            keyboardType="numeric"
          />
          <Text style={styles.ui_splash_title_form_control}>
            Nom de l'organisation
          </Text>
          <TextInput
            style={styles.ui_splash_input_form_control}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.ui_splash_contain_second_form_control}>
          <Text style={styles.ui_splash_title_form_control}>
            Nom du chef d'agence
          </Text>
          <TextInput
            style={styles.ui_splash_input_form_control}
            keyboardType="numeric"
          />
          <Text style={styles.ui_splash_title_form_control}>
            Prenom du chef d'agence
          </Text>
          <TextInput
            style={styles.ui_splash_input_form_control}
            keyboardType="numeric"
          />
          <Text style={styles.ui_splash_title_form_control}>
            Numero CNI ou Recepice
          </Text>
          <TextInput
            style={styles.ui_splash_input_form_control}
            keyboardType="numeric"
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.ui_splash_contain_go_back_button}
        activeOpacity={0.9}
        onPress={gotoGetstarting}>
        <FontAwesomeIcon icon={faLeftLong} size={25} color="white" />
        <Text style={styles.ui_splash_contain_go_back_text}>retour</Text>
      </TouchableOpacity>
    </LinearGradient>
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
    height: 650,
    alignSelf: 'center',
    borderWidth: 2,
    backgroundColor: 'white',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderColor: 'white'
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
    color: '#A3BDED',
  },
  ui_splash_title_form_control: {
    left: 26,
    fontSize: 17,
    top: 22,
    color: '#A3BDED',
  },
  ui_splash_contain_go_back_button: {
    width: '50%',
    position: 'relative',
    left: 30,
    textDecorationLine: 'underline',
    marginTop: 20,
    flexDirection: 'row',
  },
  ui_splash_contain_go_back_text: {
    position: 'relative',
    left: 10,
    fontSize: 19,
    top: -3,
    color: 'white',
  },
});

export default Grantstarting;
