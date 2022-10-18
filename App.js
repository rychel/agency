import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {Provider, useSelector, useDispatch} from 'react-redux';
import {store} from './src/store/Log/store';
import {Start} from './src/store/Log/actions';
import LoadingWelcome from './src/components/LoadingWelcome';
import RootDirection from './src/routes/RootDirection';
import RootStarting from './src/routes/RootStarting';
import Statusbar from './src/components/Statusbar';

const AppAuth = () => {
  const [loading, setLoading] = useState(true);

  const token = useSelector(state => state.LoginReducer.token);
  const role = useSelector(state => state.LoginReducer.role);

  const dispatch = useDispatch();
  const start = async () => {
    await dispatch(Start());
    setLoading(false);
  };

  useEffect(() => {
    start();
  });

  if (loading) {
    return <LoadingWelcome Messagewaiting="acxios charge le contenu ..." />;
  }

  /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
   * LTI update could not be added via codemod */

  return (
    <NavigationContainer>
      {token === null ? (
        <>
          <Statusbar />
          <RootStarting />
        </>
      ) : role === 'direction' ? (
        <>
          <Statusbar />
          <RootDirection />
        </>
      ) : null}
    </NavigationContainer>
  );
};

const App = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);

  return (
    <Provider store={store}>
      <AppAuth />
    </Provider>
  );
};

export default App;
