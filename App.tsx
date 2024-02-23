import React from 'react';

import {RootNavigator} from './src/navigation';

import {Onboarding} from './src/screens/Onboarding';
import {CitySelectionScreen} from './src/screens/CitySelectionScreen';
import {
  SettingsContextProvider,
  useSettingsContext,
} from './src/context/settings-context';
import { selectCityStore } from './src/context/cities-store';

function App(): React.JSX.Element {
  return (
    <SettingsContextProvider>
      <ContextComponent />
    </SettingsContextProvider>
  );
}

const ContextComponent = () => {
  const context = useSettingsContext();

  if (!context.data.isOnboardingPassed) {
    return <Onboarding />;
  }

  if (!context.data.city) {
    return <CitySelectionScreen store={selectCityStore}/>;
  }

  return <RootNavigator />;
};

export default App;
