import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../utils/colors';

export const Line = ({white}: {white?: boolean}) => {
  return <View style={[styles.line, white && styles.white]} />;
};

const styles = StyleSheet.create({
  line: {
    borderWidth: 0.7,
    borderColor: colors.primary3,
  },
  white: {
    borderColor: colors.primary1,
    opacity: 0.6,
    borderStyle: 'dashed',
  },
});
