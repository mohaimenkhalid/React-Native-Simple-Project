import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ListingScreen from '../screens/ListingScreen';
import AccountScreen from '../screens/AccountScreen';


const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Listings" component={ListingScreen} />
    </Stack.Navigator>
);

export default AccountNavigator;