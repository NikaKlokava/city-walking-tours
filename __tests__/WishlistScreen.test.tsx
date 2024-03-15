import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {it, describe, expect} from '@jest/globals';
import { WishlistComponent } from '../src/screens/WishlistScreen';
import { sectionsStoreMock } from '../__mocks__/storeMock';

describe('Render WishlistScreen', () => {
  it('WishlistScreen renders correctly', () => {
    const WishlistScreen = renderer.create(<WishlistComponent store={sectionsStoreMock}/>);
    expect(WishlistScreen).toMatchSnapshot();
  });
});
