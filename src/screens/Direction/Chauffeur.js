import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import ButtonAddingItems from '../../components/ButtonAddingItems';
import TipsBus from '../../components/TipsBus';
import NoItemStatus from '../../components/NoItemStatus';

const Chauffeur = props => {
  return (
    <View style={styles.ui_splash_contain_header_globe}>
      <NoItemStatus
        Titleico="user-slash"
        Titlestatus="aucun chauffeur enregistré"
      />
      <ButtonAddingItems
        titleico="plus"
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

export default Chauffeur;
