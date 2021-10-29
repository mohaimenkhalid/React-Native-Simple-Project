import React from 'react';
import {Image, StyleSheet} from "react-native"
import Screen from '../componets/Screen';
import * as Yap from 'yup';
import { AppForm, AppFormField, FormSubmitButton } from '../componets/forms'

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

            <AppForm 
                initialValues={{email: '', password: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
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

                <FormSubmitButton title="Login" />
            </AppForm>
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