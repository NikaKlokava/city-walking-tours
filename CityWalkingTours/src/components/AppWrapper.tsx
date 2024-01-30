import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../utils/colors';
import {StyleSheet} from 'react-native';

type Props = {
  children: any;
};

export const AppWrapper = ({children}: Props) => {
  return (
    <LinearGradient colors={colors.gradient} style={styles.main}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 80,
  },
});
