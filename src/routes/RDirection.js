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
import DrawerDirection from '../components/DrawerDirection';
import Bus from '../screens/Direction/Bus';
import TitleHeaderBar from '../components/TitleHeaderBar';


import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const RDirection = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Direction"
      screenOptions={{
        drawerStyle: {
          width: Dimensions.get('window').width - 30,
        },
      }}
      drawerType="permanent"
      drawerContent={props => <DrawerDirection {...props} />}>
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
      
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({});

export default RDirection;
