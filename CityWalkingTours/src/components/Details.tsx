import React from 'react';
import {Linking, StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors, detailsDescription, detailsSvgs, flexRow} from '../utils';
import {Icon} from './base/Icon';
import {Text} from './base/Text';

type Props = {
  type: 'location' | 'hours' | 'site';
  title: string;
};

export const Details = ({type, title}: Props) => {
  return (
    <View style={[styles.container, flexRow]}>
      <View style={styles.iconContainer}>
        <Icon icon={detailsSvgs[type]} size={'xlarge'} />
      </View>
      <TouchableOpacity
        onPress={() => detailsDescription['site'] && Linking.openURL(title)}>
        <Text type="fifth" color={colors.primary1} style={styles.opacity}>
          {detailsDescription[type]}
        </Text>
        <Text type="secondary" color={colors.primary1}>
          {title}
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
