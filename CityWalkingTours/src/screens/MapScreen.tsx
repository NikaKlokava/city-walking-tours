import React from 'react';
import {AppWrapper} from '../components/AppWrapper';
import {View} from 'react-native';
import {Text} from '../components/base/Text';
import {colors} from '../utils';

export const MapScreen = () => {
  return (
    <AppWrapper>
      <View style={{flex: 1}}>
        <Text type={'primary'} color={colors.active_bright} center>
          Map
        </Text>
      </View>
    </AppWrapper>
  );
};
