import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import ButtonAddingItems from '../../components/ButtonAddingItems';
import NoItemStatus from '../../components/NoItemStatus';
import {faPlus, faTintSlash} from '@fortawesome/free-solid-svg-icons';

const Busconfiguration = props => {
  return (
    <View style={styles.ui_splash_contain_header_globe}>
      <NoItemStatus Titleico={faTintSlash} Titlestatus="aucun bus enregistré" />
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
