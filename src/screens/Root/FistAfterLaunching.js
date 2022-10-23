import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  ScrollView,
  StatusBar,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faPlus,
  faArrowRight,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import AnimatedLottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';

const FistAfterLaunching = ({navigation}) => {
  const NouveauMoveMaker = useRef(new Animated.Value(-100)).current;
  const ContsMoveMaker = useRef(new Animated.Value(30)).current;
  const CCMoveMaker = useRef(new Animated.Value(0)).current;
  const CCPersMaker = useRef(new Animated.Value(100)).current;

  const gotoFistLaunching = () => {
    navigation.goBack('Launching');
  };

  const gotoCreatingDirection = () => {
    navigation.navigate('Creating Direction');
  };

  useEffect(() => {
    Animated.timing(NouveauMoveMaker, {
      toValue: 2,
      duration: 200,
      useNativeDriver: true,
    }).start();
    Animated.timing(ContsMoveMaker, {
      toValue: 2,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(CCMoveMaker, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(CCMoveMaker, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(CCPersMaker, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [NouveauMoveMaker, ContsMoveMaker, CCMoveMaker, CCPersMaker]);

  return (
    <ScrollView style={styles.ui_splash_todo_contain}>
      <StatusBar
        animated={true}
        backgroundColor="#03a9f4"
        barStyle="default"
        showHideTransition="fade"
        translucent={true}
        hidden={false}
      />
      <View style={styles.ui_splash_contain_welcome_header_message}>
        <Animated.View
          style={[
            styles.ui_splash_contain_globe_logo_welcome_message,
            {transform: [{translateX: NouveauMoveMaker}]},
          ]}>
          <Text style={styles.ui_splash_contain_widget_acxios}>NOUVEAU</Text>
        </Animated.View>
        <Animated.View
          style={[
            styles.ui_splash_contain_fuck_logo_welcome_message,
            {transform: [{translateY: ContsMoveMaker}]},
          ]}>
          <TouchableOpacity
            style={styles.ui_splash_contain_header_exit_page}
            activeOpacity={0.6}
            onPress={gotoFistLaunching}>
            <View style={styles.ui_splash_started_floating_exit_page}>
              <FontAwesomeIcon icon={faClose} color="white" size={17} />
            </View>
            <Text style={styles.ui_splash_contain_text_exit_page}>
              page précédente.
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
      <Animated.View
        style={[styles.ui_splash_below_title_message, {opacity: CCMoveMaker}]}>
        <Text
          style={styles.ui_splash_global_fantome_message_activity_label_part1}>
          Appuyer sur ce bouton pour{' '}
          <Text
            style={
              styles.ui_splash_global_fantome_message_activity_label_part2
            }>
            créer
          </Text>{' '}
          et{' '}
          <Text
            style={
              styles.ui_splash_global_fantome_message_activity_label_part2
            }>
            personnaliser
          </Text>{' '}
          votre agence numérique.
        </Text>
        <AnimatedLottieView
          source={require('../../../assets/113794-ghost-emoji-animation.json')}
          style={styles.ui_splash_global_fantome_activity_icon}
          autoPlay
        />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={gotoCreatingDirection}
          style={styles.ui_splash_started_contain_button_welcome}>
          <LinearGradient
            start={{x: 0.0, y: 0.25}}
            end={{x: 0.5, y: 1.0}}
            locations={[0.05, 0.6]}
            colors={['#707be5', '#5e6be3']}
            style={styles.ui_splash_started_button_welcome}>
            <Text style={styles.ui_splash_started_button_text}>
              créer une agence
            </Text>
          </LinearGradient>
          <View style={styles.ui_splash_started_floating_button_welcome}>
            <FontAwesomeIcon icon={faPlus} color="white" size={15} />
          </View>
        </TouchableOpacity>
      </Animated.View>
      <Animated.Text
        style={[
          styles.ui_splash_label_message_another_account,
          {opacity: CCMoveMaker},
        ]}>
        Vous êtes un client ou vous faites partie du personnel d'une agence.
        Créer votre compte ici.
      </Animated.Text>
      <Animated.View
        style={{opacity: CCMoveMaker, transform: [{translateY: CCPersMaker}]}}>
        <TouchableOpacity
          style={styles.ui_splash_button_goto_starting}
          activeOpacity={0.8}>
          <Text style={styles.ui_splash_button_goto_text_starting}>
            creer un compte particulier
          </Text>
          <View style={styles.ui_splash_started_floating_goto_text_starting}>
            <FontAwesomeIcon icon={faArrowRight} color="white" size={17} />
          </View>
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ui_splash_todo_contain: {
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
  },
  ui_splash_contain_welcome_header_message: {
    width: '100%',
    height: 140,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#00000017',
    justifyContent: 'space-around',
  },
  ui_splash_contain_widget_acxios: {
    fontSize: 30,
    fontFamily: 'Roboto-Thin',
  },
  ui_splash_contain_globe_logo_welcome_message: {
    width: 160,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffeb3b42',
    top: 10,
  },
  ui_splash_contain_fuck_logo_welcome_message: {
    width: '45%',
    height: 160,
    alignItems: 'flex-start',
    overflow: 'hidden',
    justifyContent: 'center',
  },
  ui_splash_below_title_message: {
    width: '100%',
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ui_splash_global_fantome_message_activity_label_part1: {
    fontSize: 15,
    fontFamily: 'Roboto-Light',
    position: 'relative',
    color: '#000000ba',
    textAlign: 'center',
    top: 25,
  },
  ui_splash_global_fantome_message_activity_label_part2: {
    fontSize: 17,
    fontFamily: 'NotoSans-Regular',
    position: 'relative',
    color: '#000000ba',
    textAlign: 'center',
    top: 25,
    fontWeight: '500',
  },
  ui_splash_global_fantome_activity_icon: {
    width: 100,
    height: 100,
    left: 30,
    top: 12,
  },
  ui_splash_label_message_another_account: {
    fontSize: 13,
    fontFamily: 'Nunito-Light',
    position: 'relative',
    color: '#000000ba',
    textAlign: 'center',
    marginTop: 80,
    paddingLeft: 5,
    paddingRight: 5,
  },
  ui_splash_button_goto_starting: {
    height: 46,
    textAlignVertical: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 50,
    backgroundColor: '#ffc1077d', //#ffeb3b21
  },
  ui_splash_button_goto_text_starting: {
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
    marginRight: 5,
    color: '#12121170',
    paddingLeft: 25,
  },
  ui_splash_started_floating_goto_text_starting: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: '#ffc107',
    borderWidth: 3,
    borderColor: 'white',
    left: 2,
  },
  ui_splash_started_floating_exit_page: {
    width: 33,
    height: 33,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: '#f44336',
  },
  ui_splash_contain_header_exit_page: {
    width: 257,
    height: 50,
    position: 'relative',
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    top: 10,
  },
  ui_splash_contain_text_exit_page: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'PontanoSans-Regular',
    fontSize: 14,
    left: 5,
  },
  ui_splash_global_activity_icon: {
    width: 100,
    height: 100,
  },
  ui_splash_started_contain_button_welcome: {
    left: 10,
    width: 180,
    height: 67,
    alignItems: 'center',
    borderRadius: 6,
    top: -10,
  },
  ui_splash_started_button_welcome: {
    width: 170,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    flexDirection: 'row',
    top: 10,
  },
  ui_splash_started_button_text: {
    fontSize: 15,
    marginRight: 5,
    fontFamily: 'NotoSans-Regular',
    position: 'relative',
    color: 'white',
  },
  ui_splash_started_floating_button_welcome: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: '#5e6be3',
    borderWidth: 3,
    borderColor: 'white',
    left: 72,
    top: -10,
  },
});

export default FistAfterLaunching;
