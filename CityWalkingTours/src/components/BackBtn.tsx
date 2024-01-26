import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from './base/Text';
import {colors} from '../utils/colors';
import {flexRow} from '../utils/flex';
import {Icon} from './base/Icon';

const image = require('../assets/back_icon.png');

type Props = {
  isEmpty?: boolean;
  onClick?: () => void;
};

export const BackBtn = ({isEmpty, onClick}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.backBtn, flexRow, isEmpty && styles.emptyBtn]}
      onPress={onClick}>
      <Icon source={image} size="medium" />
      {!isEmpty && (
        <Text type="tertiary" color={colors.primary3}>
          BACK
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
