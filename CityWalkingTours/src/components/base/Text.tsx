import React from 'react';
import {Text as RnText, StyleSheet, TextProps} from 'react-native';
import {fonts} from '../../utils';

type Props = {
  type: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  color: string;
  center?: boolean;
  children: any;
} & TextProps;

export const Text = (props: Props) => (
  <RnText
    {...props}
    style={StyleSheet.flatten([
      props.style,
      fonts[props.type],
      {color: props.color},
      props.center && {textAlign: 'center'},
    ])}>
    {props.children}
  </RnText>
);
