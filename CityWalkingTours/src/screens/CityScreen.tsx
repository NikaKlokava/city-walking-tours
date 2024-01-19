import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Sections} from '../components/Sections';
import {Categories} from '../components/Categories';

const image = require('../assets/lith_heart.png');
const windowWidth = Dimensions.get('window').width;

export const CityScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Hello from {CITIES[0]}!</Text>
        <Image source={image} style={styles.image} />
      </View>
      <TextInput
        placeholder="what do you want to find?"
        placeholderTextColor={'grey'}
        style={styles.searchInput}
      />
      <Categories />
      <Sections />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 25,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Georgia',
    textAlign: 'center',
  },
  image: {
    width: 0.1 * windowWidth,
    height: 35,
    marginRight: 10,
  },
  searchInput: {
    padding: 15,
    color: 'white',
    fontSize: 20,
    backgroundColor: '#263238',
    borderRadius: 10,
  },
});

const CITIES = [
  'VILNIUS',
  'KAUNO',
  'TRAKAI',
  'KLAIPEDA',
  'PALANGA',
  'DRUSKININKAI',
];
