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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';

const App = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
