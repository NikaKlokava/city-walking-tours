import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Text} from '../components/base/Text';
import {colors} from '../utils/colors';

const image = require('../assets/ozas.png');
const startIcon = require('../assets/star.png');

const windowHeight = Dimensions.get('screen').height;

export const Details = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <LinearGradient
          colors={['#00000000', '#000000']}
          style={styles.gradient}>
          <View style={styles.titleContainer}>
            <Text type="primary" color={colors.primary1}>
              Title
            </Text>
            <Text type="secondary" color={colors.primary1}>
              4.5
            </Text>
            <Image source={startIcon} style={styles.starIcon} />
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: windowHeight * 0.3,
    width: '100%',
  },
  gradient: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  starIcon: {
    width: 20,
    height: 20,
  },
});
