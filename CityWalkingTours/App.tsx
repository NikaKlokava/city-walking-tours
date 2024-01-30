import React, {useState} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootNavigator} from './src/navigation';

import {Onboarding} from './src/components/Onboarding';
import {CitySelectionScreen} from './src/screens/CitySelectionScreen';

const Stack = createNativeStackNavigator();

// read async storage
// const isOnboardingPassed = false;

// read async storage
const city = 'Vilnius';

function App(): React.JSX.Element {
  const [isOnboardingPassed, setIsOnboardingPassed] = useState(false);
  const [city, setCity] = useState<string>()

  if (isOnboardingPassed) {
    return <Onboarding onSubmit={() => setIsOnboardingPassed(true)} />;
  }

  if (city === null) {
    return <CitySelectionScreen onSelect={(city: string) => setCity(city)}/>;
  }

  // return rab navigator from root.ts file
  return <RootNavigator />;
}

export default App;
