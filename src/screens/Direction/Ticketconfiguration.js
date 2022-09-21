import React, {useEffect} from 'react';
import {StyleSheet, Dimensions, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {get_config_transport} from '../../store/Log/Dir/DirActions';
import NotificationExplain from '../../components/NotificationExplain';
import ItemConfigSlug from '../../components/ItemConfigSlug';

const Ticketconfiguration = props => {
  const getConfig_ticket = () => {
    try {
      AsyncStorage.getItem('token').then(value => {
        dispatch(get_config_transport(value));
      });
    } catch (e) {
      console.log(e);
    }
  };
  const config_ticket = useSelector(
    state => state.DirReducers.config_transport,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    getConfig_ticket();
  });

  return (
    <ScrollView style={styles.ui_splash_contain_header_globe}>
      <NotificationExplain Titlemessage="Choisir un type de ticket pour votre agence." />
      <ItemConfigSlug
        Titlechoice="Ticket physique"
        Titlemessage="Les clients de votre agence valideront leurs places à l'aide d'un ticket physique.
                Les numéros de ticket seront fournis par le système."
        isActived={config_ticket[0]?.TypeTicket === 0 ? true : false}
      />
      <ItemConfigSlug
        Titlechoice="Code QR"
        Titlemessage="Les clients de votre agence valideront uniquement leur ticket par Code QR à l'aide de leur mobile.
                Ces derniers aura un code QR d'identification à chaque achat d'un ticket."
        isActived={config_ticket[0]?.TypeTicket === 1 ? true : false}
      />
      <ItemConfigSlug
        Titlechoice="Code QR et Ticket"
        Titlemessage="Les clients de votre agence pourront faire couper leur ticket par Code QR ou Ticket physique.
                Les numéros des tickets physiques seront fournis par le système."
        isActived={config_ticket[0]?.TypeTicket === 2 ? true : false}
      />
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
