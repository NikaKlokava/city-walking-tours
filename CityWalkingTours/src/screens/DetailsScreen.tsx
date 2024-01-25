import React, {useRef} from 'react';
import {
  Animated,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {Text} from '../components/base/Text';
import {colors} from '../utils/colors';
import {DEVICE_HEIGHT} from '../utils/screen';
import {BackBtn} from '../components/BackBtn';
import {Rating} from '../components/Rating';
import {flexRow} from '../utils/flex';
import {SECTIONS} from '../utils/data';
import {Line} from '../components/Line';

const image = require('../assets/ozas.png');
const icon = require('../assets/location.png');

export const DetailsScreen = () => {
  const place = SECTIONS[0].data[0];
  const Max_Header_Height = DEVICE_HEIGHT * 0.4;
  const Min_Header_Height = DEVICE_HEIGHT * 0.2;
  const Scroll_Distance = Max_Header_Height - Min_Header_Height;

  const scrollOffsetY = useRef(new Animated.Value(0)).current;

  const animatedHeaderHeight = scrollOffsetY.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [Max_Header_Height, Min_Header_Height],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{height: animatedHeaderHeight}}>
        <ImageBackground source={image} style={styles.headerContainer}>
          <View style={styles.generalDescription}>
            <Text type="primary" color={colors.primary1}>
              {place.title}
            </Text>
            <View style={[styles.location, flexRow]}>
              <Image source={icon} style={styles.icon} />
              <Text type="fifth" color={colors.primary1} style={styles.opacity}>
                {place.location}
              </Text>
            </View>
            <Rating rating={place.rating} white />
          </View>
        </ImageBackground>
      </Animated.View>

      <ScrollView
        scrollEventThrottle={10}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollOffsetY}}}],
          {useNativeDriver: false},
        )}>
        <View style={styles.detailedContainer}>
          <Text type="primary" color={colors.primary1} center>
            {place.title}
          </Text>
          <Line white />
          <Text
            type="tertiary"
            color={colors.primary1}
            style={styles.description}>
            {place.description}
          </Text>
          <Line white />
        </View>
        <View style={styles.aboutContainer}>
          <View>
            <View></View>
            <View></View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  generalDescription: {
    backgroundColor: 'rgba(0,0,0,0.7)', // !!
    paddingHorizontal: 10,
    paddingVertical: 5,
    rowGap: 5,
  },
  location: {columnGap: 5},
  icon: {width: 15, height: 15},
  detailedContainer: {
    paddingHorizontal: 10,
    marginTop: 20,
    rowGap: 20,
  },
  description: {
    opacity: 0.5,
  },
  opacity: {
    opacity: 0.7,
  },

  aboutContainer: {
    backgroundColor: 'pink',
    margin: 30,
    minHeight: 500,
  },
});
