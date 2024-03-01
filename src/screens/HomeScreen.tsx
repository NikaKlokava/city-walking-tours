import React, {useEffect} from 'react';
import {AppWrapper} from '../components/AppWrapper';

import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import {colors, commonStyles} from '../utils';
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
import {Loader} from '../components/Loader';
import {sectionsStore} from '../context/sections-store';

const HomeScreenComponent = observer(({store}: {store: SectionsStore}) => {
  const context = useSettingsContext();

  const [selectedCategory, setSelectedCategory] = useState<SectionDataType>();

  useEffect(() => {
    context.data.cityUid && store.uploadData(context.data.cityUid);
  }, []);

  const handleCategorySelect = (title: string) => {
    const category = store.data.find(item => item.category.title === title);
    if (!category) setSelectedCategory(undefined);
    setSelectedCategory(category);
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
        {store.isLoading ? (
          <Loader />
        ) : (
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
                title={selectedCategory?.category.title}
                categories={store.categories}
              />
              {selectedCategory ? (
                <SelectedCategory category={selectedCategory} />
              ) : (
                <Categories
                  data={store.data}
                  onSelect={handleCategorySelect}
                  isLoading={store.isLoading}
                />
              )}
            </View>
          </ScrollView>
        )}
      </View>
    </AppWrapper>
  );
});

export const HomeScreen = () => <HomeScreenComponent store={sectionsStore} />;

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
