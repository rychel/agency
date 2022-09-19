import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {get_config_transport} from '../../store/Log/Dir/DirActions';
import ButtonAddingItems from '../../components/ButtonAddingItems';
import NoItemStatus from '../../components/NoItemStatus';
import ChooseCaissier from '../../components/ChooseCaissier';
import ErrorItemStatus from '../../components/ErrorItemStatus';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faUserSlash} from '@fortawesome/free-solid-svg-icons';

const Caisse = props => {
  //<ChooseCaissier />
  const getConfig_transport = () => {
    try {
      AsyncStorage.getItem('token').then(value => {
        dispatch(get_config_transport(value));
      });
    } catch (e) {
      console.log(e);
    }
  };
  const config_transport = useSelector(
    state => state.DirReducers.config_transport,
  );
  const dispatch = useDispatch();
  const [icoindicate, setIcoindicate] = useState(-30);

  useEffect(() => {
    getConfig_transport();
    console.log(config_transport);
  });

  const addMaid = () => {
    setIcoindicate(10);
    setTimeout(() => {
      setIcoindicate(-30);
    }, 2000);
  };

  return (
    <View style={styles.ui_splash_contain_header_globe}>
      <NoItemStatus
        Titleico={faUserSlash}
        Titlestatus="aucun(e) caissi(er)(ère) enregistré(e)"
      />
      <ErrorItemStatus
        Titlestatus="Avant de continuer, choisir le type de ticket qu'utilisera votre agence. Vous pouvez le faire dans l'onglet Ticket."
        TruthFor={config_transport[0]?.TypeTicket}
      />
      <ButtonAddingItems
        titleico={faPlus}
        titlebutton="ajouter"
        borderrounds={50}
        onOpen={addMaid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
    width: '100%',
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
  },
});

export default Caisse;
