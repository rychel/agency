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
import ButtonAddingItems from '../../components/ButtonAddingItems';

const Trajet = (props) => {

  return (
    <View style={styles.ui_splash_contain_header_globe}>
      <StatusBar
        animated={true}
        backgroundColor="#7cc3bc"
        barStyle="default"
        showHideTransition="fade"
        hidden={false} />
      <NotificationExplain Titlemessage="Vous pouvez établir tous les trajets fait par votre agence, les destinations principales ainsi que les destinations secondaires (zones situées entre la ville de départ et celle d'arrivée)" />
     
      <ItemConfigSlug Titlechoice='Ticket' Titlemessage='Les clients de votre agence auront un ticket physique et qui sera utilisé par le composteur.
                Les numéros de ticket seront fournis par le système.' />
      <ButtonAddingItems titleico='plus' titlebutton='ajouter' borderrounds={50} />
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
});

export default Trajet;
