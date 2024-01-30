import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from '@react-navigation/native';
import {Icon} from './base/Icon';
import {flexRow} from '../utils/flex';
import {colors} from '../utils/colors';

const icon1 = require('../assets/home.png');
const icon2 = require('../assets/wishlist.png');
const icon3 = require('../assets/map.png');

type Props = {
  city: string;
};

export const Navigation = ({city}: Props) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <View style={[styles.navigationContainer, flexRow]}>
      <TouchableOpacity onPress={() => navigation.navigate('City', {city})}>
        <Icon source={icon1} size={'xxxlarge'} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon source={icon2} size={'xxxlarge'} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon source={icon3} size={'xxxlarge'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationContainer: {
    minHeight: 80,
    justifyContent: 'space-around',
    backgroundColor: colors.primary5,
    borderTopColor: colors.primary3,
    borderTopWidth: 2,
    shadowColor: colors.primary5,
    shadowOffset: {width: 0, height: -15},
    shadowOpacity: 0.7,
    shadowRadius: 5,
  },
});
