import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from '../screens/AccountScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import ListingScreen from '../screens/ListingScreen';
import FeedNavigator from './FeedNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen 
            name="Feed"
            component={FeedNavigator} 
            options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => 
                <MaterialCommunityIcons name="home" color={color} size={size} />
            }}
        />
        <Tab.Screen 
            name="ListingEdit"
            component={ListingEditScreen}
            options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => 
                <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
            }}
          />
        <Tab.Screen 
            name="Account"
            component={AccountScreen}
            options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => 
                <MaterialCommunityIcons name="account" color={color} size={size} />
            }}
        />
    </Tab.Navigator>
)

export default AppNavigator;