import React, {useMemo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Icon} from './base/Icon';
import {commonStyles, tabBarIcons} from '../utils';
import {useThemeContext} from '../context/theme-context';

export const TabBar = ({state, navigation}: BottomTabBarProps) => {
  const {theme} = useThemeContext();

  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View style={StyleSheet.flatten([styles.container, commonStyles.flexRow])}>
      {state.routes.map((route: any, index: any) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            onPress={onPress}
            style={StyleSheet.flatten([
              styles.tab,
              isFocused && styles.active,
            ])}>
            <Icon size="xxlarge" icon={tabBarIcons[route.name]} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const createStyles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.active_dark,
      shadowColor: theme.colors.active_dark,
      shadowOpacity: 1,
      shadowRadius: 5,
      justifyContent: 'space-around',
      height: 90,
    },
    tab: {
      alignSelf: 'flex-start',
      paddingVertical: 10,
      opacity: 0.6,
      borderBottomColor: theme.colors.active_bright,
      borderBottomWidth: 0,
    },
    active: {
      opacity: 1,
      borderBottomWidth: 3,
    },
  });
