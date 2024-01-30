import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../utils/colors';
import {StyleSheet} from 'react-native';

type Props = {
  withNavbar?: boolean;
  children: any;
};

export const AppWrapper = ({withNavbar, children}: Props) => {
  return (
    <LinearGradient
      colors={colors.gradient}
      style={[styles.main, !withNavbar && styles.padding]}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  padding: {
    paddingBottom: 50,
  },
});
