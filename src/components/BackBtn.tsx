import React, {useMemo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {commonStyles} from '../utils';
import {Icon} from './base/Icon';
import SVG_BACK from '../assets/icons/back.svg';
import {useThemeContext} from '../context/theme-context';

type Props = {
  onClick: () => void;
};

export const BackBtn = ({onClick}: Props) => {
  const {theme} = useThemeContext();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <TouchableOpacity
      style={StyleSheet.flatten([styles.backBtn, commonStyles.flexRow])}
      onPress={onClick}>
      <Icon icon={SVG_BACK} size="medium" />
    </TouchableOpacity>
  );
};

const createStyles = (theme: ThemeType) =>
  StyleSheet.create({
    backBtn: {
      alignSelf: 'flex-start',
      borderRadius: 10,
      padding: 10,
      backgroundColor: theme.colors.active_dark,
    },
  });
