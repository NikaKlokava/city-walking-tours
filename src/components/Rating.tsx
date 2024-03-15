import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from './base/Text';
import {commonStyles} from '../utils';
import {Icon} from './base/Icon';
import STAR_ICON from '../assets/icons/star.svg';
import {useThemeContext} from '../context/theme-context';

type Props = {
  rating: string;
  white?: boolean;
};

export const Rating = ({rating, white}: Props) => {
  const {theme} = useThemeContext();
  return (
    <View style={StyleSheet.flatten([styles.container, commonStyles.flexRow])}>
      <Icon icon={STAR_ICON} size="small" />
      <Text
        type="quaternary"
        color={white ? theme.colors.primary1 : theme.colors.standart}>
        ({rating})
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignSelf: 'flex-end', columnGap: 5},
});
