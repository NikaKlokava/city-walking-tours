import React from 'react';
import {Image, ImageSourcePropType, ImageProps, StyleSheet} from 'react-native';
import {iconSize} from '../../utils';

type Props = {
  source: ImageSourcePropType;
  size: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge';
} & ImageProps;

export const Icon = (props: Props) => {
  return (
    <Image
      source={props.source}
      style={StyleSheet.flatten([props.style, iconSize[props.size]])}
    />
  );
};
