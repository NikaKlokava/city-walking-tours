import React, {Suspense} from 'react';
import {StyleSheet, View} from 'react-native';
import {Loader} from './Loader';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../utils';

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
        noPaddingTop && styles.noPadding,
      ])}>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 80,
  },
  noPadding: {
    paddingTop: 0,
  },
});
