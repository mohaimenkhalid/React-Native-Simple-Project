import React from 'react';
import Screen from '../componets/Screen';
import Icon from '../componets/Icon';
import ListItem from '../componets/ListItem';
import { FlatList, StyleSheet, View } from 'react-native';
import color from '../config/color';
import ListItemSeparatorComponent from '../componets/ListItemSeparator';

const menuItems = [
    {
        title: "My Listingts",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: color.primary
        },
        targetScreen: "Listings"
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: color.secoundary
        }
    }
];

function AccountScreen({ navigation }) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Mohaimen Khalid"
                    subTitle="mohaimen707@gmail.com"
                    image={require('../assets/me.jpg')}
                
                />
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    renderItem={({item}) => 
                        <ListItem
                            title={item.title}
                            ImageComponent={
                                <Icon
                                  name={item.icon.name}
                                  size={40}
                                  backgroundColor={item.icon.backgroundColor}
                                /> 
                            }
                            onPress={() => navigation.navigate(item.targetScreen)}
                        />
                    }
                    ItemSeparatorComponent={ListItemSeparatorComponent}
                />
            </View>
      </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: color.light
    }
})

export default AccountScreen;