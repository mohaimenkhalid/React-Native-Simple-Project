import React from 'react';
import { View } from 'react-native';
import Card from './app/componets/Card';
import Screen from './app/componets/Screen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

import WelcomeScreen from './app/screens/WelcomeScreen';

import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import AppTextInput from './app/componets/AppTextInput';
import AppPicker from './app/componets/AppPicker';

const App = () => {
  return (
    //<WelcomeScreen />
    // <ListingDetailsScreen />
    //<ViewImageScreen />
    //<MessagesScreen />
    //<AccountScreen />
    //<ListingScreen />

    // <View>
    //   <AppTextInput icon="email" placeholder="Your Email" />
    //   <AppTextInput icon="key" placeholder="Your password" />
    // </View>
    <Screen>
      <AppPicker placeholder="Category" icon="apps" /> 
      <AppTextInput icon="email" placeholder="Email" /> 
    </Screen>

  );
};

export default App;
