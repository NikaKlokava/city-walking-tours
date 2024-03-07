import React, {useEffect, useState} from 'react';
import {AppWrapper} from '../components/AppWrapper';
import {Image, StyleSheet, View} from 'react-native';
import {INITIAL_REGION, colors, commonStyles} from '../utils';
import MapView, {Callout, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from '@react-navigation/native';
import {Text} from '../components/base/Text';
import {routes} from '../navigation';
import {observer} from 'mobx-react';
import {sectionsStore} from '../context/sections-store';
import {Rating} from '../components/Rating';
import {Line} from '../components/Line';
import {useThemeContext} from '../context/theme-context';

type LocationType = {
  latitude: number;
  longitude: number;
  altitude: number | null;
  accuracy: number;
  altitudeAccuracy: number | null;
  heading: number | null;
  speed: number | null;
};

export const MapScreenContent = observer(({store}: {store: SectionsStore}) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const {theme} = useThemeContext();

  const [currentLocation, setCurrentLocation] = useState<LocationType>();

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => setCurrentLocation(position.coords),
      error => console.log(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  return (
    <AppWrapper noPaddingTop>
      <View style={StyleSheet.flatten([commonStyles.container])}>
        <MapView
          style={StyleSheet.flatten([commonStyles.container])}
          initialRegion={INITIAL_REGION}>
          {currentLocation && (
            <Marker
              coordinate={{
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
              }}
              image={{uri: 'geolocation'}}
              title="Your Location"
              description="You here now"
            />
          )}
          {store.data.map(section =>
            section.data.map((place, index) => {
              return (
                <Marker
                  key={index}
                  coordinate={{
                    latitude: place.details.coordinates.latitude,
                    longitude: place.details.coordinates.longitude,
                  }}
                  image={{uri: 'location'}}
                  title="Location">
                  <Callout
                    style={styles.description}
                    onPress={() => navigation.navigate(routes.DETAILS, place)}>
                    <Image src={place.image} style={styles.imageStyle} />
                    <Text type="quaternary" color={theme.colors.primary2}>
                      {place.title}
                    </Text>
                    <Rating rating={place.rating} />
                    <Line black />
                    <Text type="quaternary" color={theme.colors.semi_primary2}>
                      Read more...
                    </Text>
                  </Callout>
                </Marker>
              );
            }),
          )}
        </MapView>
      </View>
    </AppWrapper>
  );
});

export const MapScreen = () => <MapScreenContent store={sectionsStore} />;

const styles = StyleSheet.create({
  description: {
    padding: 5,
    width: 230,
    height: 250,
  },
  imageStyle: {
    width: '100%',
    height: '60%',
  },
});
