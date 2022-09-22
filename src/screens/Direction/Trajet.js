import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';
import NotificationExplain from '../../components/NotificationExplain';
import ItemConfigSlug from '../../components/ItemConfigSlug';
import ButtonAddingItems from '../../components/ButtonAddingItems';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const Trajet = props => {
  return (
    <View style={styles.ui_splash_contain_header_globe}>
      <NotificationExplain Titlemessage="Définir les trajets qui seront utilisés par votre agence." />
      <ScrollView style={styles.ui_splash_contain_registration_maid_globe}>
        <ScrollView
          style={styles.ui_splash_contain_registration_maid_globe_shadow}>
          <View style={styles.ui_splash_contain_first_item_white_globe}>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.ui_splash_closed_registration_icon_btn}>
                annuler.
              </Text>
            </TouchableOpacity>
            <View style={styles.ui_splash_contain_update_place_agency_globe}>
              <Text style={styles.ui_splash_contain_label_configuration_name}>
                Localisation.
              </Text>
              <View style={styles.ui_splash_contain_subupdate_place_agency}>
                <Text
                  style={styles.ui_splash_contain_sublabel_configuration_name}>
                  Entrer la localisation de votre agence avant de continuer
                </Text>
                <TextInput
                  style={styles.ui_splash_contain_input_update_localisation}
                  placeholder="ex: Douala"
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.ui_splash_contain_btn_update_localisation}>
                <Text
                  style={styles.ui_splash_contain_text_btn_upd_localisation}>
                  Enregistrer
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.ui_splash_contain_second_item_white_globe}>
            <View style={styles.ui_splash_contain_update_add_agency_globe}>
              <Text style={styles.ui_splash_contain_label_configuration_name}>
                Trajet.
              </Text>
              <View style={styles.ui_splash_contain_subupdate_add_agency}>
                <Text
                  style={
                    styles.ui_splash_contain_sublabel_add_configuration_name
                  }>
                  Localisation prédéfinie comme Départ.
                </Text>
                <View
                  style={styles.ui_splash_contain_subupdate_add_phantom_agency}>
                  <TextInput
                    style={styles.ui_splash_contain_input_add_target}
                    value="Kribi"
                  />
                  <TextInput
                    style={styles.ui_splash_contain_dropdown_town_place}
                    placeholder="Destination"
                  />
                </View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.ui_splash_contain_btn_add_place_target}>
                  <Text
                    style={styles.ui_splash_contain_text_btn_add_place_target}>
                    Ajouter
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
      <ButtonAddingItems
        titleico={faPlus}
        titlebutton="ajouter"
        borderrounds={50}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  ui_splash_contain_registration_maid_globe: {
    width: '100%',
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
    zIndex: 2,
    top: -50,
  },
  ui_splash_contain_registration_maid_globe_shadow: {
    width: '100%',
    height: Dimensions.get('window').height,
    backgroundColor: '#adadad45',
  },
  ui_splash_contain_first_item_white_globe: {
    backgroundColor: 'white',
  },
  ui_splash_closed_registration_icon_btn: {
    marginLeft: 10,
    marginTop: 15,
    fontSize: 18,
    fontFamily: 'Hind-Light',
    color: '#f44336c7',
  },
  ui_splash_contain_update_place_agency_globe: {
    width: '93%',
    height: 195,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 5,
  },
  ui_splash_contain_subupdate_place_agency: {
    width: '100%',
    flexDirection: 'column',
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ui_splash_contain_label_configuration_name: {
    color: '#2196f3',
    fontFamily: 'Roboto-Light',
    margin: 3,
    fontSize: 17,
  },
  ui_splash_contain_sublabel_configuration_name: {
    color: '#383737',
    fontFamily: 'Quicksand-VariableFont_wght',
    margin: 3,
    fontSize: 15,
    textAlign: 'center',
  },
  ui_splash_contain_input_update_localisation: {
    width: '95%',
    height: 50,
    borderWidth: 0.6,
    borderColor: '#0076d4',
    borderRadius: 3,
  },
  ui_splash_contain_btn_update_localisation: {
    width: 110,
    height: 45,
    backgroundColor: '#2196f3',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    left: 10,
  },
  ui_splash_contain_text_btn_upd_localisation: {
    color: 'white',
    fontFamily: 'Hind-Light',
    fontSize: 16,
  },
  ui_splash_contain_update_add_agency_globe: {
    width: '93%',
    height: 245,
    marginLeft: 10,
    marginTop: 10,
  },
  ui_splash_contain_subupdate_add_agency: {
    width: '100%',
    height: 110,
    alignItems: 'flex-start',
  },
  ui_splash_contain_sublabel_add_configuration_name: {
    color: '#938f8f',
    fontFamily: 'WorkSans-VariableFont_wght',
    margin: 3,
    fontSize: 13,
    textAlign: 'center',
  },
  ui_splash_contain_subupdate_add_phantom_agency: {
    width: '100%',
    height: 130,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  ui_splash_contain_input_add_target: {
    width: '95%',
    height: 50,
    borderWidth: 0.6,
    borderColor: '#0000007d',
    borderRadius: 3,
    fontFamily: 'PontanoSans-Regular',
    color: '#101010a6',
  },
  ui_splash_contain_second_item_white_globe: {
    backgroundColor: 'white',
    marginTop: 6,
  },
  ui_splash_contain_dropdown_town_place: {
    borderWidth: 0.8,
    borderColor: '#ff9800',
    width: '95%',
    fontFamily: 'PontanoSans-Regular',
    alignSelf: 'center',
    borderRadius: 4,
    color: '#ff9800',
  },
  ui_splash_contain_btn_add_place_target: {
    width: 90,
    height: 45,
    backgroundColor: '#ff9800',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    left: 10,
  },
  ui_splash_contain_text_btn_add_place_target: {
    color: 'white',
    fontFamily: 'Hind-Light',
    fontSize: 16,
  },
});

export default Trajet;
