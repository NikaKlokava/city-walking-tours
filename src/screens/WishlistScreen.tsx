import React, {lazy} from 'react';
import {AppWrapper} from '../components/AppWrapper';

import {FlatList, StyleSheet, View} from 'react-native';
import {CategoryItem} from '../components/CategoryItem';
import {WISHLIST_DATA, colors} from '../utils';
import {Text} from '../components/base/Text';

export const WishlistScreen = () => {
  return (
    <AppWrapper>
      <LazyWishlistContent />
    </AppWrapper>
  );
};

const WishlistContent = () => {
  return (
    <>
      <Text type={'primary'} color={colors.active_bright} center>
        Wishlist
      </Text>
      <FlatList
        data={WISHLIST_DATA}
        renderItem={({item, index}) => (
          <View key={index} style={styles.itemsContainer}>
            <CategoryItem category={item} liked />
          </View>
        )}
      />
    </>
  );
};

const LazyWishlistContent = lazy(async () => ({default: WishlistContent}));

const styles = StyleSheet.create({
  itemsContainer: {
    marginVertical: 20,
  },
});
