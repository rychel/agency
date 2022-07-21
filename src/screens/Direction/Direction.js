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
import DashboardDirection from '../../components/DashboardDirection';
import ItemStatDirection from '../../components/ItemStatDirection';
import TitleItemStat from '../../components/TitleItemStat';
import ItemForfaitTips from '../../components/ItemForfaitTips';
import TitleTravelDay from '../../components/TitleTravelDay';
import CadreTravelDay from '../../components/CadreTravelDay';

const Direction = ({navigation}) => {
  const gotoGetstarting = () => {
    navigation.goBack('admin');
  };

  const [dashboard, setDashboard] = useState(false);

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
  const openDashboard = () => {
    setDashboard(true);
  };
  const closeDashboard = () => {
    setTimeout(() => {
      setDashboard(false);
    }, 100);
  };

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
          <View
            style={styles.ui_splash_global_contain_registered_global_showUser}>
            <TitleItemStat Titlesub="Personnels agrégés" />
            <ScrollView
              style={styles.ui_splash_global_contain_registered_global_contain}
              horizontal={true}>
              <ProfilUser Utitle="Vous" Username="RY" Ustatut="yellow" Uphoto={require('../../../assets/Logo3.jpg')} />
              <ProfilUser Utitle="Caissier" Username="ND" Ustatut="#8bc34a" Uphoto={require('../../../assets/Logo4.jpg')} />
              <ProfilUser Utitle="Composteur" Username="ZA" Ustatut="#f44336" Uphoto={require('../../../assets/Logo3.jpg')} />
            </ScrollView>
          </View>
          <View
            style={
              styles.ui_splash_global_contain_registered_global_showInformation
            }>
            <TitleItemStat Titlesub="Forfaits préférés (Services souscris)" />
            <View
              style={
                styles.ui_splash_global_contain_registered_global_contain_information
              }>
              <ItemForfaitTips
                Titleico="splotch"
                Titlesub="Forfait clientèle"
                Titlecl="#ffeb3b"
              />
              <ItemForfaitTips
                Titleico="splotch"
                Titlesub="Forfait transport"
                Titlecl="#ffeb3b"
              />
              <ItemForfaitTips
                Titleico="splotch"
                Titlesub="Forfait location"
                Titlecl="#ffeb3b"
              />
              <ItemForfaitTips
                Titleico="splotch"
                Titlesub="Forfait colis"
                Titlecl="#f44336"
              />
            </View>
          </View>
          <TitleItemStat Titlesub="Statistique de l'agence" />
          <View style={styles.ui_splash_contain_header_tab_stats_container}>
            <ScrollView
              style={styles.ui_splash_contain_header_tab_stats_contain}
              horizontal={true}>
              <ItemStatDirection
                Titleico="user-astronaut"
                Titlesub="Chauffeur"
                Titlestat="33"
                Titlebg="#03a9f46b"
                Titlecl="orange"
              />
              <ItemStatDirection
                Titleico="car-alt"
                Titlesub="Coaster"
                Titlestat="30"
                Titlebg="#f44336d1"
                Titlecl="orange"
              />
              <ItemStatDirection
                Titleico="bus"
                Titlesub="Vip"
                Titlestat="6"
                Titlebg="#ffeb3b"
                Titlecl="orange"
              />
              <ItemStatDirection
                Titleico="bus-alt"
                Titlesub="Porteur"
                Titlestat="10"
                Titlebg="#9c27b0e3"
                Titlecl="orange"
              />
              <ItemStatDirection
                Titleico="user-tag"
                Titlesub="Caissier"
                Titlestat="5"
                Titlebg="#8bc34aeb"
                Titlecl="orange"
              />
              <ItemStatDirection
                Titleico="user-tie"
                Titlesub="Sécrétaire"
                Titlestat="9"
                Titlebg="#607d8bd6"
                Titlecl="orange"
              />
              <ItemStatDirection
                Titleico="user-minus"
                Titlesub="Composteur"
                Titlestat="3"
                Titlebg="#009688"
                Titlecl="orange"
              />
            </ScrollView>
          </View>
          <TitleItemStat Titlesub="Tableau de bord" />
          <View style={styles.ui_splash_contain_header_tab_journal_contain}>
            <ScrollView
              style={styles.ui_splash_contain_header_scroll_title_grant_journal}
              horizontal={true}>
              <TitleTravelDay
                Titlesub="Voyage d'aujourd'hui"
                Titleico="thumbtack"
                Titlebg="#0061ab40"
              />
              <TitleTravelDay Titlesub="Voyage de demain" Titlebg="#00000014" />
              <TitleTravelDay
                Titlesub="Voyage d'après demain"
                Titlebg="#00000014"
              />
            </ScrollView>
            <ScrollView
              style={styles.ui_splash_contain_cadre_scroll_day_grant_journal}
              horizontal={true}>
              <CadreTravelDay
                Titledepart="Douala"
                Titledestination="Bagangté"
                Titlemodevalidation="Code QR"
                Titlebusico="bus-alt"
                Titleprice="3500"
                Titleheure="08h.."
                Titleidbus="676"
              />
              <CadreTravelDay
                Titledepart="Douala"
                Titledestination="Bagangté"
                Titlemodevalidation="Ticket"
                Titlebusico="bus-alt"
                Titleprice="3500"
                Titleheure="12h.."
                Titleidbus="476"
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      {dashboard ? (
        <DashboardDirection onClose={() => closeDashboard()} />
      ) : (
        <ButtonAddingItems
          titleico="eye-dropper"
          titlebutton="notes"
          borderrounds={50}
          onOpen={() => openDashboard()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_global_contain_hunts: {
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
  },
  ui_splash_global_contain_registered_space: {
    width: Dimensions.get('window').width,
  },
  ui_splash_global_contain_registered_global_showUser: {
    width: '100%',
    justifyContent: 'center',
    height: 190,
  },
  ui_splash_global_contain_registered_global_contain: {
    width: '100%',
    flexDirection: 'row',
  },
  ui_splash_global_contain_registered_global_showInformation: {
    width: '100%',
    height: 168,
    justifyContent: 'center',
  },
  ui_splash_global_contain_registered_global_contain_information: {
    backgroundColor: 'white',
    width: '100%',
  },
  ui_splash_global_contain_registered_global_config_font2: {
    fontFamily: 'Fontisto',
  },
  ui_splash_global_contain_registered_global_config_font5: {
    left: -5,
    color: '#f44336',
  },
  ui_splash_contain_header_tab_stats_container: {
    width: '100%',
    height: 115,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    backgroundColor: 'white',
  },
  ui_splash_contain_header_tab_stats_contain: {
    width: '100%',
    height: 70,
    top: 2,
    flexDirection: 'row',
  },
  ui_splash_contain_header_tab_journal_contain: {
    width: '100%',
    height: 310,
    flexDirection: 'column',
    backgroundColor: 'white',
    marginBottom: 100,
  },
  ui_splash_contain_header_scroll_title_grant_journal: {
    width: Dimensions.get('window').width,
    height: 56,
    flexDirection: 'row',
  },
  ui_splash_contain_cadre_scroll_day_grant_journal: {
    width: '100%',
    height: 238,
    flexDirection: 'row',
  },
});

export default Direction;
