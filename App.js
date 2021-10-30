import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, Alert, Button } from 'react-native';
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
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import * as ImagePicker from "react-native-image-picker"
import {request, PERMISSIONS} from 'react-native-permissions';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Link = () => {
  const navigation = useNavigation();
  return (
    <Button title="Click"  onPress={() => navigation.navigate('MessageScreen', {id: 2})} />
  );
}


function HomeScreen({ navigation  }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button 
        title="Message Page"
        onPress={() => navigation.navigate('MessageScreen', {id: "1"})}
       />
       <Link />
    </View>
  );
}

function MessageScreen({route, navigation}) {
  console.log(route.params.id)
  navigation.setOptions({
    title: `${route.params.id}`
  });
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Message Screen - {route.params.id}</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
       name="MessageScreen" 
       component={MessageScreen}
       
      />
    </Stack.Navigator>
  );
  
}


const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
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
    // <Screen>
    //   <AppPicker 
    //   icon="apps"
    //   items={categories}
    //   selectedItem={selectedCategory}
    //   onSelectedItem={(item) => setSelectedCategory(item)}
    //   placeholder="Category"
    // /> 
    //   <AppTextInput icon="email" placeholder="Email" /> 
    // </Screen>
    //<LoginScreen />
    //<ListingEditScreen />

  );
};

export default App;
