import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import listingApi from '../api/listing';
import Card from '../componets/Card';

import Screen from '../componets/Screen'
import color from '../config/color';

const listings = [
    {
        id: 1,
        title: "Apple watch series 6",
        price: "$100",
        image: require("../assets/apple-watch.jpg")
    },
    {
        id: 2,
        title: "Apple watch series 5",
        price: "$500",
        image: require("../assets/apple-watch.jpg")
    },
    {
        id: 3,
        title: "Apple watch series 7",
        price: "$5500",
        image: require("../assets/apple-watch.jpg")
    }
];

function ListingScreen({ navigation }) {
    const [data, setData] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadListings();
    }, [])

    const loadListings = () => {
        const resp = listingApi.getListings();
        console.log(resp)
        setLoading(false)
    }

    return (
        <Screen style={styles.screen}>
            <ActivityIndicator size="large" color="tomato" animating={loading} />
            <FlatList 
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({item}) =>
                    <Card
                        title={item.title}
                        subTitle={item.price}
                        image={item.image}
                        onPress={() => navigation.navigate("ListingDetails")}
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: color.light
    }
})

export default ListingScreen;