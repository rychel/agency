import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TitleInputGs = props => {
  const {Title, Subtitle} = props;

  return (
    <View style={styles.ui_splash_global_control}>
      <Text style={styles.ui_splash_text_font_config1}>{Title}</Text>
      <Text style={styles.ui_splash_text_font_config2}>{Subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_global_control: {
    width: '98%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ui_splash_text_font_config1: {
    fontSize: 18,
    color: '#00000094',
    fontFamily: 'WorkSans-VariableFont_wght',
  },
  ui_splash_text_font_config2: {
    fontSize: 15,
    color: '#f3b457',
    fontFamily: 'Roboto-Regular',
  },
});

export default TitleInputGs;
