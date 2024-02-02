import React from 'react';
import {AppWrapper} from '../components/AppWrapper';
import {Text} from '../components/base/Text';
import {colors, commonStyles} from '../utils';
import {StyleSheet, View} from 'react-native';

export const SettingsScreen = () => {
  return (
    <AppWrapper>
      <View style={StyleSheet.flatten([commonStyles.container])}>
        <Text type={'primary'} color={colors.active_bright} center>
          Settings
        </Text>
      </View>
    </AppWrapper>
  );
};
