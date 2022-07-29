import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

const ItemDrawerMenu = (props) => {
  const {Titleico, Titlename, Titlenotif, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.ui_splash_contain_header_administration_item_config}>
        <View style={styles.ui_splash_contain_header_administration_awesome_baps}>
          <FontAwesomeIcon icon={Titleico} size={20} color="#00000059" />
        </View>
        <Text
          style={styles.ui_splash_contain_header_administration_awesome_config}>
          {Titlename}
        </Text>
        {Titlenotif == 0 ? null : (
          <View
            style={styles.ui_splash_contain_header_administration_awesome_caps}>
            <FontAwesomeIcon icon={faExclamation} size={14} color="white" />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_administration_item_config: {
    width: '100%',
    height: 48,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 1,
    flexDirection: 'row',
    paddingRight: 20,
  },
  ui_splash_contain_header_administration_awesome_config: {
    margin: 15,
    fontSize: 20,
    height: 30,
    color: '#281f1fb0',
    top: 2,
    fontFamily: 'AmaticSC-Bold',
    fontWeight: '100',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ui_splash_contain_header_administration_awesome_caps: {
    width: 22,
    height: 22,
    borderRadius: 100,
    backgroundColor: '#03a9f4ad',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
    marginLeft: 10,
    top: 2,
  },
  ui_splash_contain_header_administration_awesome_baps: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '13.33%',
    marginTop: 14,
    marginLeft: 18,
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

export default ItemDrawerMenu;
