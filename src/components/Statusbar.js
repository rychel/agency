import React from 'react';
import {StatusBar} from 'react-native';

const Statusbar = () => {
  return (
    <StatusBar
      animated={true}
      backgroundColor="#ff980052"
      barStyle="default"
      showHideTransition="fade"
      hidden={false}
    />
  );
};

export default Statusbar;
