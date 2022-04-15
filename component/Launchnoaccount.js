import React, {useState} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Button,
    ImageBackground,
    Dimensions,
    ToastAndroid
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Launchnoaccount = () => {
    const [agree, setAgree] = useState(false);
    const isChecked = () => {
        if(agree == true){

        }
        else{
            ToastAndroid.show('Etes-vous sur d\'avoir accepter notre politique', ToastAndroid.LONG);
        }
    }

    return (
        <ImageBackground style={styles.ui_splash_global_app_contain}
            source={require('../assets/splashstart2.jpg')}>
            <View style={styles.ui_splash_contain_receive_logo}>
                <Image 
                    source={require('../assets/Logo1.png')}
                    resizeMode = 'contain'
                    style={styles.ui_splash_logo_started}
                />
            </View>

            <View style={styles.ui_splash_started_title_welcome}>
                <Text style={ {fontSize: 15} }>Vous souhaite la bienvenue au sein de son service d'hébergement d'agence.</Text>
            </View>

            <View style={styles.ui_splash_started_title_contracts}>
                <Text style={styles.ui_splash_started_text_contracts1}>Avant de continuer, veuillez lire et accepter</Text>
                <View style={styles.ui_splash_started_contain_text_contracts2}>
                    <Text style={styles.ui_splash_started_text_contracts2}>le contrat de license et politique d'utilisation</Text>
                    <CheckBox value={agree} onChange={() => setAgree(!agree)} />
                </View> 
            </View>
            
            <View style={styles.ui_splash_started_container_button_welcome}>
                <TouchableOpacity style={styles.ui_splash_started_button_welcome}
                    activeOpacity={0.9}
                    onPress={isChecked}>
                    <Text style={styles.ui_splash_started_button_text}>Commencer</Text>
                    <FontAwesome5 name='angle-right'
                        size={30} /> 
                </TouchableOpacity>
            </View>
        
            <View style={styles.ui_splash_started_title_version}>
                <Text style={ { fontSize: 16 } }>acxios v 1.0 </Text>
            </View>
        </ImageBackground>  
    )
}

const styles = StyleSheet.create({
    ui_splash_global_app_contain: {
       height: Dimensions.get('window').height,
    },
    ui_splash_contain_receive_logo: {
        height: 130,
        width: 130,
        borderRadius: 100,
        backgroundColor: 'white',
        alignContent: 'center',
        justifyContent: 'center',
        position: 'relative',
        alignSelf: 'center',
        marginTop: 130,
        borderRadius: 100,
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
        fontFamily: 'Foundation',
        marginTop: 5,
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
    ui_splash_started_title_version: {
        width: '100%',
        height: 30,
        alignItems: 'center',
        justifyContent: 'flex-end',
        fontSize: 18,
        backgroundColor: '#ffac81',
        color: 'yellow',
        position: 'absolute',
        bottom: 24,
    },
});

export default Launchnoaccount;