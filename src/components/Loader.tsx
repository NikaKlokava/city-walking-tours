import React, {useEffect} from 'react';
import {Text} from './base/Text';
import SplashScreen from 'react-native-splash-screen';
import {StyleSheet, ActivityIndicator, View} from 'react-native';
import {colors} from '../utils';

export const Loader = () => {
  useEffect(
    () => () => {
      SplashScreen.hide();
    },
    [],
  );
  return (
    <View style={styles.container}>
      <ActivityIndicator
        color={colors.active_bright}
        size={'large'}
        style={styles.indicator}
      />
      <Text type="primary" color={colors.active_bright}>
        Loading...
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  indicator: {
    width: 100,
    height: 100,
  },
});
