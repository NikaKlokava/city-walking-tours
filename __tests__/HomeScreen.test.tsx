import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {it, describe, expect} from '@jest/globals';
import {HomeScreenComponent} from '../src/screens/HomeScreen';
import {sectionsStoreMock, settingsStoreMock} from '../__mocks__/storeMock';

describe('Render HomeScreen', () => {
  it('HomeScreen renders correctly', () => {
    const HomeScreen = renderer.create(
      <HomeScreenComponent
        sectionStore={sectionsStoreMock}
        settingsStore={settingsStoreMock}
      />,
    );
    expect(HomeScreen).toMatchSnapshot();
  });
});
