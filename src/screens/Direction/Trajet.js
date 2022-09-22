import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  get_agency_direction,
  update_site_localisation,
} from '../../store/Log/Dir/DirActions';
import NetInfo from '@react-native-community/netinfo';
import NotificationExplain from '../../components/NotificationExplain';
import ItemConfigSlug from '../../components/ItemConfigSlug';
import ButtonAddingItems from '../../components/ButtonAddingItems';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const Trajet = props => {
  const [site, setSite] = useState('');
  const [target, setTarget] = useState('');

  const getInfo_agency = () => {
    try {
      AsyncStorage.getItem('token').then(value => {
        dispatch(get_agency_direction(value));
      });
    } catch (e) {
      console.log(e);
    }
  };

  const updateSite_localisation = () => {
    try {
      AsyncStorage.getItem('token').then(id => {
        if (site != '') {
          dispatch(update_site_localisation(id, site));
          setSite('');
        } else {
          ToastAndroid.show(
            'Entrer la ville de résidence avant de valider',
            1000,
          );
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getInfo_agency();
  });

  const info_agency = useSelector(state => state.DirReducers.info_agency);
  const dispatch = useDispatch();

  return (
    <View style={styles.ui_splash_contain_header_globe}>
      <NotificationExplain Titlemessage="Définir les trajets qui seront utilisés par votre agence." />
      <ScrollView style={styles.ui_splash_contain_registration_maid_globe}>
        <ScrollView
          style={
            info_agency[0]?.Site === null
              ? styles.ui_splash_contain_registration_maid_globe_shadow
              : styles.ui_splash_contain_registration_un_maid_globe_shadow
          }>
          <View style={styles.ui_splash_contain_first_item_white_globe}>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.ui_splash_closed_registration_icon_btn}>
                annuler.
              </Text>
            </TouchableOpacity>
            {info_agency[0]?.Site === null ? (
              <View style={styles.ui_splash_contain_update_place_agency_globe}>
                <Text style={styles.ui_splash_contain_label_configuration_name}>
                  Localisation.
                </Text>
                <View style={styles.ui_splash_contain_subupdate_place_agency}>
                  <Text
                    style={
                      styles.ui_splash_contain_sublabel_configuration_name
                    }>
                    Entrer la localisation de votre agence avant de continuer
                  </Text>
                  <TextInput
                    style={styles.ui_splash_contain_input_update_localisation}
                    placeholder="EX: Douala"
                    onChangeText={value => {
                      setSite(value);
                    }}
                  />
                </View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={
                    site === ''
                      ? styles.ui_splash_contain_btn_disabled_target
                      : styles.ui_splash_contain_btn_update_localisation
                  }
                  onPress={updateSite_localisation}>
                  <Text
                    style={styles.ui_splash_contain_text_btn_upd_localisation}>
                    Enregistrer
                  </Text>
                </TouchableOpacity>
              </View>
            ) : null}
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
                    editable={false}
                    onChangeText={value => {
                      setTarget(value);
                    }}
                  />
                  <TextInput
                    style={styles.ui_splash_contain_dropdown_town_place}
                    placeholder="Destination"
                  />
                </View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={
                    target === ''
                      ? styles.ui_splash_contain_btn_disabled_target
                      : styles.ui_splash_contain_btn_add_place_target
                  }>
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
  ui_splash_contain_registration_un_maid_globe_shadow: {
    width: '100%',
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
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
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    left: 2,
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
    borderColor: '#f1f0f0cf',
    borderRadius: 3,
    fontFamily: 'Roboto-Light',
    color: '#101010a6',
    fontSize: 16,
    backgroundColor: '#f1f0f0cf',
  },
  ui_splash_contain_second_item_white_globe: {
    backgroundColor: 'white',
    marginTop: 6,
  },
  ui_splash_contain_dropdown_town_place: {
    borderWidth: 0.8,
    borderColor: '#0070c6b5',
    width: '95%',
    fontFamily: 'PontanoSans-Regular',
    alignSelf: 'center',
    borderRadius: 4,
    color: '#0070c6b5',
    fontSize: 16,
  },
  ui_splash_contain_btn_add_place_target: {
    width: 90,
    height: 45,
    backgroundColor: '#ff9800',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    left: 2,
  },
  ui_splash_contain_text_btn_add_place_target: {
    color: 'white',
    fontFamily: 'Hind-Light',
    fontSize: 16,
  },
  ui_splash_contain_btn_disabled_target: {
    width: 90,
    height: 45,
    backgroundColor: '#f1f0f0cf',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    left: 2,
  },
});

export default Trajet;
