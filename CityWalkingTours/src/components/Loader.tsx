import React, {useEffect} from 'react';
import {Text} from './base/Text';
import SplashScreen from 'react-native-splash-screen';

export const Loader = () => {
  useEffect(
    () => () => {
      SplashScreen.hide();
    },
    [],
  );
  return (
    <Text type="primary" color="red">
      Loading...
    </Text>
  );
};
