import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {DetailsScreen} from '../screens/DetailsScreen';
import {WishlistScreen} from '../screens/WishlistScreen';
import {routes} from './routes';

const Stack = createNativeStackNavigator();

export const WishlistStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.WISHLIST}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={routes.WISHLIST} component={WishlistScreen} />
      <Stack.Screen name={routes.DETAILS} component={DetailsScreen} />
    </Stack.Navigator>
  );
};
