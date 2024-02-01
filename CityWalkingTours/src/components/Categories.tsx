import React from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import {Text} from './base/Text';
import {colors, commonStyles} from '../utils';
import {Line} from './Line';
import {CategoryItem} from './CategoryItem';

type Props = {
  categories: CategoriesType;
  city: string;
  onSelect: (title: string) => void;
};

export const Categories = ({categories, onSelect, city}: Props) => {
  return (
    <>
      {categories.map((caregory, index) => (
        <View style={styles.container} key={index}>
          <View style={StyleSheet.flatten([styles.titleContainer, commonStyles.flexRow])}>
            <Text type="primary" color={colors.primary1}>
              {caregory.title}
            </Text>
            <TouchableOpacity onPress={() => onSelect(caregory.title)}>
              <Text type="secondary" color={colors.semi_primary1}>
                see all
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={caregory.data}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <CategoryItem category={item} city={city} />
            )}
          />
          <Line white />
        </View>
      ))}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    rowGap: 25,
  },
  titleContainer: {justifyContent: 'space-between'},
});
