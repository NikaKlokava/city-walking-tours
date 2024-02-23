import React, {useEffect} from 'react';
import {AppWrapper} from '../components/AppWrapper';

import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import {SECTIONS, colors, commonStyles} from '../utils';
import {useState} from 'react';
import {Categories} from '../components/Categories';
import {SelectedCategory} from '../components/SelectedCategory';
import {Icon} from '../components/base/Icon';
import {Line} from '../components/Line';
import {SearchBar} from '../components/SearchBar';
import {Text} from '../components/base/Text';
import SEARCH_ICON from '../assets/icons/search.svg';
import {useSettingsContext} from '../context/settings-context';
import {observer} from 'mobx-react';

export const HomeScreen = observer(({store}: {store: SectionsStore}) => {
  const context = useSettingsContext();

  const [selectedCategory, setSelectedCategory] = useState<CategoryType>();

  useEffect(() => {
    context.data.cityUid && store.uploadCategories(context.data.cityUid);
  }, []);

  const handleCategorySelect = (title: string) => {
    const category = store.categories.find(item => item.title === title);
    category && setSelectedCategory(category);
  };
  return (
    <AppWrapper>
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
              categories={store.categories}
              isLoading={store.isLoading}
            />
            {selectedCategory ? (
              <SelectedCategory category={selectedCategory} />
            ) : (
              <Categories
                categories={SECTIONS}
                onSelect={handleCategorySelect}
              />
            )}
          </View>
        </ScrollView>
      </View>
    </AppWrapper>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  headerContainer: {
    marginBottom: 20,
  },
  scrollContainer: {rowGap: 10, marginTop: 10},
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
