import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  StatusBar,
  Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLeftLong} from '@fortawesome/free-solid-svg-icons';

const Getstarting = ({navigation}) => {
  const StartSpinSticker = useRef(new Animated.Value(-45)).current;
  const FlickedTopContain = useRef(new Animated.Value(0)).current;
  const FlickedBottomContain = useRef(new Animated.Value(0)).current;

  const gotoBackHome = () => {
    navigation.goBack('Launch Home');
  };

  const gotoGrantstarting = () => {
    navigation.navigate('admin');
  };

  const gotoGConnecting = () => {
    navigation.navigate('Connecting');
  };

  useEffect(() => {
    Animated.sequence([
      Animated.timing(StartSpinSticker, {
        toValue: 25,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(FlickedTopContain, {
        toValue: 100,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(FlickedBottomContain, {
        toValue: 30,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, [StartSpinSticker, FlickedTopContain, FlickedBottomContain]);

  return (
    <LinearGradient
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.4, y: 1.0}}
      locations={[0.79, 0.2]}
      colors={['#7cc3bc', 'white']}
      style={[styles.ui_splash_todo_contain]}>
      <StatusBar
        animated={true}
        backgroundColor="#7cc3bc"
        barStyle="default"
        showHideTransition="fade"
        hidden={false}
      />
      <View style={styles.ui_splash_contain_widget_header_acxios}>
        <Animated.View
          style={{
            transform: [{translateY: StartSpinSticker}],
          }}>
          <Text style={styles.ui_splash_contain_widget_acxios}>WELCOME !</Text>
        </Animated.View>
        <View style={styles.ui_splash_below_title_message}>
          <Text style={styles.ui_splash_below_text_message}>
            Maintenant gérer tout à partir de votre téléphone mobile
          </Text>
        </View>
        <TouchableOpacity
          style={styles.ui_splash_button_goto_starting}
          activeOpacity={0.9}
          onPress={gotoGrantstarting}>
          <Text style={styles.ui_splash_button_goto_text_starting}>
            creer une agence
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.ui_splash_box_create_title_message}>
        <Text style={styles.ui_splash_contain_other_button_goto}>
          creer un compte associé à une agence
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.ui_splash_contain_go_back_button}
        activeOpacity={0.6}
        onPress={gotoBackHome}>
        <FontAwesomeIcon icon={faLeftLong} size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.ui_splash_contain_header_connect_button}
        activeOpacity={0.6}
        onPress={gotoGConnecting}>
        <Text style={styles.ui_splash_contain_connect_button}>
          Je me connecte !
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  ui_splash_todo_contain: {
    height: Dimensions.get('window').height,
  },
  ui_splash_contain_widget_header_acxios: {
    width: '100%',
    height: 360,
    marginBottom: 10,
    backgroundColor: '#7cc3bc',
    borderRadius: 30,
  },
  ui_splash_contain_widget_acxios: {
    width: 270,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
    fontSize: 40,
    color: 'white',
    fontFamily: 'Nunito-ExtraBold',
    fontWeight: '700',
    textShadowColor: 'black',
    borderWidth: 0.3,
    borderColor: 'white',
  },
  body: {
    color: 'red',
    transform: [{rotate: '-45deg'}],
  },
  ui_splash_below_title_message: {
    width: '90%',
    height: 50,
    marginTop: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  ui_splash_below_text_message: {
    fontSize: 15,
    fontWeight: '300',
    fontFamily: 'PatrickHandSC-Regular',
    color: 'white',
  },
  ui_splash_box_create_title_message: {
    width: '90%',
    height: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00bcd496',
    borderRadius: 100,
  },
  ui_splash_button_goto_starting: {
    width: '48%',
    height: 35,
    textAlignVertical: 'center',
    marginTop: 100,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ui_splash_button_goto_text_starting: {
    fontSize: 15,
    fontFamily: 'Snippet-Regular',
    marginRight: 5,
    top: -1,
    color: '#000000a1',
  },
  ui_splash_contain_other_button_goto: {
    color: 'white',
  },
  ui_splash_contain_go_back_button: {
    width: 60,
    height: 40,
    position: 'relative',
    left: 15,
    textDecorationLine: 'underline',
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: '#ffc107',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ui_splash_contain_go_back_text: {
    position: 'relative',
    left: 5,
    fontSize: 16,
    top: -3,
    color: 'white',
  },
  ui_splash_contain_header_connect_button: {
    width: 150,
    height: 40,
    position: 'relative',
    left: -25,
    textDecorationLine: 'underline',
    marginTop: 40,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  ui_splash_contain_connect_button: {
    position: 'relative',
    textDecorationLine: 'underline',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'materialcommunityIcons',
  },
});

export default Getstarting;
