import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import color from '../config/color';
import AppText from './AppText';

function ListItem({title, subTitle, image, ImageComponent, onPress, renderRightActions}) {
    return (
        <TouchableHighlight
            underlayColor={color.light}
            onPress={onPress}
        >
            <View style={styles.container}>
                {ImageComponent}
                {image && <Image source={image} style={styles.image} />}
                <View style={styles.detsils}>
                    <AppText style={styles.title}>{title}</AppText>
                    { subTitle && <AppText>{subTitle}</AppText> }
                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: color.white
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 50
    },
    detsils: {
        marginLeft: 10,
        justifyContent: "center",
    },
    title: {
        fontWeight: "700",
        fontSize: 18
    }
})

export default ListItem;