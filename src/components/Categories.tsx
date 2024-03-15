import React from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import {Text} from './base/Text';
import {commonStyles} from '../utils';
import {Line} from './Line';
import {CategoryItem} from './CategoryItem';
import {Loader} from './Loader';
import {useThemeContext} from '../context/theme-context';

type Props = {
  data: SectionsDataType;
  isLoading: boolean;
  onSelect: (title: string) => void;
};

export const Categories = ({data, isLoading, onSelect}: Props) => {
  const {theme} = useThemeContext();

  if (isLoading) {
    return <Loader white withText />;
  }
  return (
    <>
      {data?.map((caregory, index) => (
        <View style={styles.container} key={index}>
          <View
            style={StyleSheet.flatten([
              styles.titleContainer,
              commonStyles.flexRow,
            ])}>
            <Text type="primary" color={theme.colors.primary1}>
              {caregory.category.title}
            </Text>
            <TouchableOpacity onPress={() => onSelect(caregory.category.title)}>
              <Text type="secondary" color={theme.colors.semi_primary1}>
                see all
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={caregory.data}
            horizontal
            keyExtractor={item => item.title}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <CategoryItem category={item} isLiked={item.liked} />
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
