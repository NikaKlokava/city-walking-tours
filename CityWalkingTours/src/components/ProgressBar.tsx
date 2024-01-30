import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../utils/colors';

type Props = {
  index: number;
  dataLength: number;
};

export const ProgressBar = ({index, dataLength}: Props) => {
  const emptyArray = Array.from({length: dataLength});

  return (
    <>
      {emptyArray.map((_, i) => (
        <View key={i} style={[styles.dott, index === i && styles.active]} />
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  dott: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: colors.primary3,
    opacity: 0.4,
  },
  active: {
    opacity: 1,
  },
});
