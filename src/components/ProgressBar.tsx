import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {useThemeContext} from '../context/theme-context';

type Props = {
  index: number;
  dataLength: number;
};

export const ProgressBar = ({index, dataLength}: Props) => {
  const emptyArray = Array.from({length: dataLength});

  const {theme} = useThemeContext();

  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <>
      {emptyArray.map((_, i) => (
        <View
          key={i}
          style={StyleSheet.flatten([
            styles.dott,
            index === i && styles.active,
          ])}
        />
      ))}
    </>
  );
};

const createStyles = (theme: ThemeType) =>
  StyleSheet.create({
    dott: {
      width: 15,
      height: 15,
      borderRadius: 10,
      backgroundColor: theme.colors.active_bright,
      opacity: 0.4,
    },
    active: {
      opacity: 1,
    },
  });
