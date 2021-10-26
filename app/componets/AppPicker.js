import { placeholder } from '@babel/types';
import React from 'react';
import { View, StyleSheet, TextInput, Platform } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../config/color';
import defaultStyles from '../config/styles';
import AppText from './AppText';

function AppPicker({icon, placeholder, otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} color={color.medium} size={25} />}
            <AppText style={styles.text}>{placeholder}</AppText>
            <MaterialCommunityIcons style={styles.icon} name="chevron-down" color={defaultStyles.color.medium} size={25} />
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
        flex: 1
    },
    icon: {
        marginRight: 10
    }
})

export default AppPicker;