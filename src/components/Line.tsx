import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../utils';

export const Line = ({white}: {white?: boolean}) => {
  return (
    <View style={StyleSheet.flatten([styles.line, white && styles.white])} />
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
});
