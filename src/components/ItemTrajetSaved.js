import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const ItemTrajetSaved = props => {
  const {Titleico, Depart, Destination} = props;

  return (
    <View style={styles.ui_splash_contain_header_administration_item_config}>
      <View style={styles.ui_splash_contain_header_administration_awesome_baps}>
        <FontAwesomeIcon icon={Titleico} size={25} color="white" />
      </View>
      <View
        style={
          styles.ui_splash_global_bus_soup_contain_registered_global_contain_title
        }>
        <Text
          style={styles.ui_splash_contain_header_administration_awesome_config}>
          {Depart}
        </Text>
        <Text style={styles.ui_splash_contain_header_separate_awesome_config}>
          -
        </Text>
        <Text
          style={
            styles.ui_splash_contain_header_administration_awesome_config2
          }>
          {Destination}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_administration_item_config: {
    width: '99%',
    height: 48,
    flexDirection: 'row',
    margin: 2,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 30,
  },
  ui_splash_contain_header_administration_awesome_config: {
    margin: 0,
    fontSize: 20,
    height: 40,
    color: '#706e6e',
    fontFamily: 'Roboto-Thin',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    left: 2,
  },
  ui_splash_contain_header_separate_awesome_config: {
    margin: 0,
    fontSize: 20,
    height: 40,
    color: '#706e6e',
    fontFamily: 'Roboto-Thin',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    left: 20,
  },
  ui_splash_contain_header_administration_awesome_config2: {
    margin: 0,
    fontSize: 20,
    height: 40,
    color: '#706e6e',
    fontFamily: 'Quicksand-VariableFont_wght',
    marginTop: 11,
    left: 35,
  },
  ui_splash_contain_header_administration_awesome_caps: {
    width: 25,
    height: 25,
    borderRadius: 100,
    backgroundColor: '#03a9f4ad',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
    marginLeft: 50,
  },
  ui_splash_contain_header_administration_awesome_baps: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '13.33%',
    marginTop: 2,
    marginLeft: 5,
    borderRadius: 100,
    backgroundColor: '#673ab7d6',
    height: 40,
    marginRight: 10,
  },
  ui_splash_global_bus_soup_contain_registered_global_contain_title: {
    width: '90%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 1,
    flexDirection: 'row',
    borderWidth: 0.4,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderColor: '#e3e3e3',
  },
});

export default ItemTrajetSaved;
