import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Getlaunching from '../screens/Root/Getlaunching';
import Getstarting from '../screens/Root/Getstarting';
import Grantstarting from '../screens/Root/Grantstarting';
import Getconnecting from '../screens/Root/Getconnecting';

const Stack = createStackNavigator();

const RootStarting = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Launch Home"
        component={Getlaunching}
        options={{header: () => null}}
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
        name="Connecting"
        component={Getconnecting}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default RootStarting;
