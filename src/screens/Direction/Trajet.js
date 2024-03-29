import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
  Modal,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  get_agency_direction,
  update_site_localisation,
  add_target_point,
  get_target_point,
  update_self_target,
  delete_self_target,
} from '../../store/Log/Dir/DirActions';
import NotificationExplain from '../../components/NotificationExplain';
import ValidateItemStatus from '../../components/ValidateItemStatus';
import ItemTrajetSaved from '../../components/ItemTrajetSaved';
import ButtonAddingItems from '../../components/ButtonAddingItems';
import LoadingItemsConfig from '../../components/LoadingItemsConfig';
import HeaderConfig from '../../components/HeaderConfig';
import ActionOnTips from '../../components/ActionOnTips';
import Space from '../../components/Space';
import {faCheck, faPlus, faRoute} from '@fortawesome/free-solid-svg-icons';

const Trajet = props => {
  const [site, setSite] = useState('');
  const [target, setTarget] = useState('');
  const [interfaceTarget, setInterfaceTarget] = useState(false);
  const [updateTarget, setUpdateTarget] = useState(false);
  const [oldTarget, setOldTarget] = useState('');
  const [isFetch, setIsFetch] = useState(false);
  const [inAction, setInAction] = useState(false);
  const [actionTarget, setActionTarget] = useState({
    id: '',
    Destination: '',
  });
  const bottomTarget = useRef();

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
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  const addTarget_point = () => {
    try {
      AsyncStorage.getItem('token').then(async id => {
        const point = await {
          depart: info_agency[0]?.Site,
          destination: target,
        };
        if (target != '') {
          await dispatch(add_target_point(id, point));
          setTarget('');
          setInterfaceTarget(false);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  const getTarget_point = () => {
    try {
      AsyncStorage.getItem('token').then(async value => {
        setIsFetch(true);
        await dispatch(get_target_point(value));
        setIsFetch(false);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const updateSelf_target = () => {
    try {
      AsyncStorage.getItem('token').then(async id => {
        if (target != '') {
          setIsFetch(true);
          await dispatch(update_self_target(id, actionTarget.id, target));
          setInterfaceTarget(false);
          setUpdateTarget(false);
          setTarget('');
          setIsFetch(false);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  const deleteSelf_target = () => {
    try {
      AsyncStorage.getItem('token').then(async id => {
        setIsFetch(true);
        await dispatch(delete_self_target(id, actionTarget.id));
        setInAction(false);
        setIsFetch(false);
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getInfo_agency();
    getTarget_point();
  }, []);

  const {info_agency, target_point} = useSelector(state => state.DirReducers);
  const dispatch = useDispatch();

  return (
    <View style={styles.ui_splash_contain_header_globe}>
      {interfaceTarget === false ? (
        <View style={styles.ui_splash_contain_header_maid_interface}>
          {target_point === [] ? (
            <NotificationExplain Titlemessage="Définir les trajets qui seront utilisés par votre agence." />
          ) : (
            <ScrollView
              style={styles.ui_splash_contain_sub_tips_already_registered}>
              <ValidateItemStatus
                Titleico={faCheck}
                Titlestatus="Trajets enregistrés"
              />
              <ScrollView
                style={styles.ui_splash_contain_header_already_registered}
                ref={bottomTarget}
                onContentSizeChange={() => {
                  bottomTarget.current.scrollToEnd({animated: true});
                }}>
                {isFetch == true ? <LoadingItemsConfig /> : null}
                {target_point.map(item => {
                  return (
                    <ItemTrajetSaved
                      key={item.id}
                      Titleico={faRoute}
                      Depart={item?.Depart}
                      Destination={item?.Destination}
                      onAction={() => {
                        setActionTarget({
                          id: item.id,
                          Destination: item?.Destination,
                        });
                        setInAction(true);
                      }}
                    />
                  );
                })}
                <Space Hwidth={150} />
                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={inAction}
                  presentationStyle="overFullScreen"
                  statusBarTranslucent={true}
                  onRequestClose={() => {
                    setInAction(false);
                  }}>
                  <ActionOnTips
                    onUpdate={() => {
                      setInterfaceTarget(true);
                      setUpdateTarget(true);
                      setOldTarget(actionTarget.Destination);
                    }}
                    onClose={() => {
                      setInAction(false);
                    }}
                    onDelete={() => {
                      deleteSelf_target();
                      getTarget_point();
                      setInAction(false);
                    }}
                  />
                </Modal>
              </ScrollView>
            </ScrollView>
          )}
        </View>
      ) : (
        <ScrollView style={styles.ui_splash_contain_registration_maid_globe}>
          <ScrollView
            style={
              info_agency[0]?.Site === null
                ? styles.ui_splash_contain_registration_maid_globe_shadow
                : styles.ui_splash_contain_registration_un_maid_globe_shadow
            }>
            <View style={styles.ui_splash_contain_first_item_white_globe}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  setInterfaceTarget(false);
                  setTarget('');
                  setSite('');
                  setUpdateTarget(false);
                  setInAction(false);
                }}
                style={styles.ui_splash_contain_btn_closed_registration}>
                <Text style={styles.ui_splash_closed_registration_icon_btn}>
                  annuler.
                </Text>
              </TouchableOpacity>
              {info_agency[0]?.Site === null ? (
                <View
                  style={styles.ui_splash_contain_update_place_agency_globe}>
                  <HeaderConfig Head="Localisation" />
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
                    onPress={() => {
                      updateSite_localisation();
                    }}>
                    <Text
                      style={
                        styles.ui_splash_contain_text_btn_upd_localisation
                      }>
                      Enregistrer
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
            <View style={styles.ui_splash_contain_second_item_white_globe}>
              <View style={styles.ui_splash_contain_update_add_agency_globe}>
                <HeaderConfig Head="Trajet" />
                <View style={styles.ui_splash_contain_subupdate_add_agency}>
                  <Text
                    style={
                      styles.ui_splash_contain_sublabel_add_configuration_name
                    }>
                    Localisation prédéfinie comme Départ.
                  </Text>
                  <View
                    style={
                      styles.ui_splash_contain_subupdate_add_phantom_agency
                    }>
                    <TextInput
                      style={styles.ui_splash_contain_input_add_target}
                      value={
                        info_agency[0]?.Site === null
                          ? null
                          : info_agency[0]?.Site
                      }
                      editable={false}
                    />
                    {updateTarget ? (
                      <Text
                        style={
                          styles.ui_splash_contain_subupdate_add_configuration_name
                        }>
                        Ancienne destination : {oldTarget}
                      </Text>
                    ) : null}
                    <TextInput
                      style={styles.ui_splash_contain_dropdown_town_place}
                      placeholder="Destination"
                      onChangeText={value => {
                        setTarget(value);
                      }}
                      editable={info_agency[0]?.Site === null ? false : true}
                    />
                  </View>
                  {updateTarget ? (
                    <>
                      <Text
                        style={
                          styles.ui_splash_contain_subupdate_add_configuration_name
                        }>
                        Nouvelle destination : {target == '' ? '?' : target}
                      </Text>
                      <TouchableOpacity
                        activeOpacity={0.7}
                        style={
                          target === ''
                            ? styles.ui_splash_contain_btn_disabled_target
                            : styles.ui_splash_contain_btn_add_place_target
                        }
                        onPress={() => {
                          updateSelf_target();
                          getTarget_point();
                          setInAction(false);
                        }}>
                        <Text
                          style={
                            styles.ui_splash_contain_text_btn_add_place_target
                          }>
                          Modifier
                        </Text>
                      </TouchableOpacity>
                    </>
                  ) : (
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={
                        target === ''
                          ? styles.ui_splash_contain_btn_disabled_target
                          : styles.ui_splash_contain_btn_add_place_target
                      }
                      onPress={() => {
                        addTarget_point(), getTarget_point();
                      }}>
                      <Text
                        style={
                          styles.ui_splash_contain_text_btn_add_place_target
                        }>
                        Ajouter
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          </ScrollView>
        </ScrollView>
      )}
      {interfaceTarget ? null : (
        <ButtonAddingItems
          titleico={faPlus}
          titlebutton="ajouter"
          onOpen={() => {
            setInterfaceTarget(true);
          }}
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
  ui_splash_contain_header_maid_interface: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  ui_splash_contain_sub_tips_already_registered: {
    width: '100%',
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
  },
  ui_splash_contain_header_already_registered: {
    width: '100%',
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
    top: 58,
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
  ui_splash_contain_btn_closed_registration: {
    marginTop: 55,
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
    height: Dimensions.get('window').height,
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
  ui_splash_contain_subupdate_add_configuration_name: {
    color: '#938f8f',
    fontFamily: 'Nunito-Light',
    margin: 5,
    fontSize: 13,
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
    height: Dimensions.get('window').height,
  },
  ui_splash_contain_dropdown_town_place: {
    borderWidth: 1,
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
