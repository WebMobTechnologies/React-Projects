import React from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import {StatusBar} from 'react-native';
import MainRoute from './src/router';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar backgroundColor={'grey'} barStyle="dark-content" />
      <NavigationContainer>
        <MainRoute />
      </NavigationContainer>
    </>
  );
};

export default App;
