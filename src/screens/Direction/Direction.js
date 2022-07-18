import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import ProfilUser from '../../components/ProfilUser';
import ButtonAddingItems from '../../components/ButtonAddingItems';


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
      <StatusBar
        animated={true}
        backgroundColor="#7cc3bc"
        barStyle="default"
        showHideTransition="fade"
        hidden={false}
      />
      <ScrollView style={styles.ui_splash_global_contain_hunts}>
        <View style={styles.ui_splash_global_contain_registered_space}>
          <View style={styles.ui_splash_global_contain_registered_global_showUser}>
            <View style={styles.ui_splash_global_contain_registered_global_contain_title}>
                <Text style={styles.ui_splash_global_contain_registered_global_config_font1}>Personnels agrégés</Text>
            </View>
            <View style={styles.ui_splash_global_contain_registered_global_contain}>
              <ProfilUser Utitle='Vous' Username='RY' Ustatut='yellow' />
              <ProfilUser Utitle='Caissier' Username='ND' Ustatut='#8bc34a' />
              <ProfilUser Utitle='Composteur' Username='ZA' Ustatut='#f44336' />
            </View>
          </View>

          <View style={styles.ui_splash_global_contain_registered_global_showInformation}>
            <View style={styles.ui_splash_global_contain_registered_global_contain_title}>
                <Text style={styles.ui_splash_global_contain_registered_global_config_font1}>Forfaits préférés (Services souscris)</Text>
            </View>
            <View style={styles.ui_splash_global_contain_registered_global_contain_information}>
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
          </View>

        </View>
      </ScrollView>
      <ButtonAddingItems titleico='eye-dropper' titlebutton='notes' borderrounds={50} />
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
    height: 140,
    backgroundColor: '#f7f5f5cc',
    justifyContent: 'center',
  },
  ui_splash_global_contain_registered_global_contain: {
    width: '100%',
    height: 98,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  ui_splash_global_contain_registered_global_showInformation: {
    width: '100%',
    height: 168,
    backgroundColor: '#f7f5f5cc',
    justifyContent: 'center',
  },
  ui_splash_global_contain_registered_global_contain_information: {
    backgroundColor: 'white',
    width: '100%',
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
  ui_splash_global_contain_registered_global_config_font5: {
    left: -5,
    color: '#f44336',
  },

});

export default Direction;
