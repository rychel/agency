import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ItemChauffeurTipsExample from './ItemChauffeurTipsExample';

const ItemChauffeurTips = props => {
  const {Titleico, Titlename, Titlesubname, onDelete, onSleep} = props;
  const [details, setDetails] = useState(true);

  {
    /*
    <View
          style={styles.ui_splash_contain_header_administration_awesome_faps}>
          <TouchableOpacity activeOpacity={0.8} onPress={onDelete}>
            <FontAwesome5 name="times" size={26} color="#f44336bf" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} onPress={onSleep}>
            <FontAwesome5 name="unlink" size={20} color="#d1d1d1" />
          </TouchableOpacity>
        </View> */
  }
  return (
    <View>
      <View style={styles.ui_splash_contain_header_administration_item_config}>
        <View
          style={styles.ui_splash_contain_header_administration_awesome_baps}>
          <FontAwesome5 name={Titleico} size={20} color="#d1d1d1" />
        </View>
        <Text
          style={styles.ui_splash_contain_header_administration_awesome_config}>
          {Titlename}
        </Text>
        <View
          style={styles.ui_splash_contain_header_administration_awesome_faps}>
          <Text
            style={
              styles.ui_splash_contain_header_administration_awesome_config2
            }
            numberOfLines={1}>
            {Titlesubname}
          </Text>
        </View>
        {details ? (
          <TouchableOpacity
            style={styles.ui_splash_contain_header_administration_awesome_caps}
            activeOpacity={0.5}
            onPress={() => {
              setDetails(false);
            }}>
            <FontAwesome5 name="angle-down" size={25} color="#f44336b8" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.ui_splash_contain_header_administration_awesome_caps}
            activeOpacity={0.5}
            onPress={() => {
              setDetails(true);
            }}>
            <FontAwesome5 name="angle-up" size={25} color="#cddc39" />
          </TouchableOpacity>
        )}
      </View>
      {details ? null : (
        <View style={styles.ui_splash_contain_header_example_item_config}>
          <ItemChauffeurTipsExample Titlestatus="Bus conduit" Titleinfo="676" />
          <ItemChauffeurTipsExample Titlestatus="Type de bus" Titleinfo="VIP" />
          <ItemChauffeurTipsExample Titlestatus="Lettre" Titleinfo="----" />
          <ItemChauffeurTipsExample Titlestatus="Etat" Titleinfo="En panne" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_administration_item_config: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 1,
    flexDirection: 'row',
    paddingRight: 20,
  },
  ui_splash_contain_header_administration_awesome_config: {
    marginRight: 3,
    fontSize: 18,
    height: 38,
    top: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ui_splash_contain_header_administration_awesome_config2: {
    fontSize: 18,
    height: 38,
    top: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    flex: 1,
  },
  ui_splash_contain_header_administration_awesome_caps: {
    width: 40,
    height: 25,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
    marginLeft: 80,
    flexDirection: 'row',
  },
  ui_splash_contain_header_administration_awesome_baps: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '13.33%',
    marginTop: 12,
    marginLeft: 2,
    flexDirection: 'row',
  },
  ui_splash_contain_header_administration_awesome_faps: {
    alignItems: 'center',
    width: '35.33%',
    marginTop: 2,
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
  ui_splash_contain_header_example_item_config: {
    width: '100%',
    height: 132,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 1,
    flexDirection: 'column',
    paddingRight: 20,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderWidth: 0.4,
    borderColor: '#03a9f485',
  },
  ui_splash_fonts_config1: {
    fontFamily: 'Fontisto',
  },
});

export default ItemChauffeurTips;
