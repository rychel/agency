import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faSearch} from '@fortawesome/free-solid-svg-icons';

const HeaderUser = props => {
  const {Agence, Site, Quartier, onPress, Netstatus, onLoad} = props;

  return (
    <View style={styles.ui_splash_contain_header_globe}>
      <View style={styles.ui_splash_contain_destination_items_globe_text2}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onPress}
          style={styles.ui_splash_contain_globe_cadre_tags}>
          <FontAwesomeIcon icon={faBars} size={27} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.ui_splash_contain_destination_items_contains_globe2}>
        {Netstatus == false ? (
          <View style={styles.ui_splash_contain_destination_globe}>
            <Text style={styles.ui_splash_contain_destination_items_text4}>
              Hell'o Travel
            </Text>
          </View>
        ) : (
          <View style={styles.ui_splash_contain_destination_globe}>
            {onLoad ? (
              <Text style={styles.ui_splash_contain_destination_items_text1}>
                Mise à jour...
              </Text>
            ) : (
              <>
                <Text style={styles.ui_splash_contain_destination_items_text1}>
                  {Agence}
                </Text>
                {Site === null ? null : (
                  <View>
                    <Text
                      style={styles.ui_splash_contain_destination_items_text2}
                      numberOfLines={1}>
                      agence de {Site} {Quartier}
                    </Text>
                  </View>
                )}
              </>
            )}
          </View>
        )}
      </View>
      <View style={styles.ui_splash_contain_destination_items_globe_text2}>
        <Text style={styles.ui_splash_contain_destination_items_text3}>
          <FontAwesomeIcon icon={faSearch} size={20} color="white" />
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
    backgroundColor: '#00bcd4',
    flexDirection: 'row',
    height: 55,
    justifyContent: 'center',
  },
  ui_splash_contain_destination_globe: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  ui_splash_contain_globe_cadre_tags: {
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ui_splash_contain_destination_items_contains_globe2: {
    width: '70%',
    justifyContent: 'center',
    marginLeft: 5,
  },
  ui_splash_contain_destination_items_text1: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'PontanoSans-Regular',
    padding: 2,
  },
  ui_splash_contain_destination_items_globe_text2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ui_splash_contain_destination_items_text2: {
    color: 'white',
    paddingLeft: 5,
    fontFamily: 'PingFang SC Regular',
    textShadowColor: '#ffeb3b8f',
    textShadowRadius: 10,
    elevation: 0.1,
  },
  ui_splash_contain_destination_items_text3: {
    marginLeft: 1,
    marginRight: 10,
  },
  ui_splash_contain_destination_items_text4: {
    color: 'white',
    fontSize: 23,
    fontFamily: 'PingFang SC Regular',
    padding: 2,
    textShadowColor: '#a9a5a3',
    textShadowRadius: 10,
    elevation: 1,
  },
});

export default HeaderUser;
