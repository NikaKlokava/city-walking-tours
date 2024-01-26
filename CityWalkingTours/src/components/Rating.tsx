import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Text} from './base/Text';
import {colors} from '../utils/colors';
import {flexRow} from '../utils/flex';
import {Icon} from './base/Icon';
const icon2 = require('../assets/star.png');

type Props = {
  rating: string;
  white?: boolean;
};

export const Rating = ({rating, white}: Props) => {
  return (
    <View style={[styles.container, flexRow]}>
      <Icon source={icon2} size="small" />
      <Text type="fifth" color={white ? colors.primary1 : colors.primary5}>
        ({rating})
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignSelf: 'flex-end', columnGap: 5},
});
