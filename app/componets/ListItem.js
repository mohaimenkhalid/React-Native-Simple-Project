import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppText from './AppText';

function ListItem({title, image, subTitle}) {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={styles.detsils}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 15
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 50
    },
    detsils: {
        marginLeft: 10
    },
    title: {
        fontWeight: "700"
    }
})

export default ListItem;