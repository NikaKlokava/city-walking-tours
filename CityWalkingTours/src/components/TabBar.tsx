import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Icon} from './base/Icon';
import {colors, commonStyles, tabBarIcons} from '../utils';

export const TabBar = ({state, navigation}: BottomTabBarProps) => {
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.active_dark,
    shadowColor: colors.active_dark,
    shadowOpacity: 1,
    shadowRadius: 7,
    justifyContent: 'space-around',
    height: 90,
  },
  tab: {
    opacity: 0.4,
    paddingBottom: 5,
    borderBottomColor: colors.active_bright,
    borderBottomWidth: 0,
  },
  active: {
    opacity: 1,
    borderBottomWidth: 2,
  },
});
