import React from 'react';
import {StatusBar} from 'react-native';

const Statusbar = () => {
  return (
    <StatusBar
      animated={true}
      backgroundColor="#ff9800"
      barStyle="default"
      showHideTransition="fade"
      hidden={false}
    />
  );
};

export default Statusbar;
