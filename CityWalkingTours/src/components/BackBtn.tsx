import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from './base/Text';
import {colors} from '../utils/colors';
import {flexRow} from '../utils/flex';

const image = require('../assets/back_icon.png');

export const BackBtn = () => {
  return (
    <TouchableOpacity style={[styles.backBtn, flexRow]} onPress={() => {}}>
      <Image source={image} style={styles.backIcon} />
      <Text type="tertiary" color={colors.primary3}>
        BACK
      </Text>
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
  backIcon: {
    width: 20,
    height: 20,
  },
});
