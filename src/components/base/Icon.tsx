import React from 'react';
import {ImageProps, StyleSheet} from 'react-native';
import {iconSize} from '../../utils';
import {SvgProps} from 'react-native-svg';

type Props = {
  icon: React.FC<SvgProps>;
  size: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge';
} & ImageProps;

export const Icon = (props: Props) => {
  const SVG = props.icon;
  return (
    <SVG style={StyleSheet.flatten([props.style, iconSize[props.size]])} />
  );
};
