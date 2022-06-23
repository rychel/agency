import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Dimensions,
  ToastAndroid,
  Animated,
} from 'react-native';


/** import utils component */
import Direction from '../screens/Direction/Direction';
import HeaderUser from '../components/HeaderUser';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const RDirection = () => {

  return (
    <Drawer.Navigator initialRouteName='Direction'>
        <Drawer.Screen
          name="Direction"
          component={Direction}
          options={({navigation}) => ({
            header: () => (<HeaderUser Gtitle='Noblesse voyages' Depart='Douala' Arrive='Yaoundé' onPress={() => {navigation.toggleDrawer()}} />),
            headerStyle: {
              height: 70
            }
          })}
        />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({

});

export default RDirection;
