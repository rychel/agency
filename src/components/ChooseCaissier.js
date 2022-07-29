import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
  Picker, 
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

const ChooseCaissier = props => {
  const {Titleimage, Titlename, Titlesubname} = props;

  return (
    <View style={styles.ui_splash_contain_header_globe}>
      <ScrollView style={styles.ui_splash_contain_modals_message_globe}>
        <View style={styles.ui_splash_contain_header_message_title_grants}>
            <FontAwesomeIcon icon={faTimes} size={20} color='white' />
            <Text style={styles.ui_config_fonts_blocks1}>Choisir le titulaire du poste</Text>
            <FontAwesomeIcon icon={faCheck} size={20} color='white' />
        </View>
        <View style={styles.ui_splash_contain_modals_profil_globe_occupant}>
          <Image
            source={require('../../assets/Logo4.jpg')}
            style={styles.ui_splash_stylise_image_poste_occupant}
            resizeMode='contain'
          />
          <View>
            <Text style={styles.ui_config_fonts_blocks2}>Djeumen Solange</Text>
            <Text style={styles.ui_config_fonts_blocks3}>fabrice</Text>
          </View>
        </View>

        <View style={styles.ui_splash_contain_modals_profil_globe_occupant}>
          <Image
            source={require('../../assets/Logo4.jpg')}
            style={styles.ui_splash_stylise_image_poste_occupant}
            resizeMode='contain'
          />
          <View>
            <Text style={styles.ui_config_fonts_blocks2}>Rodrigue</Text>
            <Text style={styles.ui_config_fonts_blocks3}>Bougg steve</Text>
          </View>
        </View>
        
        


      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ui_splash_contain_header_message_title_grants: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#03a9f4',
    flexDirection: 'row',
  },
  ui_config_fonts_blocks1: {
    height: 22,
    alignContent: 'center',
    color: 'white',
    fontFamily: 'Ionicons',
    fontSize: 16,
    marginLeft: 13,
    marginRight: 13,
    top: 3,
  },
  ui_config_fonts_blocks2: {
    height: 25,
    alignContent: 'center',
    fontFamily: 'Ionicons',
    margin: 5,
    fontSize: 17,
    left: 35,
    fontWeight: 'bold',
  },
  ui_config_fonts_blocks3: {
    height: 22,
    alignContent: 'center',
    fontFamily: 'Feather',
    margin: 5,
    fontSize: 17,
    left: 25,
  },
  ui_splash_contain_modals_message_globe: {
    width: '90%',
    height: '100%',
    marginBottom: 110,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 10,
  },
  ui_splash_stylise_image_poste_occupant: {
    width: 100,
    height: 100,
    borderRadius: 100,
    left: 20,
  },
  ui_splash_contain_modals_profil_globe_occupant: {
    flexDirection: 'row',
    height: 120,
    alignItems: 'center',
  },
});

export default ChooseCaissier;
