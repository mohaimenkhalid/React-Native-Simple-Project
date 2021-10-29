import React, { useState } from 'react';
import {Image, StyleSheet} from "react-native"
import AppText from '../componets/AppText';
import AppTextInput from '../componets/AppTextInput';
import AppButton from '../componets/Button';
import Screen from '../componets/Screen';
import { Formik } from 'formik'
import * as Yap from 'yup';
import ErrorMessage from '../componets/ErrorMessage';
import AppFormField from '../componets/AppFormField';



let validationSchema = Yap.object().shape({
    email: Yap.string().required().email().label("Email"),
    password: Yap.string().required().min(4).label("Password")
  });



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
                validationSchema={validationSchema}
            >
                { ({ handleSubmit }) => (
                    <>
                        <AppFormField 
                            name='email'
                            icon='email'
                            placeholder="Email"
                            autoCapitalize="none"
                            autoCorrection={false}
                            keyboardType="email-address"
                            textContentType="emailAddress"
                        />

                        <AppFormField 
                            name='password'
                            icon='lock'
                            placeholder="Password"
                            autoCapitalize="none"
                            autoCorrection={false}
                            keyboardType="email-address"
                            textContentType="password"
                            secureTextEntry
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