import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ItemMenu = (props) => {
  const {Titleico, Titlename} = props;

  return (
    <View>
      <View style={styles.ui_splash_contain_header_administration_item_config}>
        <View style={styles.ui_splash_contain_header_administration_awesome_baps}>
          <FontAwesome5 name={Titleico} size={20} color="#d1d1d1" />
        </View>
        <Text
          style={styles.ui_splash_contain_header_administration_awesome_config}>
          {Titlename}
        </Text>
      </View>
    </View>
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
    fontSize: 18,
    height: 38,
    color: '#101010ad',
    top: 2,
    fontFamily: 'AmaticSC-Bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ui_splash_contain_header_administration_awesome_caps: {
    width: 25,
    height: 25,
    borderRadius: 100,
    backgroundColor: '#03a9f4ad',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
    marginLeft: 50
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

export default ItemMenu;
