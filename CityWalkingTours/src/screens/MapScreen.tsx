import React from 'react';
import {AppWrapper} from '../components/AppWrapper';
import {StyleSheet, View} from 'react-native';
import {Text} from '../components/base/Text';
import {colors, commonStyles} from '../utils';

export const MapScreen = () => {
  return (
    <AppWrapper>
      <View style={StyleSheet.flatten([commonStyles.container])}>
        <Text type={'primary'} color={colors.active_bright} center>
          Map
        </Text>
      </View>
    </AppWrapper>
  );
};
