import React from 'react';
import {Text} from './base/Text';
import {StyleSheet, ActivityIndicator, View} from 'react-native';
import {colors} from '../utils';

type Props = {
  absolute?: boolean;
};

export const Loader = ({absolute}: Props) => {
  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        absolute && styles.absolute,
      ])}>
      <ActivityIndicator
        color={colors.active_bright}
        size={'large'}
        style={styles.indicator}
      />
      {!absolute && (
        <Text type="primary" color={colors.active_bright}>
          Loading...
        </Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  indicator: {
    width: 100,
    height: 100,
  },
});
