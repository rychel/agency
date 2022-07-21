import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Dimensions} from 'react-native';

import Direction from '../screens/Direction/Direction';
import Bus from '../screens/Direction/Bus';
import Setting from '../screens/Direction/Setting';
import Chauffeur from '../screens/Direction/Chauffeur';
import Busconfiguration from '../screens/Direction/Busconfiguration';
import Ticketconfiguration from '../screens/Direction/Ticketconfiguration';
import Courrier from '../screens/Direction/Courrier';
import Caisse from '../screens/Direction/Caisse';
import Transport from '../screens/Direction/Transport';
import Trajet from '../screens/Direction/Trajet';
import HeaderUser from '../components/HeaderUser';
import DrawerDirection from '../components/DrawerDirection';
import TitleHeaderBar from '../components/TitleHeaderBar';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const RDirection = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Direction"
      screenOptions={{
        drawerStyle: {
          width: Dimensions.get('window').width - 60,
        },
      }}
      drawerType="permanent"
      drawerContent={props => <DrawerDirection {...props} />}
      backBehavior='history'
      >
      <Drawer.Screen
        name="Direction"
        component={Direction}
        options={({navigation}) => ({
          header: () => (
            <HeaderUser
              Gtitle="Noblesse voyages"
              Depart="Douala"
              Arrive="Yaoundé"
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          ),
          headerStyle: {
            height: 70,
          },
        })}
      />
      <Drawer.Screen
        name="Bus"
        component={Bus}
        options={({navigation}) => ({
          header: () => (
            <TitleHeaderBar
              Title="Bus de Noblesse voyage"
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
        })}
      />
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{
          header: props => (
            <TitleHeaderBar
              Title="Paramètres"
              onPress={() => {
                props.navigation.goBack();
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Chauffeur"
        component={Chauffeur}
        options={{
          header: props => (
            <TitleHeaderBar
              Title="Chauffeurs de l'agence"
              onPress={() => {
                props.navigation.goBack();
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Busconfiguration"
        component={Busconfiguration}
        options={{
          header: props => (
            <TitleHeaderBar
              Title="Gestion de bus de l'agence"
              onPress={() => {
                props.navigation.goBack();
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Ticketconfiguration"
        component={Ticketconfiguration}
        options={{
          header: props => (
            <TitleHeaderBar
              Title="Type de ticket de l'agence"
              onPress={() => {
                props.navigation.goBack();
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Courrier"
        component={Courrier}
        options={{
          header: props => (
            <TitleHeaderBar
              Title="Service courrier de l'agence"
              onPress={() => {
                props.navigation.goBack();
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Caisse"
        component={Caisse}
        options={{
          header: props => (
            <TitleHeaderBar
              Title="Service caisse de l'agence"
              onPress={() => {
                props.navigation.goBack();
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Transport"
        component={Transport}
        options={{
          header: props => (
            <TitleHeaderBar
              Title="Service Transport de l'agence"
              onPress={() => {
                props.navigation.goBack();
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Trajet"
        component={Trajet}
        options={{
          header: props => (
            <TitleHeaderBar
              Title="Etablir les trajets de l'agence"
              onPress={() => {
                props.navigation.goBack();
              }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({});

export default RDirection;
