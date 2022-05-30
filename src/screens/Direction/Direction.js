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

const Direction = ({navigation}) => {
  //const [agree, setAgree] = useState(false);

  const gotoGetstarting = () => {
    navigation.goBack('Direction');
  };

  return (
    <LinearGradient
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      locations={[0.05, 0.6]}
      colors={['#A3BDED', '#A3BDED']}
      style={styles.ui_splash_todo_contain}>
      <TouchableOpacity activeOpacity={0.9} onPress={gotoGetstarting}>
        <Text>Vous vous vendez au service Direction générale</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({});

export default Direction;
