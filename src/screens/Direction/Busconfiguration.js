import React, {useState} from 'react';
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
import { faPlus, faTintSlash } from '@fortawesome/free-solid-svg-icons';

const Busconfiguration = (props) => {

  return (
    <View style={styles.ui_splash_contain_header_globe}>
      <StatusBar
        animated={true}
        backgroundColor="#7cc3bc"
        barStyle="default"
        showHideTransition="fade"
        hidden={false} />
      <NoItemStatus
        Titleico={faTintSlash}
        Titlestatus="aucun bus enregistré"
      />
      <ButtonAddingItems
        titleico={faPlus}
        titlebutton="ajouter"
        borderrounds={50}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
    width: '100%',
    height: Dimensions.get('window').height,
    backgroundColor: '#f1bfbf14',
  },
});

export default Busconfiguration;
