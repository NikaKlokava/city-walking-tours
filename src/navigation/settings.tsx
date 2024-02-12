import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {routes} from '.';
import {SettingsScreen} from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();

export const SettingsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.MAP}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={routes.MAP} component={SettingsScreen} />
    </Stack.Navigator>
  );
};
