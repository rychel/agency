import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  faSplotch,
  faCarAlt,
  faBus,
  faBusAlt,
  faUserTag,
  faThumbTack,
  faEyeDropper,
} from '@fortawesome/free-solid-svg-icons';
import config from '../../utils/config';
import ProfilUser from '../../components/ProfilUser';
import ButtonAddingItems from '../../components/ButtonAddingItems';
import DashboardDirection from '../../components/DashboardDirection';
import ItemStatDirection from '../../components/ItemStatDirection';
import TitleItemStat from '../../components/TitleItemStat';
import ItemForfaitTips from '../../components/ItemForfaitTips';
import TitleTravelDay from '../../components/TitleTravelDay';
import CadreTravelDay from '../../components/CadreTravelDay';

const Direction = ({navigation}) => {
  const [dashboard, setDashboard] = useState(false);

  const openDashboard = () => {
    setDashboard(true);
  };
  const closeDashboard = () => {
    setDashboard(false);
  };

  return (
    <View>
      <ScrollView style={styles.ui_splash_global_contain_hunts}>
        <View style={styles.ui_splash_global_contain_registered_space}>
          <View
            style={styles.ui_splash_global_contain_registered_global_showUser}>
            <TitleItemStat Titlesub="Personnels de l'agence" />
            <ScrollView
              style={styles.ui_splash_global_contain_registered_global_contain}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <ProfilUser
                Utitle="Vous"
                Username="RY"
                Ustatut="yellow"
                Uphoto={require('../../../assets/Logo3.jpg')}
              />
              <ProfilUser
                Utitle="Caissier"
                Username="ND"
                Ustatut="#8bc34a"
                Uphoto={require('../../../assets/Logo4.jpg')}
              />
              <ProfilUser
                Utitle="Composteur"
                Username="ZA"
                Ustatut="#f44336"
                Uphoto={require('../../../assets/Logo3.jpg')}
              />
            </ScrollView>
          </View>
          <View
            style={
              styles.ui_splash_global_contain_registered_global_showInformation
            }>
            <TitleItemStat Titlesub="Forfaits favoris (Services souscris)" />
            <View
              style={
                styles.ui_splash_global_contain_registered_global_contain_information
              }>
              <ItemForfaitTips
                Titleico={faSplotch}
                Titlesub="Forfait clientèle"
                Titlecl="#ffeb3b"
              />
              <ItemForfaitTips
                Titleico={faSplotch}
                Titlesub="Forfait transport"
                Titlecl="#ffeb3b"
              />
              <ItemForfaitTips
                Titleico={faSplotch}
                Titlesub="Forfait location"
                Titlecl="#ffeb3b"
              />
              <ItemForfaitTips
                Titleico={faSplotch}
                Titlesub="Forfait colis"
                Titlecl="#f44336"
              />
            </View>
          </View>
          <TitleItemStat Titlesub="Statistique de l'agence" />
          <View style={styles.ui_splash_contain_header_tab_stats_container}>
            <ScrollView
              style={styles.ui_splash_contain_header_tab_stats_contain}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <ItemStatDirection
                Titlesub="Chauffeur"
                Titlestat="33"
                Titlebg="#03a9f424"
                Titlecl="#03a9f4cf"
              />
              <ItemStatDirection
                Titlesub="Coaster"
                Titlestat="30"
                Titlebg="#f4433624"
                Titlecl="#f44336d1"
                Titleicl="white"
              />
              <ItemStatDirection
                Titleico={faBusAlt}
                Titlesub="Vip"
                Titlestat="6"
                Titlebg="#ffeb3b33"
                Titlecl="#ffeb3b"
                Titleicl="#726f4dd1"
              />
              <ItemStatDirection
                Titleico={faBus}
                Titlesub="Porteur"
                Titlestat="10"
                Titlebg="#9c27b03b"
                Titlecl="#9c27b0e3"
                Titleicl="#5c4560bf"
              />
              <ItemStatDirection
                Titleico={faUserTag}
                Titlesub="Caissier"
                Titlestat="5"
                Titlebg="#8bc34a30"
                Titlecl="#8bc34aeb"
                Titleicl="#5c4560bf"
              />
              <ItemStatDirection
                Titlesub="Sécrétaire"
                Titlestat="3"
                Titlebg="#607d8b2b"
                Titlecl="#607d8bd6"
                Titleicl="#5c4560bf"
              />
              <ItemStatDirection
                Titlesub="Composteur"
                Titlestat="3"
                Titlebg="#0096882e"
                Titlecl="#009688"
              />
            </ScrollView>
          </View>
          <TitleItemStat Titlesub="Tableau de bord" />
          <View style={styles.ui_splash_contain_header_tab_journal_contain}>
            <ScrollView
              style={styles.ui_splash_contain_header_scroll_title_grant_journal}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <TitleTravelDay
                Titlesub="Voyage d'aujourd'hui"
                Titleico={faThumbTack}
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
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <CadreTravelDay
                Titledepart="Douala"
                Titledestination="Bagangté"
                Titlemodevalidation="Code QR"
                Titlebusico={faBusAlt}
                Titleprice="3500"
                Titleheure="08h.."
                Titleidbus="676"
                Titlebus="Porteur"
                Titlereste="12"
                Titleplace="72"
              />
              <CadreTravelDay
                Titledepart="Douala"
                Titledestination="Bagangté"
                Titlemodevalidation="Ticket"
                Titlebusico={faCarAlt}
                Titleprice="3500"
                Titleheure="12h.."
                Titleidbus="476"
                Titlebus="Coaster"
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      {dashboard ? (
        <DashboardDirection onClose={() => closeDashboard()} />
      ) : (
        <ButtonAddingItems
          titleico={faEyeDropper}
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
    marginBottom: 5,
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
