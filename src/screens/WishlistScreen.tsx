import React from 'react';
import {AppWrapper} from '../components/AppWrapper';

import {FlatList, StyleSheet, View} from 'react-native';
import {CategoryItem} from '../components/CategoryItem';
import {Text} from '../components/base/Text';
import {observer} from 'mobx-react';
import {sectionsStore} from '../context/sections-store';
import {useThemeContext} from '../context/theme-context';

export const WishlistComponent = observer(({store}: {store: SectionsStore}) => {
  const {theme} = useThemeContext();

  const wishlistData = store.data.reduce((accum: DataType[], curr) => {
    return [...accum, ...curr.data.filter(elem => elem.liked)];
  }, []);

  return (
    <AppWrapper>
      <Text type={'primary'} color={theme.colors.active_bright} center>
        Wishlist
      </Text>
      {wishlistData.length === 0 ? (
        <Text
          type="primary"
          color={theme.colors.semi_pink}
          center
          style={styles.noFav}>
          no favorites...
        </Text>
      ) : (
        <FlatList
          data={wishlistData}
          keyExtractor={item => item.title}
          renderItem={({item}) => (
            <View key={item.title} style={styles.itemsContainer}>
              <CategoryItem category={item} isLiked={item.liked} inWishlist />
            </View>
          )}
        />
      )}
    </AppWrapper>
  );
});

export const WishlistScreen = () => <WishlistComponent store={sectionsStore} />;

const styles = StyleSheet.create({
  itemsContainer: {
    marginVertical: 20,
  },
  noFav: {
    marginTop: 20,
  },
});
