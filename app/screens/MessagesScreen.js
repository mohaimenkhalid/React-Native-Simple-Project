import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import ListItem from '../componets/ListItem';
import ListItemSeparator from '../componets/ListItemSeparator';
import Screen from '../componets/Screen';

function MessagesScreen(props) {
    const [refreshing, setRefreshing] = useState(false);
    const messages = [
        {
            id: 1,
            title: "Hello Title 1",
            description: "Description here",
            image: require('../assets/apple-watch.jpg')
        },
        {
            id: 2,
            title: "Hello Title 2",
            description: "Description here",
            image: require('../assets/apple-watch.jpg')
        },
    ];
    return (
        <Screen>
            <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={ ({item}) => 
                <ListItem 
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log(item.title)}
                    renderRightActions={() => {
                        <View style={{backgroundColor:"red", width: 70}}>
                            Delete
                        </View>
                    }}
                />
            }
            ItemSeparatorComponent={() => <ListItemSeparator /> }
            refreshing={refreshing}
            onRefresh={() => {
                console.log("refreshing...")
            }}
        />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})

export default MessagesScreen;