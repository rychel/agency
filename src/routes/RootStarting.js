/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Launchnoaccount from '../screens/Root/Launchnoaccount';
import Getstarting from '../screens/Root/Getstarting';
import Grantstarting from '../screens/Root/Grantstarting';
import Getconnecting from '../screens/Root/Getconnecting';

const Stack = createStackNavigator();

const RootStarting = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Launch Home"
        component={Launchnoaccount}
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
