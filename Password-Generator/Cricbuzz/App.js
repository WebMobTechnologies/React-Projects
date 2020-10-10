import React from 'react';
import {StatusBar} from 'react-native';
import Home from './src/Home';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Home />
    </>
  );
};

export default App;
