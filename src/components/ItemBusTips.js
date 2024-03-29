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
import {faTimes, faEdit, faUnlink} from '@fortawesome/free-solid-svg-icons';
const ItemBusTips = (props) => {
  const {Titleico, Titlename, Titlesubname, onDelete, onSleep} = props;

  return (
    <View>
      <View style={styles.ui_splash_contain_header_administration_item_config}>
        <View style={styles.ui_splash_contain_header_administration_awesome_baps}>
          <FontAwesomeIcon name={Titleico} size={20} color="#d1d1d1" />
        </View>
        <Text
          style={styles.ui_splash_contain_header_administration_awesome_config}>
          {Titlename}
        </Text>
        <Text
          style={styles.ui_splash_contain_header_administration_awesome_config2}>
          {Titlesubname}
        </Text>
        <View style={styles.ui_splash_contain_header_administration_awesome_faps}>
            <TouchableOpacity activeOpacity={0.8} onPress={onDelete}>
                <FontAwesomeIcon name={faTimes} size={26} color="#f44336bf" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={onDelete}>
                <FontAwesome5 name={faEdit} size={25} color="#8bc34a" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={onSleep}>
                <FontAwesome5 name={faUnlink} size={20} color="#d1d1d1" />
            </TouchableOpacity>
        </View>
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
    fontSize: 23,
    height: 30,
    color: '#101010ad',
    top: -2,
    fontFamily: 'AmaticSC-Bold',
    fontWeight: 'light',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ui_splash_contain_header_administration_awesome_config2: {
    fontSize: 23,
    height: 30,
    color: '#101010ad',
    top: -2,
    fontFamily: 'AmaticSC-Bold',
    fontWeight: 'light',
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
    marginLeft: 50
  },
  ui_splash_contain_header_administration_awesome_baps: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '13.33%',
    marginTop: 14,
    marginLeft: 18,
    flexDirection: 'row',
  },
  ui_splash_contain_header_administration_awesome_faps: {
    alignItems: 'center',
    width: '25.33%',
    marginTop: 14,
    marginLeft: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4,
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

export default ItemBusTips;
