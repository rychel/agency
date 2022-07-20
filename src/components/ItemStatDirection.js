import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ItemStatDirection = props => {
  const {Titleico, Titlestat, Titlesub, Titlebg, Titlecl} = props;

  return (
    <View style={[styles.ui_splash_contain_header_globe, {backgroundColor: Titlebg}]}>
      <FontAwesome5 name={Titleico} size={20} color="white" />
      <Text style={[styles.ui_splash_contain_header_params_fonts4, {color: Titlecl}]}>{Titlestat}</Text>
      <Text style={styles.ui_splash_contain_header_params_fonts5}>{Titlesub}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
    width: 90,
    height: 100,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  ui_splash_contain_header_params_fonts4: {
    fontWeight: '800',
    fontSize: 20,
    color: '#f44336',
  },
  ui_splash_contain_header_params_fonts5: {
    fontSize: 11,
    fontFamily: 'Nunito-Regular',
  },
});

export default ItemStatDirection;
