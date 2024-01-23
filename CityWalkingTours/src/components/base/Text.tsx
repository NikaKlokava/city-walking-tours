import React from 'react';
import {Text as RnText, StyleSheet, TextProps} from 'react-native';
import {fonts} from '../../utils/fonts';

type Props = {
  type: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'fifth';
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
