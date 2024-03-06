import React, {useMemo, useRef} from 'react';
import {
  Animated,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {Text} from '../components/base/Text';
import {
  commonStyles,
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
  getInitialRegion,
  ids,
} from '../utils';
import {BackBtn} from '../components/BackBtn';
import {Rating} from '../components/Rating';
import {Line} from '../components/Line';
import {Icon} from '../components/base/Icon';
import {Details} from '../components/Details';
import {Gallery} from '../components/Gallery';
import {AppWrapper} from '../components/AppWrapper';
import SVG_LOCATION from '../assets/icons/location.svg';
import {useNavigation, useRoute} from '@react-navigation/native';
import MapView, {Marker} from 'react-native-maps';
import {useThemeContext} from '../context/theme-context';

const MAX_HEADER_HEIGHT = DEVICE_HEIGHT * 0.4;
const MIN_HEADER_HEIGHT = DEVICE_HEIGHT * 0.3;
const SCROLL_DISTANCE = MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT;

export const DetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {theme} = useThemeContext();

  const data = route.params as DataType;

  const styles = useMemo(() => createStyles(theme), [theme]);

  const coordinates = {
    latitude: data.details.coordinates.latitude,
    longitude: data.details.coordinates.longitude,
  };

  const scrollOffsetY = useRef(new Animated.Value(0)).current;

  const animatedHeaderHeight = scrollOffsetY.interpolate({
    inputRange: [0, SCROLL_DISTANCE],
    outputRange: [MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT],
    extrapolate: 'clamp',
  });

  return (
    <AppWrapper noPaddingTop>
      <View style={StyleSheet.flatten([commonStyles.container])}>
        <Animated.View
          style={StyleSheet.flatten({height: animatedHeaderHeight})}>
          <ImageBackground src={data.image} style={styles.headerContainer}>
            <View style={styles.backBtnContainer}>
              <BackBtn onClick={() => navigation?.goBack()} />
            </View>
            <View style={styles.headerDescription}>
              <Text type="primary" color={theme.colors.primary1}>
                {data.title}
              </Text>
              <View
                style={StyleSheet.flatten([
                  styles.locationContainer,
                  commonStyles.flexRow,
                ])}>
                <Icon icon={SVG_LOCATION} size="small" />
                <Text type="quaternary" color={theme.colors.primary1}>
                  {data.details.location}
                </Text>
              </View>
              <Rating rating={data.rating} white={theme.id === ids.dark} />
            </View>
          </ImageBackground>
        </Animated.View>

        <ScrollView
          style={StyleSheet.flatten([commonStyles.container])}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollOffsetY}}}],
            {
              useNativeDriver: false,
            },
          )}>
          <View style={styles.generalInfo}>
            <Line white />
            <Text type="tertiary" color={theme.colors.primary1}>
              {data.description}
            </Text>
            <Line />
          </View>
          <View style={styles.detailsContainer}>
            <Details title={data.details.location} type="location" />
            <Details title={data.details.hours} type="hours" />
            <Details title={data.details.site} type="site" />
          </View>
          <Gallery images={data.gallery} />
          <MapView
            style={StyleSheet.flatten([
              commonStyles.container,
              styles.mapStyle,
            ])}
            initialRegion={getInitialRegion(
              coordinates.latitude,
              coordinates.longitude,
            )}>
            <Marker
              coordinate={coordinates}
              image={{uri: 'location'}}
              title="Location"
            />
          </MapView>
        </ScrollView>
      </View>
    </AppWrapper>
  );
};

const createStyles = (theme: ThemeType) =>
  StyleSheet.create({
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
      backgroundColor: theme.colors.semi_primary2,
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
    mapStyle: {
      width: DEVICE_WIDTH,
      height: DEVICE_HEIGHT * 0.3,
      marginVertical: 30,
    },
  });
