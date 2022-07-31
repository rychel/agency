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
import {Provider, useSelector} from 'react-redux';
import {store} from './src/store/Log/store';

import RootDirection from './src/routes/RootDirection';
import RootStarting from './src/routes/RootStarting';

const AppAuth = () => {
  const token = useSelector(state => state.LoginReducer.authtoken);

  console.log(token);
  return (
    <NavigationContainer>
      {token != null ? <RootDirection /> : <RootStarting />}
    </NavigationContainer>
  );
};

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 100);
  }, []);

  return (
    <Provider store={store}>
      <AppAuth />
    </Provider>
  );
};

export default App;
