import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ToastAndroid,
  Animated,
  StatusBar,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Launchnoaccount = ({navigation}) => {
  const StartWelcomeBrave = useRef(new Animated.Value(0)).current;
  const EndWelcomeBrave = useRef(new Animated.Value(200)).current;
  const FlickedLogo = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(StartWelcomeBrave, {
        toValue: -70,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(FlickedLogo, {
        toValue: 50,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(EndWelcomeBrave, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    //getIdconnexion();
  }, [EndWelcomeBrave, FlickedLogo, StartWelcomeBrave]);

  const [agree, setAgree] = useState(false);

  const isChecked = () => {
    if (agree == true) {
      navigation.navigate('Get starting');
    } else {
      ToastAndroid.show(
        "Etes-vous sur d'avoir accepter notre politique",
        ToastAndroid.LONG,
      );
    }
  };

  const gotoLicensecontract = () => {
    navigation.navigate('License Contracts');
  };

  /*
  const getIdconnexion = () => {
    try {
      AsyncStorage.getItem('Idconnexion').then((value) => {
        if(value != null) {
          navigation.navigate('Direction');
        }
      });
    } catch(e) {
      console.log(e);
    }
  }*/
  /*
    <Animated.View
        style={[
          styles.ui_splash_started_title_contracts,
          {opacity: EndWelcomeBrave},
        ]}>
        <Text style={styles.ui_splash_started_text_contracts1}>
          Avant de continuer, veuillez lire et accepter le contrat de license et
        </Text>
        <View style={styles.ui_splash_started_contain_text_contracts2}>
          <Text
            style={styles.ui_splash_started_text_contracts2}
            onPress={gotoLicensecontract}>
            notre politique d'utilisation
          </Text>
          <CheckBox value={agree} onChange={() => setAgree(!agree)} />
        </View>
      </Animated.View>
      #009688d1
  */

  return (
    <View>
      <StatusBar
        animated={true}
        backgroundColor="#7cc3bc"
        barStyle="default"
        showHideTransition="fade"
        hidden={false}
      />
      <View style={styles.ui_splash_global_app_header_contain}>
        <View style={styles.ui_splash_contain_header_logo_started}>
          <Animated.Image
            source={require('../../assets/Logo1.png')}
            resizeMode="contain"
            style={[
              styles.ui_splash_logo_started,
              {borderBottomLeftRadius: FlickedLogo},
            ]}
          />
        </View>
        <Animated.View
          style={[
            styles.ui_splash_started_title_welcome,
            {transform: [{translateY: StartWelcomeBrave}]},
          ]}>
          <Text style={styles.ui_splash_started_font_config1}>
            Vous souhaite la bienvenue au sein de son service d'hébergement
            d'agence.
          </Text>
        </Animated.View>
      </View>
      <Animated.View style={[styles.ui_splash_started_title_contracts, {transform: [{translateY: EndWelcomeBrave}]}]}>
        <Text style={styles.ui_splash_started_text_contracts1}>Resté connecté à votre agence !</Text>
        <Text style={styles.ui_splash_started_contain_text_contracts2}>Garder les clés en main.</Text>
        <View style={styles.ui_splash_started_container_button_welcome}>
          <TouchableOpacity
              style={styles.ui_splash_started_button_welcome}
              activeOpacity={0.9}
              onPress={isChecked}>
              <Text style={styles.ui_splash_started_button_text}>Commencer</Text>
              <FontAwesome5 name="arrow-right" size={19} color='white' />
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_global_app_contain: {
    height: Dimensions.get('window').height,
  },
  ui_splash_global_app_header_contain: {
    height: 430,
    width: Dimensions.get('window').width,
    marginBottom: 20,
    backgroundColor: '#7cc3bc',
    alignContent: 'center',
    justifyContent: 'center',
    position: 'relative',
    alignSelf: 'center',
  },
  ui_splash_contain_header_logo_started: {
    alignSelf: 'center',
    width: 90,
    height: 90,
    backgroundColor: 'transparent',
    borderTopEndRadius: 49,
    borderTopStartRadius: 49,
    borderBottomEndRadius: 49,
    overflow: 'hidden',
    top: -70,
  },
  ui_splash_logo_started: {
    alignSelf: 'center',
    width: 90,
    height: 90,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 100,
    backgroundColor: 'white',
  },
  ui_splash_started_title_welcome: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    alignSelf: 'center',
    height: 50,
    backgroundColor: 'transparent',
    marginTop: 10,
    marginBottom: 10,
    position: 'relative',
    fontFamily: 'cursive',
    fontSize: 20,
    borderRadius: 100,
    top: 100,
    borderWidth: 0.3,
    borderColor: 'white',
    padding: 5,
  },
  ui_splash_started_font_config1: {
    fontSize: 14,
    color: 'white',
  },
  ui_splash_started_title_contracts: {
    width: '100%',
    height: 153,
    marginTop: -58,
    position: 'relative',
    backgroundColor: '#ffc107',
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
  },
  ui_splash_started_text_contracts1: {
    color: '#edecec',
    fontSize: 16,
    fontFamily: 'Foundation',
    textAlign: 'left',
    position: 'relative',
    Top: 105,
    marginTop: 18,
    left: 12,
    height: 20,
  },
  ui_splash_started_contain_text_contracts2: {
    left: 12,
    fontSize: 13,
    backgroundColor: 'white',
    width: 160,
    padding: 3,
    borderRadius: 100,
  },
  ui_splash_started_text_contracts2: {
    color: '#f44336bd',
    textDecorationLine: 'underline',
    fontSize: 15,
    width: '88%',
    fontFamily: 'Foundation',
    marginTop: 5,
  },
  ui_splash_started_container_button_welcome: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    position: 'relative',
    left: 10,
    fontFamily: 'cursive',
    fontSize: 20,
    borderRadius: 5,
    top: -5,
  },
  ui_splash_started_button_welcome: {
    width: 120,
    height: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#009688d1',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    left: 80,
    top: 10,
  },
  ui_splash_started_button_text: {
    fontSize: 15,
    marginRight: 5,
    fontFamily: 'Feather',
    position: 'relative',
    top: -1,
    color: 'white',
  },
});

export default Launchnoaccount;
