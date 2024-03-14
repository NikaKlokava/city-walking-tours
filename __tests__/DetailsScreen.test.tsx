import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {it, describe, expect} from '@jest/globals';
import {DetailsScreen} from '../src/screens/DetailsScreen';

describe('Render DetailsScreen', () => {
  it('DetailsScreen renders correctly', () => {
    const DetailsScreenComponent = renderer.create(<DetailsScreen />);
    expect(DetailsScreenComponent).toMatchSnapshot();
  });
});
