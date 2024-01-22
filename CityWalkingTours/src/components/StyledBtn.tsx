import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {colors} from '../utils/colors';
import {Text} from './base/Text';

type Props = {
  title: string;
  onClick?: () => void;
};

export const StyledBtn = ({title, onClick}: Props) => {
  return (
    <Pressable style={styles.btnContainer} onPress={onClick}>
      <Text type="quaternary" style={styles.btnStyle} color={colors.primary3}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btnContainer: {alignSelf: 'center'},
  btnStyle: {
    alignSelf: 'center',
    minWidth: 200,
    textAlign: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: colors.primary3,
    borderRadius: 10,
  },
});
