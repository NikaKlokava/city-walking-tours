import React, {useMemo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from './base/Text';
import {useThemeContext} from '../context/theme-context';

type Props = {
  title: string;
  onClick: () => void;
};

export const StyledBtn = ({title, onClick}: Props) => {
  const {theme} = useThemeContext();

  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onClick}>
      <Text
        type="primary"
        style={styles.btnStyle}
        color={theme.colors.active_bright}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const createStyles = (theme: ThemeType) =>
  StyleSheet.create({
    btnContainer: {alignSelf: 'center'},
    btnStyle: {
      minWidth: 200,
      textAlign: 'center',
      padding: 10,
      borderWidth: 1,
      borderColor: theme.colors.active_bright,
      borderRadius: 10,
    },
  });
