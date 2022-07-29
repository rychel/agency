import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';

import ButtonAddingItems from '../../components/ButtonAddingItems';
import NoItemStatus from '../../components/NoItemStatus';
import ChooseCaissier from '../../components/ChooseCaissier';

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
      <NoItemStatus
        Titleico="user-slash"
        Titlestatus="aucune caissière enregistrée"
      />

      
      <ButtonAddingItems titleico='plus' titlebutton='ajouter' borderrounds={50} />
      <ChooseCaissier />
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
