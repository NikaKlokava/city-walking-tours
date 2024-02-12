import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from './base/Text';
import {CATEGORIES, colors} from '../utils';
import {Line} from './Line';
import {Icon} from './base/Icon';

type Props = {
  title: string | undefined;
  onSelect: (title: string) => void;
};

export const SearchBar = ({title, onSelect}: Props) => {
  return (
    <>
      <FlatList
        data={CATEGORIES}
        horizontal
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={StyleSheet.flatten([
              styles.categoryItem,
              title === item.category && styles.active,
              !title &&
                CATEGORIES[0].category === item.category &&
                styles.active,
            ])}
            onPress={() => {
              onSelect(item.category);
            }}
            key={index}>
            <Icon icon={item.icon} size="xxxlarge" />
            <Text type="quaternary" color={colors.primary1}>
              {item.category}
            </Text>
          </TouchableOpacity>
        )}
      />
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
    rowGap: 10,
    borderBottomWidth: 5,
    borderBottomColor: 'transparent',
  },
  active: {borderBottomColor: colors.active_bright},
});
