import React, { useState } from 'react';
import {Image, StyleSheet} from "react-native"
import AppText from '../componets/AppText';
import AppTextInput from '../componets/AppTextInput';
import AppButton from '../componets/Button';
import Screen from '../componets/Screen';
import { Formik } from 'formik'

function LoginScreen(props) {
    return (
        <Screen style={styles.container}>
            <Image
                source={require('../assets/dis.png')}
                style={styles.logo}
            />

            <Formik 
                initialValues={{email: '', password: ''}}
                onSubmit={values => console.log(values)}
            >
                { ({ handleChange, handleSubmit }) => (
                    <>
                        <AppTextInput 
                            icon='email'
                            placeholder="Email"
                            autoCapitalize="none"
                            autoCorrection={false}
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            onChangeText={handleChange("email")}
                        />

                        <AppTextInput 
                            icon='lock'
                            placeholder="Password"
                            autoCapitalize="none"
                            autoCorrection={false}
                            keyboardType="email-address"
                            textContentType="password"
                            secureTextEntry
                            onChangeText={handleChange("password")}
                        />

                        <AppButton title="Login" 
                            onPress={handleSubmit} 
                        />
                    </>
                )}
            </Formik>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: 20
    }
})

export default LoginScreen;