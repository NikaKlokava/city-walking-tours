import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  LayoutAnimation,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';
import {DEVICE_HEIGHT, DEVICE_WIDTH, commonStyles, getIndex} from '../utils';
import {ProgressBar} from './ProgressBar';

// const image: ImageSourcePropType = require('../assets/images/gedim.png');

export const Gallery = ({images}: {images: string[]}) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleImageScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = getIndex(e);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setImageIndex(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={images}
        pagingEnabled
        keyExtractor={(_, index) => index.toString()}
        onScroll={e => handleImageScroll(e)}
        renderItem={({item, index}) => (
          <View style={styles.imageContainer}>
            <Image
              src={item}
              style={[styles.image, imageIndex === index && styles.other]}
            />
          </View>
        )}
      />
      <View
        style={StyleSheet.flatten([
          styles.progressContainer,
          commonStyles.flexRow,
        ])}>
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
  imageContainer: {
    height: DEVICE_HEIGHT * 0.3,
    width: DEVICE_WIDTH,
    justifyContent: 'center',
  },
  image: {
    height: '50%',
    width: '50%',
    alignSelf: 'center',
    opacity: 0.2,
  },
  progressContainer: {
    justifyContent: 'center',
    columnGap: 10,
  },
  other: {
    height: '100%',
    width: '100%',
    opacity: 1,
  },
});
