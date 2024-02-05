import React, {useState} from 'react';

import {RootNavigator} from './src/navigation';

import {Onboarding} from './src/screens/Onboarding';
import {CitySelectionScreen} from './src/screens/CitySelectionScreen';

function App(): React.JSX.Element {
  const [isOnboardingPassed, setIsOnboardingPassed] = useState(true);
  const [city, setCity] = useState<string>();

  if (!isOnboardingPassed) {
    return <Onboarding onSubmit={() => setIsOnboardingPassed(true)} />;
  }

  if (city === null) {
    return <CitySelectionScreen onSelect={(city: string) => setCity(city)} />;
  }

  return <RootNavigator />;
}

export default App;
