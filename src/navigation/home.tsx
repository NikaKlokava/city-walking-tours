import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from '../screens/HomeScreen';
import {DetailsScreen} from '../screens/DetailsScreen';
import {routes} from '.';
import {sectionsStore} from '../context/sections-store';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.HOME}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={routes.HOME}
        children={() => <HomeScreen store={sectionsStore} />}
      />
      <Stack.Screen name={routes.DETAILS} component={DetailsScreen} />
    </Stack.Navigator>
  );
};
