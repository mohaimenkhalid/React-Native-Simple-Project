import React, { useState } from 'react';
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

const categories = [
  {label: "Furniture", value: 1},
  {label: "Book", value: 2},
  {label: "Camera", value: 3},
]

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('')
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
      <AppPicker 
      icon="apps"
      items={categories}
      selectedItem={selectedCategory}
      onSelectedItem={(item) => setSelectedCategory(item)}
      placeholder="Category"
    /> 
      <AppTextInput icon="email" placeholder="Email" /> 
    </Screen>

  );
};

export default App;
