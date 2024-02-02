import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';
import {DEVICE_HEIGHT, DEVICE_WIDTH, commonStyles, getIndex} from '../utils';
import {ProgressBar} from './ProgressBar';

const image: ImageSourcePropType = require('../assets/images/gedim.png');

export const Gallery = () => {
  const [imageIndex, setImageIndex] = useState(1);

  const handleImageScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = getIndex(e);
    setImageIndex(index);
  };

  const images = Array.from({length: 7}, () => image);
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={images}
        pagingEnabled
        keyExtractor={(_, index) => index.toString()}
        onScroll={e => handleImageScroll(e)}
        renderItem={({item}) => <Image source={item} style={styles.image} />}
      />
      <View style={StyleSheet.flatten([styles.progressContainer, commonStyles.flexRow])}>
        <ProgressBar index={imageIndex} dataLength={images.length} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    rowGap: 20,
  },
  image: {
    height: DEVICE_HEIGHT * 0.3,
    width: DEVICE_WIDTH,
  },
  progressContainer: {
    justifyContent: 'center',
    columnGap: 10,
  },
});
