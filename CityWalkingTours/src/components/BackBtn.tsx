import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from './base/Text';
import {colors, flexRow} from '../utils';
import {Icon} from './base/Icon';
import SVG_BACK from '../assets/icons/back.svg';

type Props = {
  isEmpty?: boolean;
  onClick?: () => void;
};

export const BackBtn = ({isEmpty, onClick}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.backBtn, flexRow, isEmpty && styles.emptyBtn]}
      onPress={onClick}>
      <Icon icon={SVG_BACK} size="medium" />
      {!isEmpty && (
        <Text type="tertiary" color={colors.primary3}>
          Change city
        </Text>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  backBtn: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    padding: 10,
    borderColor: colors.primary3,
    justifyContent: 'space-between',
    columnGap: 5,
  },
  emptyBtn: {
    alignSelf: 'flex-start',
    backgroundColor: colors.primary5,
    borderWidth: 0,
  },
});
