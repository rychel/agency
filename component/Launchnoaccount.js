import React, {useState, useEffect, useRef} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    Dimensions,
    ToastAndroid,
    Animated,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Launchnoaccount = (props) => {
    /* Animation satrting page */
    const Focus = useRef(new Animated.Value(0)).current;
    const Focus2 = useRef(new Animated.Value(0)).current;
    const initialPosition = useRef(new Animated.Value(190)).current;

    useEffect(() => {
      Animated.sequence([
        Animated.timing(Focus, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true
        }),
        Animated.timing(initialPosition, {
          toValue: 130,
          duration: 100,
          useNativeDriver: true
        }),
        Animated.timing(Focus2, {
          toValue: 130,
          duration: 100,
          useNativeDriver: true
        })
      ]).start()
    }, [Focus, initialPosition, Focus2])

    const [agree, setAgree] = useState(false);
    const isChecked = () => {
        if(agree == true){

        }
        else{
            ToastAndroid.show('Etes-vous sur d\'avoir accepter notre politique', ToastAndroid.LONG);
        }
    }
    const gotoLicensecontract = () => {
        props.navigation.navigate('License Contracts');
    }

    return (
        <ImageBackground style={styles.ui_splash_global_app_contain}
            source={require('../assets/splashstart2.jpg')}>
            <Animated.View style={[{
              height: 130,
              width: 130,
              marginBottom: 70,
              borderRadius: 100,
              backgroundColor: 'white',
              alignContent: 'center',
              justifyContent: 'center',
              position: 'relative',
              alignSelf: 'center',
              transform: [{ translateY: initialPosition }] ,
              borderRadius: 100,
            }, {opacity: Focus}]}>
                <Image
                    source={require('../assets/Logo1.png')}
                    resizeMode = 'contain'
                    style={styles.ui_splash_logo_started}
                />
            </Animated.View>

            <Animated.View style={{opacity: Focus2}}>
              <View style={styles.ui_splash_started_title_welcome}>
                <Text style={ {fontSize: 15} }>Vous souhaite la bienvenue au sein de son service d'hébergement d'agence.</Text>
              </View>
            </Animated.View>

            <Animated.View style={{opacity: Focus2}}>
              <View style={styles.ui_splash_started_title_contracts}>
                  <Text style={styles.ui_splash_started_text_contracts1}>Avant de continuer, veuillez lire et accepter</Text>
                  <View style={styles.ui_splash_started_contain_text_contracts2}>
                      <Text style={styles.ui_splash_started_text_contracts2} onPress={gotoLicensecontract}>le contrat de license et politique d'utilisation</Text>
                      <CheckBox value={agree} onChange={() => setAgree(!agree)} />
                  </View>
              </View>
            </Animated.View>

            <Animated.View style={{opacity: Focus2}}>
              <View style={styles.ui_splash_started_container_button_welcome}>
                  <TouchableOpacity style={styles.ui_splash_started_button_welcome}
                      activeOpacity={0.9}
                      onPress={isChecked}>
                      <Text style={styles.ui_splash_started_button_text}>Commencer</Text>
                      <FontAwesome5 name='angle-right'
                          size={30} />
                  </TouchableOpacity>
              </View>
            </Animated.View>

            <Animated.View style={{
              opacity: Focus,
              width: '100%',
              height: 30,
              alignItems: 'center',
              justifyContent: 'flex-end',
              fontSize: 18,
              backgroundColor: '#ffac81',
              color: 'yellow',
              position: 'absolute',
              bottom: 24
            }}>
                <Text style={ { fontSize: 16 } }>acxios v 1.0 </Text>
            </Animated.View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    ui_splash_global_app_contain: {
       height: Dimensions.get('window').height,
    },
    ui_splash_logo_started: {
        alignSelf: 'center',
        width: 105,
        margin: 330,
        height: 130,
    },
    ui_splash_started_title_welcome: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '85%',
        alignSelf: 'center',
        height: 50,
        backgroundColor: '#8ab4f8',
        marginTop: 100,
        position: 'relative',
        fontFamily: 'cursive',
        fontSize: 20,
        borderRadius: 5,
    },
    ui_splash_started_title_contracts: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '85%',
        alignSelf: 'center',
        height: 50,
        marginTop: 10,
        position: 'relative',
        fontFamily: 'cursive',
        fontSize: 20,
        borderRadius: 5,
    },
    ui_splash_started_text_contracts1:{
        color: 'white',
        fontSize: 17,
        fontFamily: 'Fontisto',
    },
    ui_splash_started_contain_text_contracts2:{
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 5,
    },
    ui_splash_started_text_contracts2:{
        color: 'rgba(245, 246, 252, 0.52)',
        textDecorationLine: 'underline',
        fontSize: 18,
        fontFamily: 'Fontisto',
        marginTop: 5,
        textDecorationColor: 'rgba(245, 246, 252, 0.52)',
    },
    ui_splash_started_container_button_welcome: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        marginTop: 50,
        position: 'relative',
        left: 10,
        fontFamily: 'cursive',
        fontSize: 20,
        borderRadius: 5,
    },
    ui_splash_started_button_welcome: {
        width: 200,
        height: 60,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#ffac81',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    ui_splash_started_button_text:{
        fontSize: 23,
        marginRight: 5,
        fontFamily: 'Foundation',
        fontWeight: 'bold',
        position: 'relative',
        top: -1,
    },
});

export default Launchnoaccount;
