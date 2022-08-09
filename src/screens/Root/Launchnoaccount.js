import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  StatusBar,
  ScrollView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

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
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(EndWelcomeBrave, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }, [EndWelcomeBrave, FlickedLogo, StartWelcomeBrave]);

  const goWelcomeBrave = () => {
    navigation.navigate('Get starting');
  };

  return (
    <ScrollView>
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
            source={require('../../../assets/Logo1.png')}
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
      <Animated.View
        style={[
          styles.ui_splash_started_title_contracts,
          {transform: [{translateY: EndWelcomeBrave}]},
        ]}>
        <Text style={styles.ui_splash_started_text_contracts1}>
          Resté connecté à votre agence !
        </Text>
        <Text style={styles.ui_splash_started_contain_text_contracts2}>
          Garder les clés en main.
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={goWelcomeBrave}
          style={styles.ui_splash_started_container_button_welcome}>
          <View style={styles.ui_splash_started_button_welcome}>
            <Text style={styles.ui_splash_started_button_text}>débutez maintenant !</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ui_splash_global_app_contain: {
    height: Dimensions.get('window').height,
  },
  ui_splash_global_app_header_contain: {
    height: 430,
    width: '100%',
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
    backgroundColor: '#7addd3c9',
    marginTop: 10,
    marginBottom: 10,
    position: 'relative',
    fontFamily: 'cursive',
    fontSize: 20,
    borderRadius: 100,
    top: 100,
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
    backgroundColor: 'white',
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
  },
  ui_splash_started_text_contracts1: {
    color: '#000000c4',
    fontSize: 16,
    fontFamily: 'FontAwesome',
    textAlign: 'left',
    position: 'relative',
    top: 5,
    marginTop: 18,
    left: 12,
    height: 20,
  },
  ui_splash_started_contain_text_contracts2: {
    left: 10,
    fontSize: 14,
    width: 160,
    padding: 3,
    borderRadius: 100,
    fontFamily: 'PoiretOne-Regular'
  },
  ui_splash_started_text_contracts2: {
    color: '#f44336bd',
    textDecorationLine: 'underline',
    fontSize: 15,
    width: '88%',
    fontWeight: '300',
    fontFamily: 'SairaCondensed-Medium',
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
    width: 175,
    height: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#f4433654',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    left: -20,
    top: 10,
    alignSelf: 'flex-end',
  },
  ui_splash_started_button_text: {
    fontSize: 15,
    marginRight: 5,
    fontFamily: 'Quicksand-VariableFont_wght',
    position: 'relative',
    color: '#000000a6',
  },
});

export default Launchnoaccount;
