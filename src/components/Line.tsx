import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../utils';

export const Line = ({white, black}: {white?: boolean; black?: boolean}) => {
  return (
    <View
      style={StyleSheet.flatten([
        styles.line,
        white && styles.white,
        black && styles.black,
      ])}
    />
  );
};

const styles = StyleSheet.create({
  line: {
    borderWidth: 0.7,
    borderColor: colors.active_bright,
  },
  white: {
    borderColor: colors.primary1,
    opacity: 0.6,
    borderStyle: 'dashed',
  },
  black: {
    marginVertical: 5,
    borderColor: colors.primary2,
    opacity: 0.6,
    borderStyle: 'dashed',
  },
});
