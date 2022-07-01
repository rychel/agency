import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import ButtonAddingItems from '../../components/ButtonAddingItems';

const Caisse = (props) => {
  
  return (
    <View style={styles.ui_splash_contain_header_globe}>
        <StatusBar
        animated={true}
        backgroundColor="#7cc3bc"
        barStyle="default"
        showHideTransition="fade"
        hidden={false}
      />
        <ButtonAddingItems titleico='plus' titlebutton='ajouter' borderrounds={50} />
    </View>
  )
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
    width: '100%',
    height: Dimensions.get('window').height,
    backgroundColor: '#f1bfbf14',
  }
});

export default Caisse;
