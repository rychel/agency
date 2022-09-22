import React, {useEffect, useRef, useState} from 'react';
import {Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {get_agency_direction} from '../store/Log/Dir/DirActions';
import NetInfo from '@react-native-community/netinfo';
import Direction from '../screens/Direction/Direction';
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
import ConnexionStatus from '../components/ConnexionStatus';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const RootDirection = () => {
  const [isOnline, setOnlineStatus] = useState(
    NetInfo.useNetInfo().isConnected,
  );
  const [onLoad, setOnLoad] = useState(true);

  const getInfo_agency = () => {
    try {
      AsyncStorage.getItem('token').then(async value => {
        await dispatch(get_agency_direction(value));
        setOnLoad(false);
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    NetInfo.refresh().then(state => {
      setOnlineStatus(state.isConnected);
      getInfo_agency();
    });
  });

  const info_agency = useSelector(state => state.DirReducers.info_agency);
  const dispatch = useDispatch();

  return (
    <Drawer.Navigator
      initialRouteName="Direction"
      screenOptions={{
        drawerStyle: {
          width: Dimensions.get('window').width - 40,
        },
      }}
      drawerType="permanent"
      drawerContent={props => <DrawerDirection {...props} />}
      backBehavior="history">
      <Drawer.Screen
        name="Direction"
        component={Direction}
        options={{
          header: props => (
            <>
              <ConnexionStatus Isconnected={isOnline} />
              <HeaderUser
                Agence={info_agency[0]?.NomAgence}
                Site={info_agency[0]?.Site}
                Quartier={info_agency[0]?.Quartier}
                onPress={() => {
                  props.navigation.toggleDrawer();
                }}
                Netstatus={isOnline}
                onLoad={onLoad}
              />
            </>
          ),
          headerStyle: {
            height: 70,
          },
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{
          header: props => (
            <TitleHeaderBar
              Title="Parametres"
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
    </Drawer.Navigator>
  );
};

export default RootDirection;
