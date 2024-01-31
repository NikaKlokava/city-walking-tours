import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Icon} from './base/Icon';
import {tabs} from '../navigation';
import { colors, flexRow } from '../utils';

const icons = {
  [tabs.HOME]: require('../assets/home.png'),
  [tabs.WISHES]: require('../assets/wishlist.png'),
  [tabs.MAP]: require('../assets/map.png'),
  [tabs.SETTINGS]: require('../assets/settings.png'),
};

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
            style={[isFocused && styles.active]}>
            <Icon size="xxlarge" source={icons[route.name]} />
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
  active: {
    shadowColor: colors.primary3,
    shadowOpacity: 1,
    shadowRadius: 15,
  },
});
