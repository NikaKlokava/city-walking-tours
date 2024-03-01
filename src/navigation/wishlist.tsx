import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {DetailsScreen} from '../screens/DetailsScreen';
import {routes} from '.';
import {WishlistScreen} from '../screens/WishlistScreen';

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
