import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FistLaunching from '../screens/Root/FistLaunching';
import FistAfterLaunching from '../screens/Root/FistAfterLaunching';
import FistCreatingDirection from '../screens/Root/FistCreatingDirection';
import Getconnecting from '../screens/Root/Getconnecting';

const Stack = createStackNavigator();

const RootStarting = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Launching"
        component={FistLaunching}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="After Launching"
        component={FistAfterLaunching}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Creating Direction"
        component={FistCreatingDirection}
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
