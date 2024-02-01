import React, {useRef} from 'react';
import {
  Animated,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TextStyle,
  View,
} from 'react-native';
import {Text} from '../components/base/Text';
import {DEVICE_HEIGHT, SECTIONS, commonStyles, colors} from '../utils';
import {BackBtn} from '../components/BackBtn';
import {Rating} from '../components/Rating';
import {Line} from '../components/Line';
import {Icon} from '../components/base/Icon';
import {Details} from '../components/Details';
import {Gallery} from '../components/Gallery';
import {AppWrapper} from '../components/AppWrapper';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SVG_LOCATION from '../assets/icons/location.svg';

const image = require('../assets/images/sodas.png');

type Props = {
  navigation: NativeStackNavigationProp<any, any>;
};

export const DetailsScreen = ({navigation}: Props) => {
  const place = SECTIONS[0].data[0];
  const Max_Header_Height = DEVICE_HEIGHT * 0.4;
  const Min_Header_Height = DEVICE_HEIGHT * 0.3;
  const Scroll_Distance = Max_Header_Height - Min_Header_Height;

  const scrollOffsetY = useRef(new Animated.Value(0)).current;

  const animatedHeaderHeight = scrollOffsetY.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [Max_Header_Height, Min_Header_Height],
    extrapolate: 'clamp',
  });

  return (
    <AppWrapper noPaddingTop>
      <View style={styles.container}>
        <Animated.View style={{height: animatedHeaderHeight}}>
          <ImageBackground source={image} style={styles.headerContainer}>
            <View style={styles.backBtnContainer}>
              <BackBtn onClick={() => navigation.goBack()} />
            </View>
            <View style={styles.headerDescription}>
              <Text type="primary" color={colors.primary1}>
                {place.title}
              </Text>
              <View
                style={StyleSheet.flatten([styles.locationContainer, commonStyles.flexRow])}>
                <Icon icon={SVG_LOCATION} size="small" />
                <Text type="quaternary" color={colors.primary1}>
                  {place.details.location}
                </Text>
              </View>
              <Rating rating={place.rating} white />
            </View>
          </ImageBackground>
        </Animated.View>

        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollOffsetY}}}],
            {useNativeDriver: false},
          )}>
          <View style={styles.generalInfo}>
            <Line white />
            <Text type="tertiary" color={colors.semi_primary1}>
              {place.description}
            </Text>
            <Line />
          </View>
          <View style={styles.detailsContainer}>
            <Details title={place.details.location} type="location" />
            <Details title={place.details.workingHours} type="hours" />
            <Details title={place.details.site} type="site" />
          </View>
          <Gallery />
        </ScrollView>
      </View>
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: '100%',
    justifyContent: 'space-between',
  },
  backBtnContainer: {
    marginTop: 70,
    marginLeft: 20,
    opacity: 0.7,
  },
  headerDescription: {
    backgroundColor: colors.semi_primary2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    rowGap: 5,
  },
  locationContainer: {columnGap: 5},
  generalInfo: {
    paddingHorizontal: 10,
    marginTop: 20,
    rowGap: 20,
  },
  detailsContainer: {margin: 30, rowGap: 20},
});
