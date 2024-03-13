import 'react-native';
import React from 'react';
import App, {ContextComponent} from '../App';
import renderer, {act} from 'react-test-renderer';

import {it, describe, expect} from '@jest/globals';
import {screen, render} from '@testing-library/react-native';
import {sectionsStoreMock, settingsStoreMock} from '../__mocks__/storeMock';

describe('Render App Component', () => {
  it('App Component renders correctly', () => {
    const AppComponent = renderer.create(<App />).toJSON();
    expect(AppComponent).toMatchSnapshot();
  });

  it('Onboarding should be displayed for the first time', async () => {
    render(<ContextComponent store={settingsStoreMock} />);

    await act(async () => {
      await settingsStoreMock.uploadSettingsData();
    });

    const GreetingElems = screen.getAllByTestId('onboarding');

    expect(GreetingElems).toBeDefined();
  });

  it('CitySelectScreen should be displayed if Onboarding is passed', () => {
    render(
      <ContextComponent
        store={{...settingsStoreMock, isOnboardingPassed: 'true'}}
      />,
    );

    const CitySelectTitleElem = screen.getByTestId('city-select');
    expect(CitySelectTitleElem).toBeDefined();
  });

  it('HomeScreen should be displayed if onboarding is passed and a city is selected.', async () => {
    render(
      <ContextComponent
        store={{
          ...settingsStoreMock,
          isOnboardingPassed: 'true',
          city: 'city',
          cityUid: '123',
        }}
      />,
    );

    const HomeScreenElem = screen.getByTestId('home-screen-city');
    expect(HomeScreenElem).toBeDefined();
  });
});
