import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from './base/Text';
import {CategoryItem} from './CategoryItem';
import {useThemeContext} from '../context/theme-context';

type Props = {
  category: SectionDataType;
};
export const SelectedCategory = ({category}: Props) => {
  const {theme} = useThemeContext();
  return (
    <>
      <Text type="primary" color={theme.colors.primary1} center>
        {category.category.title}
      </Text>
      <View style={styles.itemContainer}>
        {category.data.map(item => (
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
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    marginHorizontal: 15,
    rowGap: 30,
  },
});
