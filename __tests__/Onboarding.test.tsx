import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {it, describe, expect} from '@jest/globals';
import {Onboarding} from '../src/screens/Onboarding';
import { settingsStoreMock } from '../__mocks__/storeMock';

describe('Render Onboarding', () => {
  it('Onboarding renders correctly', () => {
    const OnboardingComponent = renderer.create(
      <Onboarding store={settingsStoreMock} />,
    );
    expect(OnboardingComponent).toMatchSnapshot();
  });
});

