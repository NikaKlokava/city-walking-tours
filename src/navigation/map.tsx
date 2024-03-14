import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {DetailsScreen} from '../screens/DetailsScreen';
import {MapScreen} from '../screens/MapScreen';
import {routes} from './routes';

const Stack = createNativeStackNavigator();

export const MapStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.MAP}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={routes.MAP} component={MapScreen} />
      <Stack.Screen name={routes.DETAILS} component={DetailsScreen} />
    </Stack.Navigator>
  );
};
