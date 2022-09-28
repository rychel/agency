import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';
import {get_config_transport} from '../../store/Log/Dir/DirActions';
import ButtonAddingItems from '../../components/ButtonAddingItems';
import NotificationExplain from '../../components/NotificationExplain';
import NoItemStatus from '../../components/NoItemStatus';
import HeaderConfig from '../../components/HeaderConfig';
import Space from '../../components/Space';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faEyeDropperEmpty,
  faPlus,
  faUserSlash,
} from '@fortawesome/free-solid-svg-icons';

const Caisse = props => {
  const [omaid, setOmaid] = useState(false);
  const [vmaid, setVmaid] = useState(null);
  const [maid, setMaid] = useState([
    {label: 'Ngo mang', value: 'Ngo mang'},
    {label: 'Ngo tibang', value: 'Ngo tibang'},
  ]);
  const [otarget, setOtarget] = useState(false);
  const [vtarget, setVtarget] = useState(null);
  const [target, setTarget] = useState([
    {label: 'Kribi-Douala', value: 'Kribi-Douala'},
    {label: 'Kribi-Campo', value: 'Kribi-Campo'},
  ]);
  const [otypebus, setOtypeBus] = useState(false);
  const [vtypebus, setVtypebus] = useState(null);
  const [typeBus, setTypeBus] = useState([
    {label: 'vip', value: 'vip'},
    {label: 'classique', value: 'classique'},
  ]);
  const [oticket, setOticket] = useState(false);
  const [vticket, setVticket] = useState(null);
  const [ticket, setTicket] = useState([
    {label: 'Code QR', value: 'Code QR'},
    {label: 'Ticket', value: 'Ticket'},
  ]);

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
  const config_transport = useSelector(
    state => state.DirReducers.config_transport,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    getConfig_transport();
    console.log(config_transport);
  }, []);

  const addMaid = () => {};

  return (
    <View style={styles.ui_splash_contain_header_globe}>
      <NotificationExplain Titlemessage="Créer les guichets de l'agence et mettre les personnes de la caisse." />
      <NoItemStatus
        Titleico={faUserSlash}
        Titlestatus="aucun(e) caissi(er)(ère) enregistré(e)"
      />
      {interfaceMaid ? (
        <ScrollView
          style={styles.ui_splash_contain_globe_registration_maid_guichet}>
          <Space Hwidth={15} />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setInterfaceMaid(false);
              setVmaid(null);
              setVtarget(null);
              setVtypebus(null);
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
              placeholder="Assigner une personne"
              value={vmaid}
              items={maid}
              setOpen={setOmaid}
              setValue={setVmaid}
              setItems={setMaid}
              textStyle={{
                fontSize: 15,
                fontFamily: 'Hind-Light',
                color: '#03a9f4d6',
              }}
              listMode="SCROLLVIEW"
              style={styles.ui_splash_contain_Input_Name_place}
            />
          </View>
          <View style={styles.ui_splash_contain_globe_first_block_guichet3}>
            <Text style={styles.ui_splash_contain_config_fonts_regis3}>
              ID personnel:
            </Text>
            <Text style={styles.ui_splash_contain_config_fonts_regis4}>
              00001
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
              placeholder="Pour quelle destination ?"
              value={vtarget}
              items={target}
              setOpen={setOtarget}
              setValue={setVtarget}
              setItems={setTarget}
              textStyle={{
                fontSize: 15,
                fontFamily: 'Hind-Light',
                color: '#009688b3',
              }}
              listMode="SCROLLVIEW"
              style={styles.ui_splash_contain_dropDown_Choose_Target}
            />
          </View>
          <View style={styles.ui_splash_contain_globe_first_block_guichet1}>
            <Text style={styles.ui_splash_contain_config_fonts_regis1}>
              Sélectionner le type de Guichet
            </Text>
          </View>
          <View style={styles.ui_splash_contain_globe_first_block_guichet4}>
            <DropDownPicker
              open={otypebus}
              placeholder="Classique / Vip ?"
              value={vtypebus}
              items={typeBus}
              setOpen={setOtypeBus}
              setValue={setVtypebus}
              setItems={setTypeBus}
              textStyle={{
                fontSize: 15,
                fontFamily: 'Hind-Light',
                color: '#009688b3',
              }}
              listMode="SCROLLVIEW"
              style={styles.ui_splash_contain_dropDown_Choose_Target}
            />
          </View>
          <View style={styles.ui_splash_contain_globe_first_block_guichet1}>
            <Text style={styles.ui_splash_contain_config_fonts_regis5}>
              Quel est le type de ticket dont disposera le client lorsqu'il
              payera à la caisse
            </Text>
          </View>
          <View style={styles.ui_splash_contain_globe_first_block_guichet4}>
            <DropDownPicker
              open={oticket}
              placeholder="Lequel choisir ?"
              value={vticket}
              items={ticket}
              setOpen={setOticket}
              setValue={setVticket}
              setItems={setTicket}
              textStyle={{
                fontSize: 15,
                fontFamily: 'Hind-Light',
                color: '#009688b3',
              }}
              listMode="SCROLLVIEW"
              style={styles.ui_splash_contain_dropDown_Choose_Target}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.ui_splash_contain_btn_add_place_target}
            onPress={() => {}}>
            <FontAwesomeIcon icon={faEyeDropperEmpty} size={15} color="white" />
            <Text style={styles.ui_splash_contain_text_btn_add_place_target}>
              Ajouter
            </Text>
          </TouchableOpacity>
          <Space Hwidth={125} />
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
  ui_splash_contain_config_fonts_regis2: {
    fontFamily: 'Nunito-Light',
    fontSize: 16,
  },
  ui_splash_contain_Input_Name_place: {
    fontFamily: 'Nunito-Light',
    borderWidth: 1,
    width: '95%',
    height: 50,
    borderRadius: 4,
    borderColor: '#03a9f4d6',
    alignItems: 'center',
    alignSelf: 'center',
  },
  ui_splash_contain_btn_closed_registration: {
    marginLeft: 7,
    marginTop: 10,
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
    color: '#673ab7',
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
  },
  ui_splash_contain_dropDown_Choose_Target: {
    borderWidth: 1,
    width: '95%',
    height: 50,
    borderRadius: 4,
    borderColor: '#ffeb3b8a',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#ffeb3b21',
  },
  ui_splash_contain_btn_add_place_target: {
    width: 100,
    height: 45,
    backgroundColor: '#e73c76',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    left: 5,
    flexDirection: 'row',
  },
  ui_splash_contain_text_btn_add_place_target: {
    color: 'white',
    fontFamily: 'Hind-Light',
    fontSize: 16,
    left: 5,
    top: 1,
  },
  ui_splash_contain_config_fonts_regis5: {
    fontFamily: 'SairaCondensed-Thin',
    fontSize: 17,
    left: 10,
    color: '#000000a8',
  },
});

export default Caisse;
