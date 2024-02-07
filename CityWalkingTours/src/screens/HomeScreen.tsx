import React, {useEffect} from 'react';
import {AppWrapper} from '../components/AppWrapper';

import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import {SECTIONS, colors, commonStyles} from '../utils';
import {lazy, useState} from 'react';
import {Categories} from '../components/Categories';
import {SelectedCategory} from '../components/SelectedCategory';
import {Icon} from '../components/base/Icon';
import {Line} from '../components/Line';
import {SearchBar} from '../components/SearchBar';
import {Text} from '../components/base/Text';
import SEARCH_ICON from '../assets/icons/search.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSettingsContext} from '../context/settings-context';

export const HomeScreen = () => {
  return (
    <AppWrapper>
      <LazyHomeContent />
    </AppWrapper>
  );
};

const HomeContent = () => {
  const context = useSettingsContext();

  const [selectedCategory, setSelectedCategory] = useState<CategotyType>();

  const handleCategorySelect = (title: string) => {
    const category = SECTIONS.find(section => section.title === title);
    setSelectedCategory(category);
  };
  return (
    <View
      style={StyleSheet.flatten([styles.container, commonStyles.container])}>
      <View style={styles.headerContainer}>
        <View
          style={StyleSheet.flatten([
            styles.cityContainer,
            commonStyles.flexRow,
          ])}>
          <Text type="tertiary" center color={colors.semi_primary1}>
            city:
          </Text>
          <Text type="primary" center color={colors.primary1}>
            {context.data.city}
          </Text>
        </View>
      </View>
      <Line />
      <ScrollView>
        <View style={styles.scrollContainer}>
          <View
            style={StyleSheet.flatten([
              styles.inputContainer,
              commonStyles.flexRow,
            ])}>
            <TextInput
              style={styles.searchInput}
              placeholder="What do you want to find?"
              placeholderTextColor={colors.semi_primary1}
            />
            <Icon icon={SEARCH_ICON} size="medium" />
          </View>
          <SearchBar
            onSelect={handleCategorySelect}
            title={selectedCategory?.title}
          />
          {selectedCategory ? (
            <SelectedCategory
              category={selectedCategory}
              city={context.data.city}
            />
          ) : (
            <Categories
              city={context.data.city}
              categories={SECTIONS}
              onSelect={handleCategorySelect}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const LazyHomeContent = lazy(async () => ({default: HomeContent}));

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  headerContainer: {
    marginBottom: 20,
  },
  scrollContainer: {rowGap: 20, marginTop: 10},
  cityContainer: {columnGap: 10, justifyContent: 'flex-end'},
  inputContainer: {
    padding: 15,
    backgroundColor: colors.input_background,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  searchInput: {
    color: colors.primary1,
    fontSize: 15,
  },
});
