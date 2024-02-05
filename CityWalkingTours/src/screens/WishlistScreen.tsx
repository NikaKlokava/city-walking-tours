import React, {lazy} from 'react';
import {AppWrapper} from '../components/AppWrapper';

import {ScrollView, StyleSheet, View} from 'react-native';
import {CategoryItem} from '../components/CategoryItem';
import {WISHLIST_DATA, colors} from '../utils';
import {Text} from '../components/base/Text';
import {Line} from '../components/Line';

export const WishlistScreen = () => {
  return (
    <AppWrapper>
      <LazyWishlistContent />
    </AppWrapper>
  );
};

const WishlistContent = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text type={'primary'} color={colors.active_bright} center>
          Wishlist
        </Text>
        <View style={styles.itemsContainer}>
          {WISHLIST_DATA.map((item, index) => {
            return (
              <View style={styles.itemsContainer} key={index}>
                <CategoryItem category={item} city={'Vilno'} liked />
                <Line white />
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const LazyWishlistContent = lazy(async () => ({default: WishlistContent}));

const styles = StyleSheet.create({
  container: {
    rowGap: 20,
    alignItems: 'center',
  },
  itemsContainer: {
    rowGap: 20,
  },
});
