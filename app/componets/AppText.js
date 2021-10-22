import React from 'react';
import { Platform, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function AppText({ children, style }) {
    return (
        <Text style={[styles.text, style]}>
            {children}    
        </Text>
    );
}


const styles = StyleSheet.create({
    text: {
        ...Platform.select({
            ios: {
                fontFamily: "Avenir"
            },
            android: {
                fontFamily: "Roboto"
            }
        }),
        fontSize: 20,
        color: Colors.black
    }
})
export default AppText;