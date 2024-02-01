import React, {useState} from 'react';
import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import {SECTIONS, colors, commonStyles} from '../utils';
import {Text} from '../components/base/Text';
import {Line} from '../components/Line';
import {SearchBar} from '../components/SearchBar';
import {Categories} from '../components/Categories';
import {SelectedCategory} from '../components/SelectedCategory';
import {Icon} from '../components/base/Icon';
import {AppWrapper} from '../components/AppWrapper';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SEARCH_ICON from '../assets/icons/search.svg';

type Props = {
  navigation: NativeStackNavigationProp<any, any>;
};

export const HomeScreen = ({navigation}: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<CategotyType>();

  const {city}: {city: string} = {city: 'Vilnius'};

  const handleCategorySelect = (title: string) => {
    const category = SECTIONS.find(section => section.title === title);
    setSelectedCategory(category);
  };

  return (
    <AppWrapper>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={StyleSheet.flatten([styles.cityContainer, commonStyles.flexRow])}>
            <Text type="tertiary" center color={colors.semi_primary1}>
              city:
            </Text>
            <Text type="primary" center color={colors.primary1}>
              {city}
            </Text>
          </View>
        </View>
        <Line />
        <ScrollView>
          <View style={styles.scrollContainer}>
            <View style={StyleSheet.flatten([styles.inputContainer, commonStyles.flexRow])}>
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
              <SelectedCategory category={selectedCategory} city={city} />
            ) : (
              <Categories
                city={city}
                categories={SECTIONS}
                onSelect={handleCategorySelect}
              />
            )}
          </View>
        </ScrollView>
      </View>
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
