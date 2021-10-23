import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeBtn}>
                <Icon
                    name="close"
                    color= "#fff"
                    size={30}
                />
            </View>
            <View style={styles.deleteBtn}>
                <Icon
                    name="trash-can-outline"
                    color= "#fff"
                    size={30}
                />
            </View>
            <Image 
                resizeMode="contain" 
                style={styles.image} 
                source={require("../assets/chair.jpg")} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1
    },
    image: {
        width: "100%",
        height: "100%"
    },
    closeBtn: {
        position: "absolute",
        top: 20,
        left: 30
    },
    deleteBtn: {
        position: "absolute",
        top: 20,
        right: 30
    }
})

export default ViewImageScreen;