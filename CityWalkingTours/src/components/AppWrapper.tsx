import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../utils/colors';
import { StyleSheet } from 'react-native';

export const AppWrapper = ({children}: any) => {
  return (
    <LinearGradient colors={colors.gradient} style={styles.main}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
    main: {
      flex: 1,
      paddingBottom: 50,
    },
  });
