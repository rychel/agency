import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import ProfilUser from '../../components/ProfilUser';


const Direction = ({navigation}) => {

  const gotoGetstarting = () => {
    navigation.goBack('admin');
  };
  
  const [busvoyage, setBusvoyage] = useState([
    {key: 1, immat: 'JK76KJ76', id: 676, chauffeur: 'Bopp Dylan'},
    {key: 2, immat: 'K7S40976', id: 726, chauffeur: 'Steve Jobs'},
    {key: 3, immat: 'M7SFD976', id: 226, chauffeur: 'Bartholomey, ...'},
    {key: 4, immat: 'K7SFDDZ7', id: 426, chauffeur: 'Carlos'},
  ]);

  /** we store the Id of connexion contains  */
   /*
  useEffect(() => {
    getIdthief();
  });

  const [idconnexion, setIdconnexion] = useState(0);

  const getIdthief = () => {
    try {
      AsyncStorage.getItem('Idconnexion').then((value) => {
        if(value != null) {
          setIdconnexion(value);
        }
        else{
          navigation.goBack('admin');
        }
      });
    } catch(e) {
      console.log(e);
    }
  }*/

  return (
    <View>
    <View style={styles.ui_splash_global_contain_hunts}>
      <View style={styles.ui_splash_global_contain_registered_space}>
        <View style={styles.ui_splash_global_contain_registered_global_showUser}>
          <View style={styles.ui_splash_global_contain_registered_global_contain}>
            <ProfilUser Utitle='Vous' Username='Chef agence' Uphoto={require('../../../assets/Logo3.jpg')} Ustatut='yellow' />
            <ProfilUser Utitle='Caissière' Username='Ndongo' Uphoto={require('../../../assets/Logo4.jpg')} Ustatut='#8bc34a' />
          </View>
        </View>

        <View style={styles.ui_splash_global_contain_registered_global_showInformation}>
          {/* general configuration */}
          <View style={styles.ui_splash_global_contain_registered_global_contain_information}>
            <View style={styles.ui_splash_global_contain_registered_global_contain_title}>
              <Text style={styles.ui_splash_global_contain_registered_global_config_font1}>Information sur Noblesse (Configuration générale)</Text>
            </View>
            <View style={styles.ui_splash_global_contain_registered_global_contain_title}>
              <Text style={styles.ui_splash_global_contain_registered_global_config_font2}>Forfaits préférés (Services souscris)</Text>
            </View>
            <View style={styles.ui_splash_global_contain_registered_global_contain_title}>
              <FontAwesome5 name="splotch" size={20} color='#ffeb3b' />
              <Text style={styles.ui_splash_global_contain_registered_global_config_font3}>Forfait clientèle</Text>
            </View>
            <View style={styles.ui_splash_global_contain_registered_global_contain_title}>
              <FontAwesome5 name="splotch" size={20} color='#ffeb3b' />
              <Text style={styles.ui_splash_global_contain_registered_global_config_font3}>Forfait transport</Text>
            </View>
            <View style={styles.ui_splash_global_contain_registered_global_contain_title}>
              <FontAwesome5 name="splotch" size={20} color='#ffeb3b' />
              <Text style={styles.ui_splash_global_contain_registered_global_config_font3}>Forfait location (par défaut)</Text>
            </View>
            <View style={styles.ui_splash_global_contain_registered_global_contain_title}>
              <FontAwesome5 name="star" size={20} color='#f44336' />
              <Text style={styles.ui_splash_global_contain_registered_global_config_font3}>Forfait colis</Text>
            </View>
          </View>
          {/* Bus configuration */}
          <View style={styles.ui_splash_global_contain_registered_global_contain_information}>
            <View style={styles.ui_splash_global_contain_registered_global_contain_title}>
              <Text style={styles.ui_splash_global_contain_registered_global_config_font1}>Information sur Noblesse (bus de voyage)</Text>
            </View>
            {/* Title informmations */}
            <View style={styles.ui_splash_global_bus_contain_registered_global_contain_title}>
              <Text style={styles.ui_splash_global_contain_registered_global_config_font4}>Immatriculation</Text>
              <Text style={styles.ui_splash_global_contain_registered_global_config_font4}>Identification</Text>
              <Text style={styles.ui_splash_global_contain_registered_global_config_font4}>Chauffeur</Text>
            </View>
            {/* Contains informations */}
            {
              busvoyage.map((object) => {
                return (
                  <View> 
                    <View style={styles.ui_splash_global_bus_soup_contain_registered_global_contain_title}>
                      <Text style={styles.ui_splash_global_contain_registered_global_config_font6}>{object.immat}</Text>
                      <Text style={styles.ui_splash_global_contain_registered_global_config_font6}>{object.id}</Text>
                      <Text style={styles.ui_splash_global_contain_registered_global_config_font6}>{object.chauffeur}</Text>
                    </View>
                  </View>
                )
              })
            }

            <TouchableOpacity activeOpacity={0.8}
              onPress={() => {navigation.navigate('Bus')}}>
              <View style={styles.ui_splash_global_bus_show_contain_registered_global_contain_title}>
                <View style={styles.ui_splash_global_bus_show_registered_global_contain_title}>
                  <Text style={styles.ui_splash_global_contain_registered_global_config_font5}>Voir plus</Text>
                  <FontAwesome5 name="angle-right" size={20} color='#f44336' />
                </View>
              </View>
            </TouchableOpacity>
          </View>

          
        </View>
        
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_global_contain_hunts: {
    height: Dimensions.get('window').height,
  },
  ui_splash_global_contain_registered_space: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  ui_splash_global_contain_registered_global_showUser: {
    width: '100%',
    height: 190,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
  },
  ui_splash_global_contain_registered_global_contain: {
    width: '100%',
    height: 175,
    borderWidth: 1.6,
    backgroundColor: 'white',
    borderColor: '#f7f7f7',
    flexDirection: 'row',
  },
  ui_splash_global_contain_registered_global_showInformation: {
    width: '100%',
    height: 490,
    backgroundColor: '#cdc8c8',
    justifyContent: 'center',
  },
  ui_splash_global_contain_registered_global_contain_information: {
    width: '100%',
    height: 215,
    borderWidth: 1.6,
    backgroundColor: 'white',
    borderColor: '#efefef59',
    flexDirection: 'column',
    marginTop: 5,
  },
  ui_splash_global_contain_registered_global_contain_title: {
    margin: 5,
    flexDirection: 'row',
  },
  ui_splash_global_contain_registered_global_config_font1: {
    fontFamily: 'NotoSans-Regular'
  },
  ui_splash_global_contain_registered_global_config_font2: {
    fontFamily: 'Fontisto',
  },
  ui_splash_global_contain_registered_global_config_font3: {
    margin: 2,
    left: 5,
  },
  ui_splash_global_bus_contain_registered_global_contain_title: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
    flexDirection: 'row',
    paddingRight: 12,
  },
  ui_splash_global_bus_soup_contain_registered_global_contain_title: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: 1,
    flexDirection: 'row',
    paddingRight: 20,
  },
  ui_splash_global_contain_registered_global_config_font4: {
    fontFamily: 'Entypo',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
    width: '39.33%',
  },
  ui_splash_global_contain_registered_global_config_font5: {
    left: -5,
    color: '#f44336',
  },
  ui_splash_global_contain_registered_global_config_font6: {
    margin: 2,
    left: 5,
    width: '39.33%',
  },
  ui_splash_global_bus_show_contain_registered_global_contain_title: {
    width: '100%',
  },
  ui_splash_global_bus_show_registered_global_contain_title: {
    width: '100%',
    marginTop: 10,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },

});

export default Direction;
