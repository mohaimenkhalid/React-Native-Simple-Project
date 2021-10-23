import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import colors from '../config/color';
import AppText from '../componets/AppText';
import ListItem from '../componets/ListItem';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../../app/assets/apple-watch.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Apple Watch Series 6</AppText>
                <AppText style={styles.subTitle}>$500</AppText>
                <ListItem 
                    image={require("../../app/assets/apple-watch.jpg")}
                    title="mohaimen khalid"
                    subTitle="5 Listings"
                    style={styles.listItem}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        marginBottom: 7,
        fontWeight: "bold"
    },
    subTitle: {
        color: colors.secoundary,
    },
})

export default ListingDetailsScreen;