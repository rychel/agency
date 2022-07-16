import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ItemChauffeurTipsExample = (props) => {
  const {Titlestatus, Titleinfo} = props;

  return (
    <View style={styles.ui_splash_contain_header_example_awesome_baps}>
      <Text style={styles.ui_splash_fonts_config1}>{Titlestatus}</Text>
      <Text>{Titleinfo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_example_awesome_baps: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
    marginLeft: 15,
    flexDirection: 'row',
    width: '97%',
  },
  ui_splash_fonts_config1: {
    fontFamily: 'Fontisto',
    height: 20,
  },
});

export default ItemChauffeurTipsExample;
