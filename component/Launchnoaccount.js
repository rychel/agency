import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Button,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Launchnoaccount = () => {
    return (
        <View style={{flex: 1}}>
            <View style={styles.ui_splash_contain_receive_logo}>
                <Image 
                    style={styles.ui_splash_logo_started} 
                    source={require('../assets/Logo1.png')}
                    resizeMode = 'contain'
                />
            </View>

            <View style={styles.ui_splash_started_title_welcome}>
                <Text>Vous souhaite la bienvenue au sein de son service d'hébergement d'agence</Text>
            </View>

            <View style={styles.ui_splash_started_container_button_welcome}>
                <TouchableOpacity style={styles.ui_splash_started_button_welcome}>
                    <Text>Commencer</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.ui_splash_started_title_version}>
                <Text>acxios v 1.0 </Text>
            </View>
        </View>  
    )
}

const styles = StyleSheet.create({
    ui_splash_contain_receive_logo: {
        height: 400,
        backgroundColor: '#e7723b',
        alignContent: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    ui_splash_logo_started: {
        width: window.width,
        height: 200,
    },
    ui_splash_started_title_welcome: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 520,
        height: 50,
        backgroundColor: '#8ab4f8',
        marginTop: 10,
        position: 'relative',
        left: 10,
        fontFamily: 'cursive',
        fontSize: 20,
        borderRadius: 5,
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
        justifyContent: 'center',
        backgroundColor: 'red',
        fontSize: 20,
        borderRadius: 5,
    },
    ui_splash_started_title_version: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        fontSize: 16,
        backgroundColor: 'red',
        borderRadius: 5,
    }
});

export default Launchnoaccount;