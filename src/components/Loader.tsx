import React from 'react';
import {Text} from './base/Text';
import {StyleSheet, ActivityIndicator, View} from 'react-native';
import {useThemeContext} from '../context/theme-context';

type Props = {
  absolute?: boolean;
  white?: boolean;
  withText?: boolean;
};

export const Loader = ({absolute, white, withText}: Props) => {
  const {theme} = useThemeContext();

  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        absolute && styles.absolute,
      ])}>
      <ActivityIndicator
        color={white ? theme.colors.semi_primary1 : theme.colors.active_bright}
        size={'large'}
        style={styles.indicator}
      />
      {withText && (
        <Text type="primary" color={theme.colors.active_bright}>
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
