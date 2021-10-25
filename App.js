import React from 'react';
import { View } from 'react-native';
import Card from './app/componets/Card';
import Screen from './app/componets/Screen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

import WelcomeScreen from './app/screens/WelcomeScreen';
import Icon from './app/componets/Icon';
import ListItem from './app/componets/ListItem';

const App = () => {
  return (
    //<WelcomeScreen />
    // <View style={{
    //   backgroundColor: "#f8f4f4",
    //   padding: 15,
    // }}>
    //   <Card
    //     title="Apple watch series 6"
    //     subTitle="$500"
    //     image={require("./app/assets/apple-watch.jpg")}
    //   />
    // </View>

    // <ListingDetailsScreen />
    //<ViewImageScreen />
    //<MessagesScreen />

    <Screen>
      <ListItem
        title="Mohaimen Khalid"
        subTitle="mohaimen707@gmail.com"
        ImageComponent={
          <Icon
            name="email"
            size={60}
            backgroundColor="black"
            iconColor="white"
          />
        }
      />
      
    </Screen>
  );
};

export default App;
