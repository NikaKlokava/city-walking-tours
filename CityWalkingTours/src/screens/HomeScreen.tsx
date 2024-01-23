import React, {useState} from 'react';
import {
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';
import {StyledBtn} from '../components/StyledBtn';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from '../utils/screen';
import {colors} from '../utils/colors';
import {DATA} from '../utils/data';
import {Text} from '../components/base/Text';
import {Line} from '../components/Line';

export const HomeScreen = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleScreenScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const totalWidth = e.nativeEvent.layoutMeasurement.width;
    const xPos = e.nativeEvent.contentOffset.x;
    const index = Math.floor(xPos / totalWidth);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <FlatList
          data={DATA}
          horizontal
          pagingEnabled
          onScroll={e => handleScreenScroll(e)}
          keyExtractor={(_, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View style={styles.listContainer}>
                {item.image && (
                  <Image source={item.image} style={styles.backImg} />
                )}
                <View style={styles.descriptionContainer}>
                  <Text
                    type="primary"
                    color={colors.primary1}
                    style={styles.title}
                    center>
                    {item.title}
                  </Text>
                  <Line />
                  <Text type="tertiary" color={colors.primary4} center>
                    {item.description}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.dottsContainer}>
        {currentIndex === DATA.length - 1 ? (
          <StyledBtn title="Get Started" />
        ) : (
          <>
            {DATA.map((_, index) => (
              <View
                key={index}
                style={[styles.dott, currentIndex === index && styles.active]}
              />
            ))}
          </>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },
  listContainer: {
    width: DEVICE_WIDTH,
    rowGap: 70,
    marginTop: 30,
  },
  backImg: {
    height: 0.3 * DEVICE_HEIGHT,
    width: DEVICE_WIDTH,
    objectFit: 'contain',
  },
  descriptionContainer: {paddingHorizontal: 15, rowGap: 10},
  title: {
    marginBottom: 10,
  },
  dottsContainer: {
    flexDirection: 'row',
    columnGap: 20,
    justifyContent: 'center',
  },
  dott: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: colors.primary3,
    opacity: 0.4,
  },
  active: {
    opacity: 1,
  },
});
