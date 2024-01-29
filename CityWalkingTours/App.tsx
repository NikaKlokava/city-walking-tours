import React from 'react';
import {CityScreen} from './src/screens/CityScreen';
import {CitySelectionScreen} from './src/screens/CitySelectionScreen';
import {HomeScreen} from './src/screens/HomeScreen';
import {DetailsScreen} from './src/screens/DetailsScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Selection" component={CitySelectionScreen} />
        <Stack.Screen name="City" component={CityScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
