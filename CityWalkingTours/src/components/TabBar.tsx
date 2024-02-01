import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Icon} from './base/Icon';
import {tabs} from '../navigation';
import {colors, flexRow, tabBarIcons} from '../utils';

export const TabBar = ({state, navigation}: BottomTabBarProps) => {
  return (
    <View style={[styles.container, flexRow]}>
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
            style={[styles.tab, isFocused && styles.active]}>
            <Icon size="xxlarge" icon={tabBarIcons[route.name]} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary5,
    shadowColor: colors.primary5,
    shadowOpacity: 1,
    shadowRadius: 7,
    justifyContent: 'space-around',
    height: 90,
  },
  tab: {
    opacity: 0.4,
    paddingBottom: 5,
    borderBottomColor: colors.primary3,
    borderBottomWidth: 0,
  },
  active: {
    opacity: 1,
    borderBottomWidth: 2,
  },
});
