import React, {useMemo} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from './base/Text';
import {Line} from './Line';
import {Icon} from './base/Icon';
import {useThemeContext} from '../context/theme-context';

type Props = {
  title: string | undefined;
  categories: CategoriesType;
  onSelect: (title: string) => void;
};

export const SearchBar = ({title, categories, onSelect}: Props) => {
  const {theme} = useThemeContext();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <>
      <FlatList
        data={categories}
        horizontal
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={StyleSheet.flatten([
                styles.categoryItem,
                title === item.title && styles.active,
                !title && index === 0 && styles.active,
              ])}
              onPress={() => onSelect(item.title)}
              key={item.title}>
              <View style={styles.iconContainer}>
                <Icon icon={item.icon} size="xxxlarge" />
              </View>
              <Text type="quaternary" color={theme.colors.primary1}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
      <Line white />
    </>
  );
};

const createStyles = (theme: ThemeType) =>
  StyleSheet.create({
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
    iconContainer: {
      backgroundColor: theme.colors.active_bright,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      width: 60,
      height: 60,
    },
    active: {borderBottomColor: theme.colors.active_bright},
    loaderContainer: {minHeight: 100, width: '100%', position: 'relative'},
  });
