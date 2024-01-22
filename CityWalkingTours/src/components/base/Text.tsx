import React from 'react';
import {Text as RnText, StyleSheet, TextProps} from 'react-native';
import {fonts} from '../../utils/fonts';

type Props = {
  type: 'primary' | 'secondary';
  color: string;
  children: any;
} & TextProps;

export const Text = (props: Props) => (
  <RnText
    {...props}
    style={StyleSheet.flatten([
      props.style,
      fonts[props.type],
      {color: props.color},
    ])}>
    {props.children}
  </RnText>
);
