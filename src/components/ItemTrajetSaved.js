import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const ItemTrajetSaved = props => {
  const {Titleico, Titlestatus} = props;

  return (
    <View style={styles.ui_splash_contain_header_administration_item_config}>
      <View style={styles.ui_splash_contain_header_administration_awesome_baps}>
        <FontAwesomeIcon icon={Titleico} size={25} color="white" />
      </View>
      <Text
        style={styles.ui_splash_contain_header_administration_awesome_config}>
        {Titlestatus}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_administration_item_config: {
    width: '100%',
    height: 48,
    margin: 10,
    flexDirection: 'row',
    margin: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    top: 100,
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
    backgroundColor: '#8bc34a',
    height: 40,
    marginRight: 10,
  },
  ui_splash_global_bus_soup_contain_registered_global_contain_title: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: 1,
    flexDirection: 'row',
    paddingRight: 20,
  },
});

export default ItemTrajetSaved;
