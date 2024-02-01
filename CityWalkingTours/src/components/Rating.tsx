import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from './base/Text';
import {colors, flexRow} from '../utils';
import {Icon} from './base/Icon';
import STAR_ICON from '../assets/icons/star.svg';

type Props = {
  rating: string;
  white?: boolean;
};

export const Rating = ({rating, white}: Props) => {
  return (
    <View style={[styles.container, flexRow]}>
      <Icon icon={STAR_ICON} size="small" />
      <Text type="fifth" color={white ? colors.primary1 : colors.primary5}>
        ({rating})
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignSelf: 'flex-end', columnGap: 5},
});
