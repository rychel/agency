import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

import ButtonAddingItems from '../../components/ButtonAddingItems';
import TipsBus from '../../components/TipsBus';

const Bus = (props) => {
  
  return (
    <View style={styles.ui_splash_contain_header_globe}>
        <TipsBus Idbus={676} 
                 Immatbus='JK76JK76' 
                 Chauffeurbus='Bopp' 
                 Typebus='Coaster' />
        <TipsBus Idbus={766}
                 Immatbus='K7840976' 
                 Chauffeurbus='Chris' 
                 Typebus='Vip' />
        <TipsBus Idbus={226} 
                 Immatbus='M7SFD976' 
                 Chauffeurbus='Bartholomey' 
                 Typebus='Vip' />
        <ButtonAddingItems titleico='faPlus' titlebutton='ajouter' borderrounds={50} />
    </View>
  )
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
    width: '100%',
    height: Dimensions.get('window').height,
    backgroundColor: '#f1bfbf14',
  }
});

export default Bus;
