import React from 'react';
import {AppWrapper} from '../components/AppWrapper';
import {Text} from '../components/base/Text';
import {colors} from '../utils/colors';
import {View} from 'react-native';

export const WishlistScreen = () => {
  return (
    <AppWrapper>
      <View style={{flex: 1}}>
        <Text type={'primary'} color={colors.primary3} center>
          Wishlist
        </Text>
      </View>
    </AppWrapper>
  );
};
