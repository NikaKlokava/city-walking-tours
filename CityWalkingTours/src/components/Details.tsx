import React from 'react';
import {
  ImageSourcePropType,
  Linking,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../utils/colors';
import {flexRow} from '../utils/flex';
import {Icon} from './base/Icon';
import {Text} from './base/Text';

const icon1 = require('../assets/location.png');
const icon2 = require('../assets/hours.png');
const icon3 = require('../assets/web.png');

type Props = {
  type: 'location' | 'hours' | 'site';
  title: string;
};

export const Details = ({type, title}: Props) => {
  const location = type === 'location';
  const site = type === 'site';
  return (
    <View style={[styles.container, flexRow]}>
      <View style={styles.iconContainer}>
        <Icon
          source={location ? icon1 : site ? icon3 : icon2}
          size={'xlarge'}
        />
      </View>
      <TouchableOpacity onPress={() => site && Linking.openURL(title)}>
        <Text type="fifth" color={colors.primary1} style={styles.opacity}>
          {location ? 'location' : site ? 'site' : 'open'}
        </Text>
        <Text type="secondary" color={colors.primary1}>
          {site ? 'Site' : title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    columnGap: 20,
  },
  iconContainer: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: colors.primary3,
  },
  opacity: {
    opacity: 0.7,
  },
});
