import React from 'react';
import {AppWrapper} from '../components/AppWrapper';
import {Text} from '../components/base/Text';
import {colors} from '../utils';
import {View} from 'react-native';

export const SettingsScreen = () => {
  return (
    <AppWrapper>
      <View style={{flex: 1}}>
        <Text type={'primary'} color={colors.active_bright} center>
          Settings
        </Text>
      </View>
    </AppWrapper>
  );
};
