import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';

import NotificationExplain from '../../components/NotificationExplain';
import ItemConfigSlug from '../../components/ItemConfigSlug';

const Courrier = (props) => {

  return (
    <View style={styles.ui_splash_contain_header_globe}>
      <StatusBar
        animated={true}
        backgroundColor="#7cc3bc"
        barStyle="default"
        showHideTransition="fade"
        hidden={false} />
      <NotificationExplain Titlemessage='Ce service ne peut fonctionner à 100% que si toutes les agences de Noblesse Voyages sont synchronisées et ont au préalable souscrit à ce forfait' />
      <ItemConfigSlug Titlechoice='One in one' Titlemessage="Une personne sera chargée de l'envoie et une autre du retrait des colis" />
      <ItemConfigSlug Titlechoice='Two in one' Titlemessage="La personne sera chargée de l'envoie et du retrait des colis" />
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
});

export default Courrier;
