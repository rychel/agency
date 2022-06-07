import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ScrollMenu = (props) => {
  const {onPress} = props;
  
  return (
    <View style={styles.ui_splash_contain_globe_slide_memu}>
        <TouchableOpacity activeOpacity={0.7}
                          onPress={onPress}>
            <View style={styles.ui_splash_contain_globe_cadre_tags}>
                <FontAwesome5 name="align-right" size={30} color='white' />
            </View>
        </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
   ui_splash_contain_globe_slide_memu: {
    position: 'absolute',
    height: Dimensions.get('window').height,
    width: 64,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
   },
   ui_splash_contain_globe_cadre_tags: {
    borderRadius: 100,
    width: 60,
    height: 65,
    backgroundColor: '#f44336',
    justifyContent: 'center',
    alignItems: 'center',
   }
});

export default ScrollMenu;
