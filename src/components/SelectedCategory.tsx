import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from './base/Text';
import {CategoryItem} from './CategoryItem';
import {useThemeContext} from '../context/theme-context';
import {observer} from 'mobx-react';
import {sectionsStore} from '../context/sections-store';

type Props = {
  category: string;
  store: SectionsStore;
};
export const SelectedCategoryComponent = observer(
  ({category, store}: Props) => {
    const {theme} = useThemeContext();

    const selectedCategoryData = store.data.find(
      item => item.category.title === category,
    );

    return (
      <>
        <Text type="primary" color={theme.colors.primary1} center>
          {selectedCategoryData?.category.title}
        </Text>
        <View style={styles.itemContainer}>
          {selectedCategoryData?.data?.map(item => (
            <CategoryItem
              category={item}
              key={item.title}
              verticalScroll
              isLiked={item.liked}
            />
          ))}
        </View>
      </>
    );
  },
);

export const SelectedCategory = ({
  selectedCategory,
}: {
  selectedCategory: string;
}) => (
  <SelectedCategoryComponent
    store={sectionsStore}
    category={selectedCategory}
  />
);

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    marginHorizontal: 15,
    rowGap: 30,
  },
});
