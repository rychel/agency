import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { faUserSlash, faUser,faEyeDropper } from '@fortawesome/free-solid-svg-icons';
import ButtonAddingItems from '../../components/ButtonAddingItems';
import TipsBus from '../../components/TipsBus';
import NoItemStatus from '../../components/NoItemStatus';
import ItemChauffeurTips from '../../components/ItemChauffeurTips';

const Chauffeur = (props) => {
  return (
    <View style={styles.ui_splash_contain_header_globe}>
      <NoItemStatus
        Titleico={faUserSlash}
        Titlestatus="aucun chauffeur enregistré"
      />
      <ItemChauffeurTips
        Titleico={faUser}
        Titlename="Bopp"
        Titlesubname="Dylan ngaite"
        onDelete={() => {}}
        onSleep={() => {}}
      />
      <ButtonAddingItems titleico={faEyeDropper} titlebutton='mettre' borderrounds={50} />
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
