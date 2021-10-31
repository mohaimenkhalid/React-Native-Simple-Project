import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native';
import AppButton from '../componets/Button';

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground 
            source={require('../assets/welcome.jpg')}
            style={styles.background}
            blurRadius={8}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/dis.png')} />
                <Text style={styles.tagline}>Welcome to World</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="login" onPress={() => navigation.navigate("Login")} />
                <AppButton title="Register" color="secoundary" onPress={() => console.log("Register")} />
            </View>
        </ImageBackground>
    )}

    const styles = StyleSheet.create({
        background: {
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center"
        },

        buttonContainer: {
            width: "100%",
            padding: 20
        },

        loginButton: {
            width: "100%",
            height: 70,
            backgroundColor: "#fff"
        },
        registerButton: {
            width: "100%",
            height: 70,
            backgroundColor: "purple"
        },
        logo: {
            width: 100,
            height: 100,
        },
        logoContainer: {
            position: "absolute",
            top: 70,
            alignItems: "center"
        },
    
        tagline: {
            color: "#fff",
            fontSize: 25,
            fontWeight: "900"
        }
    })

export default WelcomeScreen;