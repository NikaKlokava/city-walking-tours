import {
  LayoutAnimation,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';

export const getIndex = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
  const totalWidth = e.nativeEvent.layoutMeasurement.width;
  const xPos = e.nativeEvent.contentOffset.x;
  const index = Math.floor(xPos / totalWidth);
  return index;
};

export const getInitialRegion = (latitude: number, longitude: number) => {
  return {
    latitude,
    longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.009,
  };
};
export const layoutAnimConfig = {
  duration: 300,
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  delete: {
    duration: 300,
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
};
