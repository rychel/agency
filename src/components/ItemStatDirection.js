import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const ItemStatDirection = props => {
  const {Titleico, Titlestat, Titlesub, Titlebg, Titlecl, Titleicl} = props;

  return (
    <View style={[styles.ui_splash_contain_header_globe, {backgroundColor: Titlebg}]}>
      <FontAwesomeIcon icon={Titleico} size={20} color={Titleicl} />
      <Text style={[styles.ui_splash_contain_header_params_fonts4, {color: Titlecl}]}>{Titlestat}</Text>
      <Text style={styles.ui_splash_contain_header_params_fonts5}>{Titlesub}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
    width: 120,
    height: 100,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  ui_splash_contain_header_params_fonts4: {
    fontWeight: '800',
    fontSize: 27,
    color: '#f44336',
    fontFamily: 'PontanoSans-Regular',
  },
  ui_splash_contain_header_params_fonts5: {
    fontSize: 17,
    fontFamily: 'SairaCondensed-Thin',
  },
});

export default ItemStatDirection;
