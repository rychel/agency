import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  get_config_transport,
  get_personal_employed,
  get_target_point,
  add_self_guichet,
} from '../../store/Log/Dir/DirActions';
import ButtonAddingItems from '../../components/ButtonAddingItems';
import NotificationExplain from '../../components/NotificationExplain';
import HeaderConfig from '../../components/HeaderConfig';
import Space from '../../components/Space';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAngleRight,
  faChalkboard,
  faExclamationCircle,
  faPlus,
  faUserSlash,
} from '@fortawesome/free-solid-svg-icons';

const Caisse = props => {
  const [omaid, setOmaid] = useState(false);
  const [vmaid, setVmaid] = useState(null);
  const [maid, setMaid] = useState([]);
  const [otarget, setOtarget] = useState(false);
  const [vtarget, setVtarget] = useState(null);
  const [target, setTarget] = useState([]);
  const [oguichet, setOguichet] = useState(false);
  const [vguichet, setVguichet] = useState(null);
  const [guichet, setGuichet] = useState([
    {label: 'Guichet classique', value: 'Clasique'},
    {label: 'Guichet vip', value: 'Vip'},
  ]);
  const [oticket, setOticket] = useState(false);
  const [vticket, setVticket] = useState(null);
  const [ticket, setTicket] = useState([]);

  const [interfaceMaid, setInterfaceMaid] = useState(false);

  const getConfig_transport = () => {
    try {
      AsyncStorage.getItem('token').then(value => {
        dispatch(get_config_transport(value));
      });
    } catch (e) {
      console.log(e);
    }
  };

  const getPersonal_employed = () => {
    try {
      AsyncStorage.getItem('token').then(value => {
        dispatch(get_personal_employed(value));
      });
    } catch (e) {
      console.log(e);
    }
  };

  const getTarget_point = () => {
    try {
      AsyncStorage.getItem('token').then(value => {
        dispatch(get_target_point(value));
      });
    } catch (e) {
      console.log(e);
    }
  };

  const {config_transport, personal_employed, target_point} = useSelector(
    state => state.DirReducers,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    getConfig_transport();
    getPersonal_employed();
    getTarget_point();
  }, []);

  const createGuichet = () => {
    console.log(vmaid, vticket, vguichet, vtarget);
    try {
      AsyncStorage.getItem('token').then(async id => {
        const data = await {
          Trajet: vtarget,
          Titulaire: vmaid,
          TicketChoice: vticket,
          TypeGuichet: vguichet,
        };
        dispatch(add_self_guichet(id, data));
      });
    } catch (err) {
      console.log('it wrong: ' + err);
    }
  };

  return (
    <View style={styles.ui_splash_contain_header_globe}>
      <NotificationExplain Titlemessage="Créer les guichets de l'agence et mettre les personnes de la caisse." />
      {/*<NoItemStatus
        Titleico={faChalkboard}
        Titlestatus="Aucun guichet enregistré"
      />*/}
      {interfaceMaid ? (
        <ScrollView
          style={styles.ui_splash_contain_globe_registration_maid_guichet}>
          <NotificationExplain Titlemessage="Le numéro du guichet est assigné automatiquement lors de sa création." />
          <Space Hwidth={15} />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setInterfaceMaid(false);
              setVmaid(null);
              setVtarget(null);
              setVguichet(null);
              setVticket(null);
            }}>
            <Text style={styles.ui_splash_closed_registration_icon_btn}>
              annuler.
            </Text>
          </TouchableOpacity>
          <View style={styles.ui_splash_contain_btn_closed_registration}>
            <HeaderConfig Head="A la caisse" />
          </View>
          <View style={styles.ui_splash_contain_globe_first_block_guichet1}>
            <Text style={styles.ui_splash_contain_config_fonts_regis1}>
              Sélectionner le titulaire du poste
            </Text>
          </View>
          <View style={styles.ui_splash_contain_globe_first_block_guichet2}>
            <DropDownPicker
              open={omaid}
              placeholder="Qui voulez-vous à ce poste ?"
              value={vmaid}
              items={personal_employed.map(item => {
                return {
                  label: item?.NomTit + ' ' + item?.PrenomTit,
                  value: item?.id,
                };
              })}
              setOpen={setOmaid}
              setValue={setVmaid}
              setItems={setMaid}
              textStyle={{
                fontSize: 15,
                fontFamily: 'Hind-Light',
                color: '#009688ba',
              }}
              listMode="MODAL"
              style={styles.ui_splash_contain_Input_Name_place}
            />
          </View>
          <View style={styles.ui_splash_contain_globe_first_block_guichet3}>
            <Text style={styles.ui_splash_contain_config_fonts_regis3}>
              ID:
            </Text>
            <Text style={styles.ui_splash_contain_config_fonts_regis4}>
              {vmaid}
            </Text>
          </View>
          <View style={styles.ui_splash_contain_globe_first_block_guichet1}>
            <Text style={styles.ui_splash_contain_config_fonts_regis1}>
              Sélectionner le Trajet
            </Text>
          </View>
          <View style={styles.ui_splash_contain_globe_first_block_guichet4}>
            <DropDownPicker
              open={otarget}
              placeholder="Pour quel trajet ?"
              value={vtarget}
              items={target_point.map(item => {
                return {
                  label: item?.Depart + '-' + item?.Destination,
                  value: item?.id,
                };
              })}
              setOpen={setOtarget}
              setValue={setVtarget}
              setItems={setTarget}
              textStyle={{
                fontSize: 15,
                fontFamily: 'Hind-Light',
                color: '#009688ba',
              }}
              listMode="MODAL"
              style={styles.ui_splash_contain_Input_Name_place}
            />
          </View>
          <View style={styles.ui_splash_contain_globe_first_block_guichet1}>
            <Text style={styles.ui_splash_contain_config_fonts_regis1}>
              Sélectionner le type de Guichet
            </Text>
          </View>
          <View style={styles.ui_splash_contain_globe_first_block_guichet4}>
            <DropDownPicker
              open={oguichet}
              placeholder="Classique/Vip ?"
              value={vguichet}
              items={guichet}
              setOpen={setOguichet}
              setValue={setVguichet}
              setItems={setGuichet}
              textStyle={{
                fontSize: 15,
                fontFamily: 'Hind-Light',
                color: '#009688ba',
              }}
              listMode="MODAL"
              style={styles.ui_splash_contain_Input_Name_place}
            />
          </View>
          <View style={styles.ui_splash_contain_globe_first_block_guichet1}>
            <Text style={styles.ui_splash_contain_config_fonts_regis5}>
              Configurer le ticket que la caisse fournira au client lorsqu'il
              payera son billet à la caisse
            </Text>
          </View>
          <View style={styles.ui_splash_contain_globe_first_block_guichet5}>
            <FontAwesomeIcon icon={faExclamationCircle} size={10} color="red" />
            <Text style={styles.ui_splash_contain_config_fonts_regis6}>
              Ticket prédéfinie modifiable dans le menu Ticket.
            </Text>
          </View>
          <View style={styles.ui_splash_contain_globe_first_block_guichet4}>
            <DropDownPicker
              open={oticket}
              placeholder="Lequel choisir ?"
              value={vticket}
              items={config_transport.map(item => {
                return {
                  label:
                    item?.TypeTicket == 0
                      ? 'Ticket physique'
                      : item?.TypeTicket == 1
                      ? 'Code QR'
                      : 'Code QR et Ticket physique',
                  value: item?.id,
                };
              })}
              setOpen={setOticket}
              setValue={setVticket}
              setItems={setTicket}
              textStyle={{
                fontSize: 15,
                fontFamily: 'Hind-Light',
                color: '#009688ba',
              }}
              listMode="MODAL"
              style={styles.ui_splash_contain_Input_Name_place}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.ui_splash_contain_btn_add_place_target}
            onPress={() => {
              createGuichet();
              setInterfaceMaid(false);
              setVmaid(null);
              setVtarget(null);
              setVguichet(null);
              setVticket(null);
            }}>
            <Text style={styles.ui_splash_contain_text_btn_add_place_target}>
              Ajouter
            </Text>
            <FontAwesomeIcon icon={faAngleRight} size={15} color="white" />
          </TouchableOpacity>
          <Space Hwidth={100} />
        </ScrollView>
      ) : null}
      {interfaceMaid ? null : (
        <ButtonAddingItems
          titleico={faPlus}
          titlebutton="ajouter"
          borderrounds={50}
          onOpen={setInterfaceMaid}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
    width: '100%',
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
  },
  ui_splash_contain_globe_registration_maid_guichet: {
    width: '100%',
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
    position: 'absolute',
  },
  ui_splash_contain_globe_first_block_guichet1: {
    width: '100%',
    justifyContent: 'center',
  },
  ui_splash_contain_config_fonts_regis1: {
    fontFamily: 'Quicksand-VariableFont_wght',
    fontSize: 16,
    left: 10,
    color: '#000000a8',
  },
  ui_splash_contain_globe_first_block_guichet2: {
    width: '100%',
    height: 75,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ui_splash_contain_globe_first_block_guichet5: {
    width: '100%',
    height: 35,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ui_splash_contain_config_fonts_regis2: {
    fontFamily: 'Nunito-Light',
    fontSize: 16,
  },
  ui_splash_contain_Input_Name_place: {
    fontFamily: 'Nunito-Light',
    borderWidth: 0.3,
    width: '95%',
    height: 50,
    borderRadius: 4,
    borderColor: '#ffeb3b30',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#ffeb3b61',
  },
  ui_splash_closed_error_signal: {
    fontSize: 13,
    fontFamily: 'Hind-Light',
    color: '#f44336c7',
    left: 12,
  },
  ui_splash_contain_Input_Placeholder_place: {
    fontFamily: 'Nunito-Light',
    width: '95%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#0202020f',
    color: '#02020230',
  },
  ui_splash_contain_btn_closed_registration: {
    marginLeft: 7,
    marginTop: 10,
    marginBottom: 20,
  },
  ui_splash_closed_registration_icon_btn: {
    marginLeft: 10,
    fontSize: 18,
    fontFamily: 'Hind-Light',
    color: '#f44336c7',
  },
  ui_splash_contain_globe_first_block_guichet3: {
    width: '100%',
    height: 35,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  ui_splash_contain_config_fonts_regis3: {
    fontFamily: 'WorkSans-VariableFont_wght',
    fontSize: 14,
    color: '#0a0a0a8f',
    left: -25,
  },
  ui_splash_contain_config_fonts_regis4: {
    fontFamily: 'Righteous-Regular',
    fontSize: 15,
    color: 'red',
    left: -15,
  },
  ui_splash_contain_globe_first_block_guichet4: {
    width: '100%',
    height: 70,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  ui_splash_contain_btn_add_place_target: {
    width: 90,
    height: 45,
    backgroundColor: '#e73c76',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    left: 5,
    flexDirection: 'row',
  },
  ui_splash_contain_text_btn_add_place_target: {
    color: 'white',
    fontFamily: 'Hind-Light',
    fontSize: 16,
    left: -1,
    top: 0.4,
  },
  ui_splash_contain_config_fonts_regis5: {
    fontFamily: 'Hind-Light',
    fontSize: 16,
    left: 10,
    color: '#00000091',
  },
  ui_splash_contain_config_fonts_regis6: {
    fontFamily: 'Montserrat-VariableFont_wght',
    fontSize: 12,
    left: -5,
    color: '#ff5722',
  },
});

export default Caisse;
