import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Animated,
} from 'react-native';

const LoaderAllScreen = (props) => {
  
  const [touchPalsGrant, setTouchPalsGrant] = useState(74);
  const [initPals, setInitPals] = useState(60);

  useEffect(() => {
    setTimeout(() => {
      setTouchPalsGrant(90);
      setInitPals(0);
    }, 2000);  
  });

  return (
    <View style={styles.ui_splash_global_display_screen}>
      <View style={[{height: touchPalsGrant}, styles.ui_splash_global_display_activity_contain]}>
        <View style={[{height: initPals}, styles.ui_splash_global_display_activity_items]}>
          <ActivityIndicator size = 'large' color='green' style = {{ position : 'relative', left: -40}} />
          <View>
            <Text style={styles.ui_splash_global_display_unhandled_text1}>chargement</Text>
          </View>
        </View>
        <View style={styles.ui_splash_global_display_activity_items2}>
          <View>
            <Text style={styles.ui_splash_global_display_unhandled_text2}>Votre agence a été crée avec succès vous serez redirigez dans votre espace administration dans quelques secondes. </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ui_splash_global_display_screen: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 5,
    justifyContent: 'center',
    alignContent: 'center',
  },
  ui_splash_global_display_activity_contain: {
    width: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center',
    borderColor: 'red',
    overflow: 'hidden',
  },
  ui_splash_global_display_activity_items: {
    width: '46%',
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
    overflow: 'hidden',
    borderColor: 'rgba(0,0,1,0.5)',
  },
  ui_splash_global_display_activity_items2: {
    width: 'auto',
    height: 60,
    backgroundColor: '#59c35e',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
    padding: 10,
    marginBottom: 20,
  },
  ui_splash_global_display_unhandled_text1: {
    position: 'relative',
  },
  ui_splash_global_display_unhandled_text2: {
    position: 'relative',
    color: 'white',
  },

});

export default LoaderAllScreen;
