import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../utils';
import {Text} from './base/Text';

type Props = {
  title: string;
  onClick: () => void;
};

export const StyledBtn = ({title, onClick}: Props) => (
  <TouchableOpacity style={styles.btnContainer} onPress={onClick}>
    <Text type="primary" style={styles.btnStyle} color={colors.active_bright}>
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
    borderColor: colors.active_bright,
    borderRadius: 10,
  },
});
