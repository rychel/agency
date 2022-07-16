/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions} from 'react-native';

import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

/* import component */
import Launchnoaccount from './src/screens/Launchnoaccount'; // First screen for no account
import Licensecontract from './src/screens/Licensecontract'; // License component
import Getstarting from './src/screens/Getstarting'; // Second screen for no account
import Grantstarting from './src/screens/Grantstarting'; // Third screen for no account
import RDirection from './src/routes/RDirection'; // Direction route's screen for agence's thief

import Direction from './src/screens/Direction/Direction';
import Bus from './src/screens/Direction/Bus';
import Setting from './src/screens/Direction/Setting';
import HeaderUser from './src/components/HeaderUser';
import DrawerDirection from './src/components/DrawerDirection';
import TitleHeaderBar from './src/components/TitleHeaderBar';
import Chauffeur from './src/screens/Direction/Chauffeur';
import Busconfiguration from './src/screens/Direction/Busconfiguration';
import Ticketconfiguration from './src/screens/Direction/Ticketconfiguration';
import Courrier from './src/screens/Direction/Courrier';
import Caisse from './src/screens/Direction/Caisse';
import Transport from './src/screens/Direction/Transport';
import Trajet from './src/screens/Direction/Trajet';

import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const App = () => {
  //We hide starting app
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 1000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="RDirection"
          component={RDirection}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Launch Home"
          component={Launchnoaccount}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="License Contracts"
          component={Licensecontract}
          options={{headerStyle: {backgroundColor: '#7cc3bc'}}}
        />
        <Stack.Screen
          name="Get starting"
          component={Getstarting}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="admin"
          component={Grantstarting}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Direction"
          component={Direction}
          options={{header: () => null}}
        />
        <Stack.Screen
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
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{
            header: (props) => (
              <TitleHeaderBar
                Title="Paramètres"
                onPress={() => {
                  props.navigation.goBack();
                }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Chauffeur"
          component={Chauffeur}
          options={{
            header: (props) => (
              <TitleHeaderBar
                Title="Chauffeurs de l'agence"
                onPress={() => {
                  props.navigation.goBack();
                }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Busconfiguration"
          component={Busconfiguration}
          options={{
            header: (props) => (
              <TitleHeaderBar
                Title="Gestion de bus de l'agence"
                onPress={() => {
                  props.navigation.goBack();
                }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Ticketconfiguration"
          component={Ticketconfiguration}
          options={{
            header: (props) => (
              <TitleHeaderBar
                Title="Type de ticket de l'agence"
                onPress={() => {
                  props.navigation.goBack();
                }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Courrier"
          component={Courrier}
          options={{
            header: (props) => (
              <TitleHeaderBar
                Title="Service courrier de l'agence"
                onPress={() => {
                  props.navigation.goBack();
                }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Caisse"
          component={Caisse}
          options={{
            header: (props) => (
              <TitleHeaderBar
                Title="Service caisse de l'agence"
                onPress={() => {
                  props.navigation.goBack();
                }}
              />
            ),
          }}
        /> 
        <Stack.Screen
          name="Transport"
          component={Transport}
          options={{
            header: (props) => (
              <TitleHeaderBar
                Title="Service Transport de l'agence"
                onPress={() => {
                  props.navigation.goBack();
                }}
              />
            ),
          }}
        /> 
        <Stack.Screen
          name="Trajet"
          component={Trajet}
          options={{
            header: (props) => (
              <TitleHeaderBar
                Title="Etablir les trajets de l'agence"
                onPress={() => {
                  props.navigation.goBack();
                }}
              />
            ),
          }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
