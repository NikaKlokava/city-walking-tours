import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {colors, commonStyles} from '../utils';
import {Icon} from './base/Icon';
import SVG_BACK from '../assets/icons/back.svg';

type Props = {
  onClick: () => void;
};

export const BackBtn = ({onClick}: Props) => {
  return (
    <TouchableOpacity
      style={StyleSheet.flatten([styles.backBtn, commonStyles.flexRow])}
      onPress={onClick}>
      <Icon icon={SVG_BACK} size="medium" />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  backBtn: {
    alignSelf: 'flex-start',
    borderRadius: 10,
    padding: 10,
    backgroundColor: colors.active_dark,
  },
});
