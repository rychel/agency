import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Path} from 'react-native-svg';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { ease } from 'react-native/Libraries/Animated/Easing';

const Getlaunching = ({navigation}) => {
  const StatWithSvg = useRef(new Animated.Value(-400)).current;
  const PinkDetails = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(StatWithSvg, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start();
    Animated.timing(PinkDetails, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
      easing: ease,
    }).start();
  }, [StatWithSvg, PinkDetails]);

  const goWelcomeBrave = () => {
    navigation.navigate('Get starting');
  };

  return (
    <View style={styles.ui_splash_global_app_contain}>
      <View style={styles.ui_splash_global_app_header_contain}>
        <View style={styles.ui_splash_ico_distributed}></View>
      </View>
      <View style={styles.ui_splash_global_app_footer_contain}>
        <Animated.View
          style={[
            styles.ui_splash_contain_viewer_svg_display,
            {transform: [{translateX: StatWithSvg}]},
          ]}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            style={styles.ui_splash_svg_display_started}>
            <Path
              fill="white"
              stroke="#c1c1c1ad"
              strokeWidth="4"
              d="M762.2,189.9c-17.4-27.1-38.1-52.2-61.3-74.5c-23.9-22.9-50.8-43.1-79.8-59.8C528.3,2,419.9-13.5,315.9,11.9 c-50.6,12.4-97.8,33.8-140.2,63.6C131.9,106.3,95,144.9,65.9,190.1c-0.1,0.2-0.2,0.3-0.3,0.5c-3.4,5.8-1.4,13,4.4,16.4l308.3,178 c8.4-10.4,21.3-17.1,35.8-17.1c14.4,0,27.2,6.6,35.6,16.9l308.4-178c1.9-1.1,3.4-2.6,4.5-4.4C764.8,198.5,764.7,193.7,762.2,189.9z"
            />
          </Svg>
        </Animated.View>
      </View>
      <Animated.View
        style={[
          styles.ui_splash_started_title_contracts,
          {opacity: PinkDetails},
        ]}>
        <View style={styles.ui_splash_started_name_app_viewer}>
          <Text style={styles.ui_splash_started_name_app_part1}>Hell</Text>
          <Text style={styles.ui_splash_started_name_app_part2}>'</Text>
          <Text style={styles.ui_splash_started_name_app_part1}>o Travel</Text>
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
              en temps réel.
            </Text>
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={goWelcomeBrave}
          style={[
            styles.ui_splash_started_button_welcome,
            styles.ui_splash_started_contain_button_welcome,
          ]}>
          <LinearGradient
            start={{x: 0.0, y: 0.25}}
            end={{x: 0.5, y: 1.0}}
            locations={[0.05, 0.6]}
            colors={['#707be5', '#5e6be3']}
            style={styles.ui_splash_started_button_welcome}>
            <Text style={styles.ui_splash_started_button_text}>
              découvrez maintenant
            </Text>
            <FontAwesomeIcon icon={faAngleRight} color="white" size={20} />
          </LinearGradient>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_global_app_contain: {
    width: '100%',
    height: Dimensions.get('window').height,
    backgroundColor: '#ff9800',
  },
  ui_splash_global_app_header_contain: {
    height: 190,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ui_splash_ico_distributed: {
    width: 95,
    height: 95,
    borderRadius: 100,
    backgroundColor: 'white',
  },
  ui_splash_global_app_footer_contain: {
    height: 355,
    width: '100%',
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
    height: 355,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ui_splash_svg_display_started: {
    width: 1100,
    height: 800,
    transform: [{rotate: '50deg'}],
    left: 117,
    top: 270,
    zIndex: 2,
  },
  ui_splash_started_font_config1: {
    fontSize: 14,
    color: 'white',
  },
  ui_splash_started_title_contracts: {
    width: '80%',
    height: 180,
    marginTop: 8,
    position: 'relative',
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    top: -190,
  },
  ui_splash_started_name_app_viewer: {
    flexDirection: 'row',
    height: 50,
    top: -30,
  },
  ui_splash_started_name_app_part1: {
    fontSize: 26,
    color: '#817d7d',
    left: 10,
    fontFamily: 'Quicksand-VariableFont_wght',
    fontWeight: '700',
    top: 8,
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
    height: 60,
    width: '100%',
    alignItems: 'center',
  },
  ui_splash_started_text_contracts1: {
    color: '#000000c4',
    fontSize: 16,
    fontFamily: 'FontAwesome',
  },
  ui_splash_started_contain_text_contracts2: {
    fontSize: 15,
    fontFamily: 'NotoSans-Regular',
    left: 10,
    padding: 2,
    color: '#02e5be',
  },
  ui_splash_started_contain_button_welcome: {
    left: 10,
    top: 12,
  },
  ui_splash_started_button_welcome: {
    width: 185,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    flexDirection: 'row',
  },
  ui_splash_started_button_text: {
    fontSize: 15,
    marginRight: 5,
    fontFamily: 'Quicksand-VariableFont_wght',
    position: 'relative',
    color: 'white',
    top: -1,
    left: 3,
  },
});

export default Getlaunching;
