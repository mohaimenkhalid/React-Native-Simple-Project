import React from 'react';
import { View, StyleSheet, TextInput, Platform } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../config/color';
import defaultStyles from '../config/styles';

function AppTextInput({icon, placeholder, ...others}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} color={color.medium} size={25} />}
            <TextInput placeholder={placeholder} {...others} style={[defaultStyles.text, styles.text]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.light,
        borderRadius: 15,
        flexDirection: "row",
        width: "100%",
        padding: 10,
        marginVertical: 10,
        alignItems: "center"
    },
    text: {
        marginLeft: 10,
    }
})

export default AppTextInput;