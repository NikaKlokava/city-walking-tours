import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {it, describe, expect} from '@jest/globals';
import {MapScreenContent} from '../src/screens/MapScreen';
import {sectionsStoreMock} from '../__mocks__/storeMock';

describe('Render MapScreen', () => {
  it('MapScreen renders correctly', () => {
    const MapScreenComponent = renderer.create(
      <MapScreenContent store={sectionsStoreMock} />,
    );
    expect(MapScreenComponent).toMatchSnapshot();
  });
});
