import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const ButtonAddingItems = props => {
  const {titleico, titlebutton, borderrounds, onOpen} = props;

  const [initTitle, setInitTitle] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setInitTitle(titlebutton);
    }, 1000);
  });

  return (
    <View style={styles.ui_splash_contain_header_globe}>
      <TouchableOpacity activeOpacity={0.8} onPress={onOpen}>
        <View
          style={[
            {borderRadius: borderrounds},
            styles.ui_splash_contain_poly_button_globe,
          ]}>
          <FontAwesomeIcon icon={titleico} color="white" size={16} />
          <Text style={styles.ui_splash_contain_text_button_globe}>
            {initTitle}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_contain_header_globe: {
    position: 'absolute',
    bottom: 120,
    right: 10,
  },
  ui_splash_contain_poly_button_globe: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196f3',
    flexDirection: 'row',
    padding: 17,
    width: 70,
    height: 70,
  },
  ui_splash_contain_text_button_globe: {
    fontFamily: 'Nunito-Regular',
    fontSize: 11.3,
    left: 5,
    color: 'white',
  },
});

export default ButtonAddingItems;
