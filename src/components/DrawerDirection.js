import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

/* utils imports */
import PersonalProfil from './PersonalProfil';
import ItemDrawerMenu from './ItemDrawerMenu';

const DrawerDirection = props => {
  return (
    <DrawerContentScrollView style={styles.ui_splash_contain_header_globe}>
      <PersonalProfil
        Titleimage={require('../../assets/Logo4.jpg')}
        Titlename="Otello"
        Titlesubname="Parfait Simb Coig"
        Titlepost="Chef d'agence"
        Titlenumber="673845359"
      />

      <View style={styles.ui_splash_contain_header_tab_stats_container}>
        <View style={styles.ui_splash_contain_header_tab_stats_contain}>
          <View style={styles.ui_splash_contain_header_items_contains}>
            <Text style={styles.ui_splash_contain_header_params_fonts4}>
              30
            </Text>
            <Text style={styles.ui_splash_contain_header_params_fonts5}>
              Chauffeur
            </Text>
          </View>
          <View style={styles.ui_splash_contain_header_items_contains}>
            <Text style={styles.ui_splash_contain_header_params_fonts4}>
              40
            </Text>
            <Text style={styles.ui_splash_contain_header_params_fonts5}>
              Coaster
            </Text>
          </View>
          <View style={styles.ui_splash_contain_header_items_contains}>
            <Text style={styles.ui_splash_contain_header_params_fonts4}>3</Text>
            <Text style={styles.ui_splash_contain_header_params_fonts5}>
              Vip
            </Text>
          </View>
          <View style={styles.ui_splash_contain_header_items_contains}>
            <Text style={styles.ui_splash_contain_header_params_fonts4}>
              20
            </Text>
            <Text style={styles.ui_splash_contain_header_params_fonts5}>
              Porteur
            </Text>
          </View>
        </View>

        <View style={styles.ui_splash_contain_header_tab_stats_contain}>
          <View style={styles.ui_splash_contain_header_items_contains}>
            <Text style={styles.ui_splash_contain_header_params_fonts4}>2</Text>
            <Text style={styles.ui_splash_contain_header_params_fonts5}>
              Caissière
            </Text>
          </View>
          <View style={styles.ui_splash_contain_header_items_contains}>
            <Text style={styles.ui_splash_contain_header_params_fonts4}>1</Text>
            <Text style={styles.ui_splash_contain_header_params_fonts5}>
              Sécrétaire
            </Text>
          </View>
          <View style={styles.ui_splash_contain_header_items_contains}>
            <Text style={styles.ui_splash_contain_header_params_fonts4}>2</Text>
            <Text style={styles.ui_splash_contain_header_params_fonts5}>
              Composteur
            </Text>
          </View>
        </View>
      </View>

      {/*administration session*/}
      <View
        style={styles.ui_splash_contain_header_administration_contains_block}>
        <ItemDrawerMenu
          Titleico="user-friends"
          Titlename="Créer un poste"
          Titlenotif="1"
        />
        <ItemDrawerMenu
          Titleico="bookmark"
          Titlename="Voir les archives"
          Titlenotif="0"
        />
        <ItemDrawerMenu
          Titleico="sun"
          Titlename="Paramètres"
          Titlenotif="0"
          onPress={() => {
            props.navigation.navigate('Setting');
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
    width: '100%',
    height: Dimensions.get('window').height,
    backgroundColor: '#7cc3bc',
  },
  ui_splash_contain_header_params_fonts4: {
    fontWeight: '800',
    fontSize: 17,
    color: '#f44336',
  },
  ui_splash_contain_header_params_fonts5: {
    fontSize: 11,
  },
  ui_splash_contain_header_tab_stats_container: {
    width: '100%',
    height: 220,
    borderRadius: 5,
    flexDirection: 'column',
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderWidth: 1,
    borderColor: '#03a9f41a',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  ui_splash_contain_header_tab_stats_contain: {
    width: '100%',
    height: 70,
    top: 2,
    flexDirection: 'row',
    marginBottom: 20,
  },
  ui_splash_contain_header_items_contains: {
    width: '22.33%',
    height: 80,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  ui_splash_contain_header_administration_contains_block: {
    width: '100%',
    backgroundColor: 'white',
  },
});

export default DrawerDirection;
