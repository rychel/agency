/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'; // dependency of move screen
import React from 'react';
/*import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';*/

import RNBootSplash from 'react-native-bootsplash'; // For starting screen
import {NavigationContainer} from '@react-navigation/native'; // managing all screen used
import {createStackNavigator} from '@react-navigation/stack'; // storaged screen
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

/* import component */
import Launchnoaccount from './src/screens/Launchnoaccount'; // First screen for no account
import Licensecontract from './src/screens/Licensecontract'; // License component
import Getstarting from './src/screens/Getstarting'; // Second screen for no account
import Grantstarting from './src/screens/Grantstarting'; // Third screen for no account
import Direction from './src/screens/Direction/Direction'; // Direction screen for agence's thief

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
        <Stack.Screen
          name="Launch Home"
          component={Launchnoaccount}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="License Contracts"
          component={Licensecontract}
          options={{headerStyle: {backgroundColor: '#ffac81'}}}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
