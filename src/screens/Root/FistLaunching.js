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
import Svg, {Path} from 'react-native-svg';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {ease} from 'react-native/Libraries/Animated/Easing';
import AnimatedLottieView from 'lottie-react-native';
import TypeScreen from '../../utils/TypeScreen';

const Getlaunching = ({navigation}) => {
  const MoveDetails = useRef(new Animated.Value(-200)).current;
  const PinkDetails = useRef(new Animated.Value(0)).current;
  const LottieIco = useRef(new Animated.Value(-100)).current;
  const [TimerWithSvg, setTimerWithSvg] = useState(0);
  const [orientation, setOrientation] = useState('');

  useEffect(() => {
    Animated.timing(MoveDetails, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start();
    Animated.timing(PinkDetails, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      easing: ease,
    }).start();
    Animated.timing(LottieIco, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
      easing: ease,
    }).start();
    setTimeout(() => {
      setTimerWithSvg(1);
    }, 700);
  }, [MoveDetails, PinkDetails]);

  /**
   * When the phone rotate
   */
  Dimensions.addEventListener('change', () => {
    setOrientation(TypeScreen.isPortrait() ? 'portrait' : 'landscape');
  });

  const goWelcomeBrave = () => {
    navigation.push('Get starting');
  };

  return (
    <ScrollView style={styles.ui_splash_global_app_contain}>
      <StatusBar
        animated={true}
        backgroundColor="#03a9f4"
        barStyle="default"
        showHideTransition="fade"
        translucent={true}
        hidden={false}
      />
      <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        locations={[0.05, 0.6]}
        colors={['#03a9f4', '#03a9f4']}
        style={styles.ui_splash_global_app_header_contain}>
        <View style={styles.ui_splash_ico_distributed}></View>
        {TypeScreen.isTablet() ? null : TypeScreen.isPhone() &&
          TypeScreen.isLandscape() ? null : (
          <Animated.View
            style={[
              TimerWithSvg == 0
                ? styles.ui_splash_contain_viewer_svg_display
                : styles.ui_splash_contain_viewer_svg_animated_display,
              {opacity: PinkDetails},
            ]}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              style={styles.ui_splash_svg_display_started}>
              <Path
                fill="white"
                strokeWidth="0"
                d="M762.2,189.9c-17.4-27.1-38.1-52.2-61.3-74.5c-23.9-22.9-50.8-43.1-79.8-59.8C528.3,2,419.9-13.5,315.9,11.9 c-50.6,12.4-97.8,33.8-140.2,63.6C131.9,106.3,95,144.9,65.9,190.1c-0.1,0.2-0.2,0.3-0.3,0.5c-3.4,5.8-1.4,13,4.4,16.4l308.3,178 c8.4-10.4,21.3-17.1,35.8-17.1c14.4,0,27.2,6.6,35.6,16.9l308.4-178c1.9-1.1,3.4-2.6,4.5-4.4C764.8,198.5,764.7,193.7,762.2,189.9z"
              />
            </Svg>
          </Animated.View>
        )}
      </LinearGradient>
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
            activeOpacity={0.7}
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
            source={require('../../../assets/122491-new-rocket-ideia.json')}
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
  ui_splash_global_app_header_contain: {
    height: 220,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  ui_splash_ico_distributed: {
    width: 85,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'white',
    top: 35,
  },
  ui_splash_global_app_footer_contain: {
    height: 350,
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
  ui_splash_contain_viewer_svg_animated_display: {
    width: '100%',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    top: 130,
    backgroundColor: 'red',
    overflow: 'visible',
  },
  ui_splash_svg_display_started: {
    width: Dimensions.get('screen').width * 3,
    height: 620,
    transform: [{rotate: '20deg'}],
    left: 247,
    top: 63,
    zIndex: 2,
  },
  ui_splash_started_font_config1: {
    fontSize: 14,
    color: 'white',
  },
  ui_splash_started_title_contracts: {
    width: '100%',
    height: 280,
    marginTop: 8,
    position: 'relative',
    overflow: 'hidden',
    justifyContent: 'space-around',
    zIndex: 1,
  },
  ui_splash_started_name_app_viewer: {
    flexDirection: 'row',
    height: 50,
    left: 5,
  },
  ui_splash_started_name_app_part1: {
    fontSize: 32,
    color: '#00000085',
    left: 10,
    fontFamily: 'Roboto-Medium',
    top: 8,
    textShadowColor: '#00000014',
    textShadowRadius: 10,
    elevation: 1,
    textShadowOffset: {width: -1, height: 3},
  },
  ui_splash_started_name_app_part2: {
    fontSize: 45,
    color: '#f44336',
    left: 10,
    fontFamily: 'Quicksand-VariableFont_wght',
    fontWeight: '700',
    transform: [{rotate: '10deg'}],
  },
  ui_splash_started_name_app_descrip_viewer: {
    flexDirection: 'row',
    width: '95%',
    alignItems: 'center',
    left: 5,
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
    left: 10,
    top: -10,
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
    top: -50,
    alignSelf: 'flex-end',
    left: 20,
  },
});

export default Getlaunching;
