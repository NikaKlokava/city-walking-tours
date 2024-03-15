import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {it, describe, expect} from '@jest/globals';
import { CitySelectionScreen } from '../src/screens/CitySelectionScreen';
import { cityStoreMock, settingsStoreMock } from '../__mocks__/storeMock';

describe('Render CitySelectionScreen', () => {
  it('CitySelectionScreen renders correctly', () => {
    const CitySelectionScreenComponent = renderer.create(
      <CitySelectionScreen cityStore={cityStoreMock} settingsStore={settingsStoreMock} />,
    );
    expect(CitySelectionScreenComponent).toMatchSnapshot();
  });
});