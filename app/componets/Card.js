import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../config/color';
import AppText from './AppText';

function Card({title, subTitle, image}) {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: 200,
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        marginBottom: 7,
        fontWeight: "bold"
    },
    subTitle: {
        color: colors.secoundary,
    }
})

export default Card;