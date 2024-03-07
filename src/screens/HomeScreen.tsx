import React, {useEffect, useMemo} from 'react';
import {AppWrapper} from '../components/AppWrapper';

import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import {commonStyles} from '../utils';
import {useState} from 'react';
import {Categories} from '../components/Categories';
import {SelectedCategory} from '../components/SelectedCategory';
import {Icon} from '../components/base/Icon';
import {Line} from '../components/Line';
import {SearchBar} from '../components/SearchBar';
import {Text} from '../components/base/Text';
import SEARCH_ICON from '../assets/icons/search.svg';
import {observer} from 'mobx-react';
import {Loader} from '../components/Loader';
import {sectionsStore} from '../context/sections-store';
import {settingsStore} from '../context/settings-store';
import {useThemeContext} from '../context/theme-context';

type Props = {
  sectionStore: SectionsStore;
  settingsStore: SettingsStore;
};

const HomeScreenComponent = observer(({sectionStore, settingsStore}: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const {theme} = useThemeContext();

  useEffect(() => {
    settingsStore.cityUid && sectionStore.uploadData(settingsStore.cityUid);
  }, []);
  const styles = useMemo(() => createStyles(theme), [theme]);

  const handleCategorySelect = (title: string) => {
    if (title === 'See All') setSelectedCategory(undefined);
    else setSelectedCategory(title);
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
            <Text type="tertiary" center color={theme.colors.semi_primary1}>
              city:
            </Text>
            <Text type="primary" center color={theme.colors.primary1}>
              {settingsStore.city}
            </Text>
          </View>
        </View>
        <Line />
        {sectionStore.isLoading ? (
          <Loader />
        ) : (
          <ScrollView>
            <View
              style={StyleSheet.flatten([
                styles.inputContainer,
                commonStyles.flexRow,
              ])}>
              <TextInput
                style={styles.searchInput}
                placeholder="What do you want to find?"
                placeholderTextColor={theme.colors.semi_primary1}
              />
              <Icon icon={SEARCH_ICON} size="medium" />
            </View>
            <SearchBar
              onSelect={handleCategorySelect}
              title={selectedCategory}
              categories={sectionStore.categories}
            />
            {selectedCategory ? (
              <SelectedCategory selectedCategory={selectedCategory} />
            ) : (
              <Categories
                data={sectionStore.data}
                onSelect={handleCategorySelect}
                isLoading={sectionStore.isLoading}
              />
            )}
          </ScrollView>
        )}
      </View>
    </AppWrapper>
  );
});

export const HomeScreen = () => (
  <HomeScreenComponent
    sectionStore={sectionsStore}
    settingsStore={settingsStore}
  />
);

const createStyles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 10,
    },
    headerContainer: {
      marginBottom: 20,
    },
    cityContainer: {columnGap: 10, justifyContent: 'flex-end'},
    inputContainer: {
      padding: 15,
      backgroundColor: theme.colors.input_background,
      borderRadius: 10,
      justifyContent: 'space-between',
    },
    searchInput: {
      color: theme.colors.primary1,
      fontSize: 15,
    },
  });
