import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from '../screens/HomeScreen';
import {DetailsScreen} from '../screens/DetailsScreen';
import {routes} from './routes';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.HOME}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={routes.HOME} component={HomeScreen} />
      <Stack.Screen name={routes.DETAILS} component={DetailsScreen} />
    </Stack.Navigator>
  );
};
