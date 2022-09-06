import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {faUsers, faBusAlt, faReceipt, faRoad } from '@fortawesome/free-solid-svg-icons';
import ItemMenu from '../../components/ItemMenu';

const Transport = (props) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Chauffeur');
        }}
        activeOpacity={0.7}>
        <ItemMenu Titleico={faUsers} Titlename="Gérer les chauffeurs" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Busconfiguration');
        }}
        activeOpacity={0.7}>
        <ItemMenu Titleico={faBusAlt} Titlename="Gérer les Bus" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Ticketconfiguration');
        }}
        activeOpacity={0.7}>
        <ItemMenu Titleico={faReceipt} Titlename="Choisir le type de ticket" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Trajet');
        }}
        activeOpacity={0.7}>
        <ItemMenu Titleico={faRoad} Titlename="Gérer vos trajets" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Transport;
