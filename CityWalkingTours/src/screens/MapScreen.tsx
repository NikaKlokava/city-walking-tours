import React from 'react';
import {AppWrapper} from '../components/AppWrapper';
import {View} from 'react-native';
import {Text} from '../components/base/Text';
import {colors} from '../utils/colors';

export const MapScreen = () => {
  return (
    <AppWrapper>
      <View style={{flex: 1}}>
        <Text type={'primary'} color={colors.primary3} center>
          Map
        </Text>
      </View>
    </AppWrapper>
  );
};
