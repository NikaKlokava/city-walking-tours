import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors, commonStyles} from '../utils';
import {StyleSheet} from 'react-native';

type Props = {
  children: any;
  noPaddingTop?: boolean;
};

export const AppWrapper = ({children, noPaddingTop}: Props) => {
  return (
    <LinearGradient
      colors={colors.gradient}
      style={StyleSheet.flatten([
        styles.main,
        commonStyles.container,
        noPaddingTop && styles.noPadding,
      ])}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingTop: 80,
  },
  noPadding: {
    paddingTop: 0,
  },
});
