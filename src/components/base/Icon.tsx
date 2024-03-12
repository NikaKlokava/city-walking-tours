import React, {useState} from 'react';
import {ImageProps, StyleSheet} from 'react-native';
import {iconSize} from '../../utils';
import {SvgProps, SvgUri} from 'react-native-svg';
import {Loader} from '../Loader';

type Props = {
  icon: React.FC<SvgProps> | string;
  size: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge';
} & ImageProps;

export const Icon = (props: Props) => {
  const [loading, setLoading] = useState(true);

  const SVG = props.icon;
  const svgStyle = StyleSheet.flatten([props.style, iconSize[props.size]]);

  if (typeof props.icon === 'string')
    return (
      <>
        <SvgUri
          uri={props.icon}
          style={svgStyle}
          onLoad={() => setLoading(false)}
        />
        {loading && <Loader white />}
      </>
    );

  return <SVG style={svgStyle} />;
};
