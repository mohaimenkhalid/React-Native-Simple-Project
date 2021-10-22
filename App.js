import React from 'react';
import { View } from 'react-native';
import Card from './app/componets/Card';

import WelcomeScreen from './app/screens/WelcomeScreen';

const App = () => {
  return (
    //<WelcomeScreen />
    <View style={{
      backgroundColor: "#f8f4f4",
      padding: 15,
    }}>
      <Card
        title="Apple watch series 6"
        subTitle="$500"
        image={require("./app/assets/apple-watch.jpg")}
      />
    </View>
  );
};

export default App;
