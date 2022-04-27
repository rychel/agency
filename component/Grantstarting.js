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
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Grantstarting = ({navigation}) => {
  //const [agree, setAgree] = useState(false);

  const gotoGetstarting = () => {
    navigation.goBack('Get starting');
  };

  return (
    <View>
      <Text onPress={gotoGetstarting}>Ok.</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Grantstarting;
