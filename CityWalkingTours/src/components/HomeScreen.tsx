import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  TouchableOpacity,
} from 'react-native';

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
      <Pressable style={styles.btnContainer}>
        <TouchableOpacity>
          <Text style={styles.getStartedBtn}>Get Started</Text>
        </TouchableOpacity>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
    paddingTop: 80,
    backgroundColor: '#031F2B',
  },
  container: {
    flex: 2,
    rowGap: 20,
  },
  btnContainer: {flex: 1},
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
  getStartedBtn: {
    color: '#5EDFFF',
    alignSelf: 'center',
    fontSize: 30,
    fontFamily: 'Gill Sans',
    padding: 10,
    borderWidth: 1,
    borderColor: '#5EDFFF',
    borderRadius: 10,
  },
});
