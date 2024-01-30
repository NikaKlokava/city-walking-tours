import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, TextInput, View} from 'react-native';
import {CITIES, SECTIONS} from '../utils/data';
import {Text} from '../components/base/Text';
import {colors} from '../utils/colors';
import {flexRow} from '../utils/flex';
import {Line} from '../components/Line';
import {SearchBar} from '../components/SearchBar';
import {BackBtn} from '../components/BackBtn';
import {Categories} from '../components/Categories';
import {SelectedCategory} from '../components/SelectedCategory';
import {Icon} from '../components/base/Icon';
import {AppWrapper} from '../components/AppWrapper';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const icon = require('../assets/search.png');

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
        <View style={[styles.headerContainer, flexRow]}>
          <BackBtn onClick={() => navigation.goBack()} />
          <View style={[styles.cityContainer, flexRow]}>
            <Text
              type="tertiary"
              center
              color={colors.primary1}
              style={styles.opacity}>
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
            {!selectedCategory && (
              <View style={[styles.inputContainer, flexRow]}>
                <TextInput
                  style={styles.searchInput}
                  placeholder="What do you want to find?"
                  placeholderTextColor={`rgba(250,250,250,0.7)`}
                />
                <Icon source={icon} size="medium" />
              </View>
            )}
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
    // paddingTop: 80,
    paddingHorizontal: 10,
  },
  headerContainer: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  scrollContainer: {rowGap: 20, marginTop: 10},
  cityContainer: {columnGap: 10},
  inputContainer: {
    padding: 15,
    backgroundColor: '#263238', // !!!
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  searchInput: {
    color: colors.primary1,
    fontSize: 15,
  },
  opacity: {
    opacity: 0.7,
  },
});
