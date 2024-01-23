import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {CITIES} from '../utils/data';
import {Text} from '../components/base/Text';
import {colors} from '../utils/colors';
import {flexRow} from '../utils/flex';
import {Line} from '../components/Line';
import {Categories} from '../components/Categories';
import {BackBtn} from '../components/BackBtn';
import {CategoryItem} from '../components/CategoryItem';
import {Sections} from '../components/Sections';
// import {Sections} from '../components/Sections';
// import {Categories} from '../components/Categories';
// import {CategoryItem} from '../components/CategoryItem';

const image = require('../assets/back_icon.png');
const icon = require('../assets/search.png');

export const CityScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.headerContainer, flexRow]}>
        <BackBtn />
        <View style={[styles.cityContainer, flexRow]}>
          <Text type="tertiary" center color={colors.primary2}>
            city:
          </Text>
          <Text type="primary" center color={colors.primary1}>
            {CITIES[0].city}
          </Text>
        </View>
      </View>
      <Line />
      <ScrollView>
        <View style={styles.scrollContainer}>
          <View style={[styles.inputContainer, flexRow]}>
            <TextInput
              style={styles.searchInput}
              placeholder="What do you want to find?"
              placeholderTextColor={colors.primary2}></TextInput>
            <Image source={icon} style={styles.searchIcon} />
          </View>
          <Categories />
          <Sections />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    backgroundColor: '#263238',
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  searchIcon: {width: 20, height: 20},
  searchInput: {
    color: 'white',
    fontSize: 15,
  },
});
