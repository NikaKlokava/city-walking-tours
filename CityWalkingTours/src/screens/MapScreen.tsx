import React, {useEffect, useState} from 'react';
import {AppWrapper} from '../components/AppWrapper';
import {StyleSheet, View} from 'react-native';
import {GEOLOCATION_DATA, colors, commonStyles} from '../utils';
import MapView, {Callout, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from '@react-navigation/native';
import {Text} from '../components/base/Text';
import {routes} from '../navigation';

type LocationType = {
  latitude: number;
  longitude: number;
  altitude: number | null;
  accuracy: number;
  altitudeAccuracy: number | null;
  heading: number | null;
  speed: number | null;
};

export const MapScreen = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

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
          initialRegion={{
            latitude: 54.687157,
            longitude: 25.279652,
            latitudeDelta: 0.0955,
            longitudeDelta: 0.0421,
          }}>
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
          {GEOLOCATION_DATA.map((item, index) => (
            <Marker
              key={index}
              coordinate={{latitude: item.latitude, longitude: item.longitude}}
              image={{uri: 'location'}}
              title="Location">
              <Callout
                style={styles.description}
                onPress={() => navigation.navigate(routes.DETAILS)}>
                <Text type="quaternary" color={colors.semi_primary2}>
                  Read more...
                </Text>
              </Callout>
            </Marker>
          ))}
        </MapView>
      </View>
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  description: {
    // padding: 10,
    // backgroundColor: 'pink',
  },
});
