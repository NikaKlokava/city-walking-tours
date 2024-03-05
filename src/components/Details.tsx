import React, {useMemo} from 'react';
import {Linking, StyleSheet, TouchableOpacity, View} from 'react-native';
import {detailsDescription, detailsSvgs, commonStyles} from '../utils';
import {Icon} from './base/Icon';
import {Text} from './base/Text';
import {useThemeContext} from '../context/theme-context';

type Props = {
  type: 'location' | 'hours' | 'site';
  title: string;
};

export const Details = ({type, title}: Props) => {
  const {theme} = useThemeContext();

  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View style={StyleSheet.flatten([styles.container, commonStyles.flexRow])}>
      <View style={styles.iconContainer}>
        <Icon icon={detailsSvgs[type]} size={'xlarge'} />
      </View>
      <TouchableOpacity
        onPress={() => detailsDescription['site'] && Linking.openURL(title)}>
        <Text type="quaternary" color={theme.colors.semi_primary1}>
          {detailsDescription[type]}
        </Text>
        <Text type="secondary" color={theme.colors.primary1}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const createStyles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      columnGap: 20,
    },
    iconContainer: {
      padding: 5,
      borderRadius: 10,
      backgroundColor: theme.colors.active_bright,
    },
  });
