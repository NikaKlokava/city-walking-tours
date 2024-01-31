import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../utils';
import {Text} from './base/Text';

type Props = {
  title: string;
  onClick?: () => void;
};

export const StyledBtn = ({title, onClick}: Props) => (
  <TouchableOpacity style={styles.btnContainer} onPress={onClick}>
    <Text type="quaternary" style={styles.btnStyle} color={colors.primary3}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btnContainer: {alignSelf: 'center'},
  btnStyle: {
    minWidth: 200,
    textAlign: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: colors.primary3,
    borderRadius: 10,
  },
});
