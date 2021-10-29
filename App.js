import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
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

const App = () => {
  const [imageSource, setImageSource] = useState(null);

  function selectImage() {
    console.log("asd")
    let options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.launchImageLibrary(options, response => {
      console.log({ response });

      if (response.didCancel) {
        console.log('User cancelled photo picker');
        Alert.alert('You did not select any image');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response.uri };
        console.log({ source });
      }
    });
  }
  return (
    <TouchableOpacity
        onPress={selectImage}
      >
        <Text >Pick an image</Text>
    </TouchableOpacity>
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
