import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {useThemeContext} from '../context/theme-context';

export const Line = ({white, black}: {white?: boolean; black?: boolean}) => {
  const {theme} = useThemeContext();
  const styles = useMemo(() => createStyles(theme), [theme]);

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

const createStyles = (theme: ThemeType) =>
  StyleSheet.create({
    line: {
      marginVertical: 10,
      borderWidth: 0.7,
      borderColor: theme.colors.active_bright,
    },
    white: {
      borderColor: theme.colors.primary1,
      opacity: 0.6,
      borderStyle: 'dashed',
    },
    black: {
      marginVertical: 5,
      borderColor: theme.colors.primary2,
      opacity: 0.6,
      borderStyle: 'dashed',
    },
  });
