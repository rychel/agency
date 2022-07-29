import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  ScrollView,
} from 'react-native';

import NotificationExplain from '../../components/NotificationExplain';
import ItemConfigSlug from '../../components/ItemConfigSlug';

const Ticketconfiguration = (props) => {

  return (
    <ScrollView style={styles.ui_splash_contain_header_globe}>
      <StatusBar
        animated={true}
        backgroundColor="#7cc3bc"
        barStyle="default"
        showHideTransition="fade"
        hidden={false} />
      <NotificationExplain Titlemessage='Vous pouvez configurer votre mode de gestion de ticket en toute simplicité. Acxios vous en propose 03.Soit par ticket simple, soit par code QR pour les clients ayant un compte lié à votre agence, soit par code QR et ticket simple' />
     
      <ItemConfigSlug Titlechoice='Ticket' Titlemessage='Les clients de votre agence auront un ticket physique et qui sera utilisé par le composteur.
                Les numéros de ticket seront fournis par le système.' />
      <ItemConfigSlug Titlechoice='Code QR' Titlemessage="Les clients de votre agence pourront uniquement faire couper leur ticket par Code QR.
                Le ticket étant numérique, le téléphone du client sera comme son ticket, ce dernier aura un code QR d'identificationà chaque fois qu'il payera un ticket." />
      <ItemConfigSlug Titlechoice='Code QR et Ticket' Titlemessage='Les clients de votre agence pourront faire couper leur ticket par Code QR ou Ticket physique.
                Les numéros de ticket seront fournis par le système.' />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
});

export default Ticketconfiguration;
