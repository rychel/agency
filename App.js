/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//import RootDirection from './src/routes/RootDirection';
import RootStarting from './src/routes/RootStarting';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 800);
  }, []);
  

  return (
    <NavigationContainer>
      <RootStarting />
      {/*<RootDirection />*/}
      {/*<Stack.Navigator>
        <Stack.Screen
          name="RDirection"
          component={RDirection}
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
      </Stack.Navigator>*/}
    </NavigationContainer>
  );
};

export default App;
