import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {it, describe, expect} from '@jest/globals';
import { SettingsScreen } from '../src/screens/SettingsScreen';

describe('Render SettingsScreen', () => {
  it('SettingsScreen renders correctly', () => {
    const SettingsScreenComponent = renderer.create(<SettingsScreen />);
    expect(SettingsScreenComponent).toMatchSnapshot();
  });
});
