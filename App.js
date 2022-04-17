/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'; // dependency of move screen
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import RNBootSplash from 'react-native-bootsplash'; // For starting screen
import { NavigationContainer } from '@react-navigation/native'; // managing all screen used
import { createStackNavigator } from '@react-navigation/stack'; // storaged screen
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Launchnoaccount from './component/Launchnoaccount';
import Licensecontract from './component/Licensecontract';

const Stack = createStackNavigator();

const App = () => {

  //We hide starting app
  React.useEffect(() => {
    const timer = setTimeout(() => {
        RNBootSplash.hide();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Launch Home" component={Launchnoaccount} options = {{header : () => null}} />
    <Stack.Screen name="License contracts" component={Licensecontract} options={{headerStyle: { backgroundColor: '#ffac81' }}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
