import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';


import ItemMenu from '../../components/ItemMenu';

const Transport = (props) => {
  return (
    <View>
      <StatusBar
        animated={true}
        backgroundColor="#7cc3bc"
        barStyle="default"
        showHideTransition="fade"
        hidden={false}
      />
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
          props.navigation.navigate('Trajet');
        }}
        activeOpacity={0.7}>
        <ItemMenu Titleico="road" Titlename="Gérer vos trajets" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Transport;
