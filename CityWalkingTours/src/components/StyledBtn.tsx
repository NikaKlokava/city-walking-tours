import React from 'react';
import {Pressable, StyleSheet, Text, TouchableOpacity} from 'react-native';

type Props = {
  title: string;
};

export const StyledBtn = ({title}: Props) => {
  return (
    <Pressable style={styles.btnContainer}>
      <TouchableOpacity>
        <Text style={styles.btnStyle}>{title}</Text>
      </TouchableOpacity>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btnContainer: {flex: 1},
  btnStyle: {
    color: '#5EDFFF',
    alignSelf: 'center',
    minWidth: 200,
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Gill Sans',
    padding: 10,
    borderWidth: 1,
    borderColor: '#5EDFFF',
    borderRadius: 10,
  },
});
