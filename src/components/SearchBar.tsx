import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from './base/Text';
import {CATEGORIES, colors} from '../utils';
import {Line} from './Line';
import {Icon} from './base/Icon';
import {Loader} from './Loader';

type Props = {
  title: string | undefined;
  categories: CategoriesType;
  isLoading: boolean;
  onSelect: (title: string) => void;
};

export const SearchBar = ({title, isLoading, categories, onSelect}: Props) => {
  return (
    <>
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <Loader white />
        </View>
      ) : (
        <FlatList
          data={categories}
          horizontal
          keyExtractor={(_, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={StyleSheet.flatten([
                styles.categoryItem,
                title === item.title && styles.active,
                !title &&
                  CATEGORIES[0].category === item.title &&
                  styles.active,
              ])}
              onPress={() => {
                console.log(item.icon);
                onSelect(item.title);
              }}
              key={index}>
              <Icon icon={item.icon} size="xxxlarge" />
              <Text type="quaternary" color={colors.primary1}>
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      )}
      <Line />
    </>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    padding: 10,
    marginHorizontal: 15,
    marginLeft: 0,
    alignItems: 'center',
    rowGap: 6,
    borderBottomWidth: 5,
    borderBottomColor: 'transparent',
    minHeight: 100,
  },
  active: {borderBottomColor: colors.active_bright},
  loaderContainer: {minHeight: 100, width: '100%', position: 'relative'},
});
