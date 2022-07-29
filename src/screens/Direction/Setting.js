import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { faBusAlt, faChartPie, faUser, faUserCheck, faUserCircle, faUserFriends } from '@fortawesome/free-solid-svg-icons';

import ItemMenu from '../../components/ItemMenu';

const Setting = props => {
  return (
    <View>
      <StatusBar
        animated={true}
        backgroundColor="#7cc3bc"
        barStyle="default"
        showHideTransition="fade"
        hidden={false}
      />
      <ItemMenu Titleico={faChartPie} Titlename="Soucrire à un forfait" />
      
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Transport');
        }}
        activeOpacity={0.7}>
        <ItemMenu Titleico={faBusAlt} Titlename="Service Transport" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Courrier');
        }}
        activeOpacity={0.7}>
        <ItemMenu Titleico={faUser} Titlename="Service courrier" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Caisse');
        }}
        activeOpacity={0.7}>
        <ItemMenu Titleico={faUserFriends} Titlename="Service caisse" />
      </TouchableOpacity>
      <ItemMenu Titleico={faUserCircle} Titlename="Service coupon" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Setting;
