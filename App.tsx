import React, {useEffect} from 'react';

import {RootNavigator} from './src/navigation';

import {Onboarding} from './src/screens/Onboarding';
import {CitySelectionScreen} from './src/screens/CitySelectionScreen';
import {selectCityStore} from './src/context/cities-store';
import {observer} from 'mobx-react';
import {settingsStore} from './src/context/settings-store';
import {ThemeContextProvider} from './src/context/theme-context';

function App(): React.JSX.Element {
  return (
    <ThemeContextProvider>
      <MainComponent />
    </ThemeContextProvider>
  );
}

export const ContextComponent = observer(({store}: {store: SettingsStore}) => {
  useEffect(() => {
    store.uploadSettingsData();
  }, []);

  if (!store.isOnboardingPassed) {
    return <Onboarding store={settingsStore} />;
  }

  if (!store.city) {
    return (
      <CitySelectionScreen
        cityStore={selectCityStore}
        settingsStore={settingsStore}
      />
    );
  }

  return <RootNavigator />;
});

const MainComponent = () => <ContextComponent store={settingsStore} />;

export default App;
