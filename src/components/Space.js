import React from 'react';
import {
  View,
} from 'react-native';

const Space = (props) => {
  const {Hwidth} = props;
  
  return (
    <View style={{marginTop: Hwidth}}></View>
  );
};

export default Space;
