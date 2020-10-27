import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MatchDetails from 'src/screens/MatchDetails';
import Home from 'src/screens/Home';
import Routes from './routes';

const Stack = createStackNavigator();

function MainRoute() {
  return (
    <Stack.Navigator initialRouteName={Routes.Home}>
      <Stack.Screen
        name={Routes.Home}
        component={Home}
        options={{
          headerShown: false, // change this to `false`
        }}
      />
      <Stack.Screen name={Routes.MatchDetails} component={MatchDetails} />

      <Stack.Screen
        name={Routes.Home}
        component={Home}
        options={{
          headerShown: true, // change this to `false`
        }}
      />
      <Stack.Screen name={Routes.MatchDetails} component={MatchDetails} />
    </Stack.Navigator>
  );
}

export default MainRoute;
