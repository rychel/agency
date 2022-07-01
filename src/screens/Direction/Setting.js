import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

/* import utils */
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
      <ItemMenu Titleico="chart-pie" Titlename="Soucrire à un forfait" />
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Chauffeur');
        }}
        activeOpacity={0.7}>
        <ItemMenu Titleico="users" Titlename="Gérer les chauffeurs" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Busconfiguration');
        }}
        activeOpacity={0.7}>
        <ItemMenu Titleico="bus-alt" Titlename="Gérer les Bus" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Ticketconfiguration');
        }}
        activeOpacity={0.7}>
        <ItemMenu Titleico="receipt" Titlename="Choisir le type de ticket" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Courrier');
        }}
        activeOpacity={0.7}>
        <ItemMenu Titleico="user" Titlename="Service courrier" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Caisse');
        }}
        activeOpacity={0.7}>
        <ItemMenu Titleico="user-friends" Titlename="Service caisse" />
      </TouchableOpacity>
      <ItemMenu Titleico="user-circle" Titlename="Service clientèle(les clients)" />
      <ItemMenu Titleico="user-circle" Titlename="Service de billeterie" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Setting;
