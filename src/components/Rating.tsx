import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from './base/Text';
import {colors, commonStyles} from '../utils';
import {Icon} from './base/Icon';
import STAR_ICON from '../assets/icons/star.svg';

type Props = {
  rating: string;
  white?: boolean;
};

export const Rating = ({rating, white}: Props) => {
  return (
    <View style={StyleSheet.flatten([styles.container, commonStyles.flexRow])}>
      <Icon icon={STAR_ICON} size="small" />
      <Text
        type="quaternary"
        color={white ? colors.primary1 : colors.active_dark}>
        ({rating})
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignSelf: 'flex-end', columnGap: 5},
});
