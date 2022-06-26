import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const TipsBus = (props) => {
  const {Idbus, Immatbus, Chauffeurbus, Typebus} = props;

  return (
    <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.ui_splash_contain_header_globe}>
            <View style={styles.ui_splash_contain_hunt_tips_bus}>
                <Text style={styles.ui_splash_global_contain_registered_global_config_font4}>Bus:</Text>
                <Text style={styles.ui_splash_global_contain_registered_global_config_font5}>{Idbus}</Text>
            </View>
            <View style={styles.ui_splash_contain_hunt_tips_bus}>
                <Text style={styles.ui_splash_global_contain_registered_global_config_font4}>Immatriculation:</Text>
                <Text style={styles.ui_splash_global_contain_registered_global_config_font6}>{Immatbus}</Text>
            </View>
            <View style={styles.ui_splash_contain_hunt_tips_bus}>
                <Text style={styles.ui_splash_global_contain_registered_global_config_font4}>Chauffeur(s):</Text>
                <Text style={styles.ui_splash_global_contain_registered_global_config_font7}>{Chauffeurbus}</Text>
            </View>
            <View style={styles.ui_splash_contain_hunt_tips_bus}>
                <Text style={styles.ui_splash_global_contain_registered_global_config_font4}>Type:</Text>
                <Text style={styles.ui_splash_global_contain_registered_global_config_font8}>{Typebus}</Text>
            </View>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
    width: '98.5%',
    height: 210,
    backgroundColor: 'white',
    margin: 3,
  },
  ui_splash_contain_hunt_tips_bus: {
    width: '98.5%',
    height: 30,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ui_splash_global_contain_registered_global_config_font4: {
    fontFamily: 'Fontisto',
    fontWeight: 'bold',
    fontSize: 15,
    textTransform: 'uppercase',
  },
  ui_splash_global_contain_registered_global_config_font5: {
    fontFamily: 'AmaticSC-Regular',
    fontSize: 15,
    margin: 6,
    height: 33,
    fontStyle: 'italic',
    backgroundColor: '#f44336',
    padding: 5,
    borderRadius: 5,
    justifyContent: 'center',
    color: 'white',
  },
  ui_splash_global_contain_registered_global_config_font6: {
    fontFamily: 'AmaticSC-Regular',
    fontSize: 15,
    margin: 6,
    height: 33,
    fontStyle: 'italic',
    backgroundColor: '#f44336cf',
    padding: 5,
    borderRadius: 5,
    justifyContent: 'center',
    color: 'white',
  },
  ui_splash_global_contain_registered_global_config_font7: {
    fontFamily: 'AmaticSC-Regular',
    fontSize: 15,
    margin: 6,
    height: 33,
    fontStyle: 'italic',
    backgroundColor: '#f4433691',
    padding: 5,
    borderRadius: 5,
    justifyContent: 'center',
    color: 'white',
  },
  ui_splash_global_contain_registered_global_config_font8: {
    fontFamily: 'AmaticSC-Regular',
    fontSize: 15,
    margin: 6,
    height: 33,
    fontStyle: 'italic',
    backgroundColor: '#f4433659',
    padding: 5,
    borderRadius: 5,
    justifyContent: 'center',
    color: 'white',
  },
});

export default TipsBus;
