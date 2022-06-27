import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ButtonAddingItems = props => {
  const {titleico, titlebutton, borderrounds} = props;

  const [initTitle, setInitTitle] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setInitTitle(titlebutton);
    }, 1000);
  });

  return (
    <View style={styles.ui_splash_contain_header_globe}>
      <TouchableOpacity activeOpacity={0.8}>
        <View
          style={[
            {borderRadius: borderrounds},
            styles.ui_splash_contain_poly_button_globe,
          ]}>
          <FontAwesome5 name={titleico} color="white" size={20} />
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
    width: 80,
    height: 80,
  },
  ui_splash_contain_text_button_globe: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    left: 5,
    color: 'white',
  },
});

export default ButtonAddingItems;
