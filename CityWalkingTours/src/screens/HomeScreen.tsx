import React from 'react';
import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import {StyledBtn} from '../components/StyledBtn';

const image = require('../assets/back_travel_img.png');
const windowWidth = Dimensions.get('window').width;

export const HomeScreen = () => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Image source={image} style={styles.backImg} />
        <View>
          <Text style={styles.title}>Escape the ordinary life</Text>
          <Text style={styles.description}>
            Discover great experiences around you and make you live interesting!
          </Text>
        </View>
      </View>
      <StyledBtn title="Get Started" />
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    flex: 3,
    rowGap: 20,
  },
  backImg: {
    width: 0.9 * windowWidth,
    height: 300,
    alignSelf: 'center',
  },
  title: {
    fontSize: 26,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Georgia',
    marginBottom: 10,
  },
  description: {
    color: '#D6D2D2',
    textAlign: 'center',
    marginHorizontal: 20,
    fontSize: 16,
    letterSpacing: 1,
    fontFamily: 'Georgia',
  },
});
