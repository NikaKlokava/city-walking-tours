import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from './base/Text';
import {colors} from '../utils/colors';
import {CategoryItem} from './CategoryItem';

type Props = {
  category: CategotyType;
};
export const SelectedCategory = ({category}: Props) => {
  return (
    <>
      <Text type="primary" color={colors.primary1} center>
        {category.title}
      </Text>
      <View style={styles.itemContainer}>
        {category.data.map((item, index) => (
          <CategoryItem category={item} key={index} verticalScroll />
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
