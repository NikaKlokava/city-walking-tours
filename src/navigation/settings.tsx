import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SettingsScreen} from '../screens/SettingsScreen';
import {routes} from './routes';

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
