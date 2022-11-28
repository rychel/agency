import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {ease} from 'react-native/Libraries/Animated/Easing';
import AnimatedLottieView from 'lottie-react-native';

const FistLaunching = ({navigation}) => {
  const MoveDetails = useRef(new Animated.Value(-200)).current;
  const PinkDetails = useRef(new Animated.Value(0)).current;
  const LottieIco = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.timing(MoveDetails, {
      toValue: -2,
      duration: 800,
      useNativeDriver: true,
    }).start();
    Animated.timing(PinkDetails, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
      easing: ease,
    }).start();
    Animated.timing(LottieIco, {
      toValue: -55,
      duration: 700,
      useNativeDriver: true,
      easing: ease,
    }).start();
  }, [MoveDetails, PinkDetails, LottieIco]);

  const goWelcomeBrave = () => {
    navigation.push('After Launching');
  };

  return (
    <ScrollView style={styles.ui_splash_global_app_contain}>
      <StatusBar
        animated={true}
        backgroundColor="#0070c6"
        barStyle="default"
        showHideTransition="fade"
        translucent={true}
        hidden={false}
      />
      <View style={styles.ui_splash_global_fake_app_header_contain}>
        <View style={styles.ui_splash_fake_ico_distributed}></View>
      </View>
      <View style={styles.ui_splash_global_app_footer_contain}>
        <Animated.View
          style={[
            styles.ui_splash_started_title_contracts,
            {opacity: PinkDetails},
            {transform: [{translateX: MoveDetails}]},
          ]}>
          <View style={styles.ui_splash_started_name_app_viewer}>
            <Text style={styles.ui_splash_started_name_app_part1}>Hell</Text>
            <Text style={styles.ui_splash_started_name_app_part2}>'</Text>
            <Text style={styles.ui_splash_started_name_app_part1}>
              o Travel
            </Text>
          </View>
          <View style={styles.ui_splash_started_name_app_descrip_viewer}>
            <Text style={styles.ui_splash_started_contain_text_contracts2}>
              L'application de gestion
              <Text style={styles.ui_splash_started_text_contracts1}>
                {' '}
                d'agence de transport
              </Text>{' '}
              par bus
              <Text style={styles.ui_splash_started_text_contracts1}>
                {' '}
                en temps réel au Cameroun.
              </Text>
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={goWelcomeBrave}
            style={styles.ui_splash_started_contain_button_welcome}>
            <LinearGradient
              start={{x: 0.0, y: 0.25}}
              end={{x: 0.5, y: 1.0}}
              locations={[0.05, 0.6]}
              colors={['#707be5', '#5e6be3']}
              style={styles.ui_splash_started_button_welcome}>
              <Text style={styles.ui_splash_started_button_text}>
                je commence
              </Text>
            </LinearGradient>
            <View style={styles.ui_splash_started_floating_button_welcome}>
              <FontAwesomeIcon icon={faAngleRight} color="white" size={15} />
            </View>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={{transform: [{translateY: LottieIco}]}}>
          <AnimatedLottieView
            source={require('../../../assets/animation/122491-new-rocket-ideia.json')}
            style={styles.ui_splash_global_activity_icon}
            autoPlay
          />
        </Animated.View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ui_splash_global_app_contain: {
    width: '100%',
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
  },
  ui_splash_global_fake_app_header_contain: {
    height: 160,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ui_splash_fake_ico_distributed: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: 'blue',
    top: 10,
  },
  ui_splash_global_app_footer_contain: {
    height: 405,
    width: '100%',
    backgroundColor: 'transparent',
    zIndex: 2,
  },
  ui_splash_contain_header_logo_started: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    backgroundColor: 'transparent',
    borderTopEndRadius: 49,
    borderTopStartRadius: 49,
    borderBottomEndRadius: 49,
    overflow: 'hidden',
    top: 20,
  },
  ui_splash_contain_viewer_svg_display: {
    width: '100%',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    top: 130,
    backgroundColor: 'red',
    overflow: 'hidden',
  },
  ui_splash_started_font_config1: {
    fontSize: 14,
    color: 'white',
  },
  ui_splash_started_title_contracts: {
    width: '100%',
    height: 300,
    position: 'relative',
    overflow: 'hidden',
    justifyContent: 'space-around',
    zIndex: 1,
  },
  ui_splash_started_name_app_viewer: {
    flexDirection: 'row',
    height: 50,
  },
  ui_splash_started_name_app_part1: {
    fontSize: 32,
    left: 10,
    fontFamily: 'Nunito-Bold',
    top: 6,
    color: '#000000cc',
  },
  ui_splash_started_name_app_part2: {
    fontSize: 55,
    color: '#f44336',
    left: 10,
    fontFamily: 'Quicksand-VariableFont_wght',
    fontWeight: '700',
    transform: [{rotate: '10deg'}],
    top: -10,
  },
  ui_splash_started_name_app_descrip_viewer: {
    flexDirection: 'row',
    width: '95%',
    alignItems: 'center',
  },
  ui_splash_started_text_contracts1: {
    color: '#000000c4',
    fontSize: 17,
    fontFamily: 'FontAwesome',
  },
  ui_splash_started_contain_text_contracts2: {
    fontSize: 17,
    fontFamily: 'NotoSans-Regular',
    left: 10,
    padding: 2,
    color: '#5e6be3',
  },
  ui_splash_started_contain_button_welcome: {
    left: 4,
    top: 10,
    width: 149,
    height: 67,
    alignItems: 'center',
    borderRadius: 6,
  },
  ui_splash_started_button_welcome: {
    width: 135,
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
    left: 58,
    top: -10,
  },
  ui_splash_global_activity_icon: {
    width: 200,
    height: 220,
    alignSelf: 'flex-end',
    left: 20,
  },
});

export default FistLaunching;
